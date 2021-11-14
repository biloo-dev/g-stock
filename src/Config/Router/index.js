// import Settings from '../Settings' 
let Settings = require('../Settings')
let path = require('path')
let fs = require('fs')
const { ipcMain, session, app } = require('electron')
const log = require('electron-log')
module.exports = class Route extends Settings {
 constructor() {
  super() 
  this.init()
 }
 async init() {

  try {
   let Userpath = app.getPath('userData') + '/db'
   fs.mkdirSync(Userpath)
  } catch (err) {
   if (err.code !== 'EEXIST') throw err
  }
  setTimeout(() => {
   this.virifayToken()
   this.autoSeed()
  }, 2000);
  ipcMain.on('notify-success', (evn, msg) => {
   this.Notifications({
    title: "Success",
    body: msg,
    icon: path.join(__static, "success.png")
   }).show()
  })
  ipcMain.on('notify-error', (evn, msg) => {
   this.Notifications({
    title: "Error",
    body: msg,
    icon: path.join(__static, "error.png")
   }).show()
  })
  ipcMain.on('notify-info', (evn, msg) => {
   this.Notifications({
    title: "Information",
    body: msg,
    icon: path.join(__static, "info.png")
   }).show()
  })
  ipcMain.on('notify-warning', (evn, msg) => {
   this.Notifications({
    title: "Warning",
    body: msg,
    icon: path.join(__static, "warning.png")
   }).show()
  })
  ipcMain.handle('logout', async (evn, arg) => {
   await this.rmcookies('token')
   await this.switchForm(false)
   return true
  })
 
  session.defaultSession.cookies.on('changed', (event, cookie, cause, removed) => {
   if (removed) {
    this.switchForm(false)
   }
  })
  ipcMain.handle('login', async (event, arg) => {
   return await this.baxios("POST", '/login', arg, false).then(res => {
   log.info('login success >> :', res.data.accessToken)
    this.setToken('token', res.data.accessToken, 6)
    this.Notifications({
     title: "Bienvenue",
     body: "Cher abonné " + res.data.user.username,
     icon: path.join(__static, "success.png")
    }).show()
   
   this.switchForm(true)
    return res.data;
   }).catch(err => {
    // this.switchForm(false)
    // console.log('err :>> ', err);
    if (err && err.response && err.response.data)
    console.log('err login:>> ', err.response.data);
     this.Notifications({
      title: "Unauthenticated",
      body: err,
      icon: path.join(__static, "unauth.png")
     }).show()

    return false
   })
  })
 }

 async autoSeed() {
  try { 
   return await this.baxios("post", '/autoSeed')
  } catch (err) {
   // log.error('autoSeed >> :', err);

  }
 }
 async virifayToken() {
  return await this.baxios("post", '/virifayToken').then(res => {
   this.switchForm(true)
   this.Notifications({
    title: "Bienvenue",
    body: "Cher abonné " + res.data.fullName,
    icon: path.join(__static, "success.png")
   }).show()
  }).catch(err => {
   // log.error('virifayToken>> :',err)
   this.switchForm(false)
   this.Notifications({
    title: "Unauthenticated",
    body: err,
    icon: path.join(__static, "unauth.png")
   }).show()
  })

 }
}