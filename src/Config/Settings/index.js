// import { app, Tray, Menu,  screen, session,  Notification, BrowserWindow, ipcMain } from 'electron'
// import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
const {
 app,
 Tray,
 Menu,
 screen,
 session,
 Notification,
 BrowserWindow,
 ipcMain
} = require('electron');
const windowStateKeeper = require('electron-window-state');
const {
 createProtocol
} = require('vue-cli-plugin-electron-builder/lib');
const log = require('electron-log');
const path = require('path')
const axios = require('axios')
module.exports = class Settings {
 constructor() {
   this.mainWindowState = windowStateKeeper({
     defaultWidth: 1200,
     defaultHeight: 700
   });
  this.Main
  this.MainConfig = {
    x: this.mainWindowState.x,
    y: this.mainWindowState.y,
    width: this.mainWindowState.width,
    height: this.mainWindowState.height, 
    frame: false, 
    show: false,
    transparent: false,
    webPreferences: {
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    }
  }
  this.login 
  this.loginConfig = {
   width: 512,
   height: 512,
   frame: false,
   show: false,
   transparent: true,
   webPreferences: {
    nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
    // preload: path.join(__dirname, 'preload.js')
   }
  }
  this.ses = session.defaultSession.cookies
  this.display = screen.getPrimaryDisplay();
  this.url = 'http://localhost',
  this.token = this.getToken('token')
  this.menuContext()
 }
 Login() {
  try {
   this.login = new BrowserWindow(this.loginConfig)
   if (process.env.WEBPACK_DEV_SERVER_URL) {
    this.login.loadURL(process.env.WEBPACK_DEV_SERVER_URL + '#/login')
    if (!process.env.IS_TEST) this.login.webContents.openDevTools()
   } else {
    if (!this.createdAppProtocol) {
     createProtocol('app')
     this.createdAppProtocol = true
    }
    this.login.webContents.openDevTools()
    this.login.loadURL(`app://./login.html`)
   }
   this.login.on('closed', () => {
    this.login = null
   })
    this.login.once('ready-to-show', () => {
     if (this.login) {
      this.login.show()
     }
    })

  } catch (err) {
   log.error('openWin >>', err)
  }
 }

 openMain() {
  try {
   this.Main = new BrowserWindow(this.MainConfig)
   if (process.env.WEBPACK_DEV_SERVER_URL) {
    this.Main.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) this.Main.webContents.openDevTools()
   } else {
    if (!this.createdAppProtocol) {
     createProtocol('app')
     this.createdAppProtocol = true
    }
     this.Main.webContents.openDevTools()
    this.Main.loadURL(`app://./index.html`)
   }
   this.Main.on('closed', () => {
    this.Main = null
   })
    this.Main.once('ready-to-show', () => {
     this.Main.show()
    })
  } catch (err) {
   log.error('openMain >>', err)
  }
 }

 switshOn() {
  try { 
   if (!this.Main) {
    this.openMain()
   } else {
    this.Main.show()
   }
    if (this.login) {
      this.login.close()
    }
  } catch (err) {
   log.error("switshOn", err);
  }
 }
 switshOff() {
  try { 
   if (!this.login) {
    this.Login()
   } else {
    this.login.show()
   }
   if (this.Main) {
     this.Main.close()
     this.Main = null
   }
  } catch (err) {
   log.error("switshOff ", err);
  }
 }
 switchForm(check) {
  try {
   if (check) { // islogin then close Login Open Main
    log.info('check is login :>> ', check);
    this.switshOn()
   } else { // is not login then close Main Open Login
    log.info('check not login:>> ', check);
    this.switshOff()
   }
  } catch (err) {
   log.error('switshForm >>', err)
  }
 }
 menuContext() {
  try {
   let tray = new Tray(path.join(__static, 'icon.png'))
   const contextMenu = Menu.buildFromTemplate([{
     type: 'separator'
    },
    {
     label: 'Exit',
     click() {
      app.isQuiting = true;
      app.quit();
     }
    },
   ])
   tray.setToolTip('Application Mesanalyse')

   tray.setContextMenu(contextMenu)
   tray.on('click', () => {
    this.login.isVisible() ? this.login.hide() : this.login.show();
   })
  } catch (err) {
   log.error("menuContext", err);
  }
 }
 Notifications({
  title,
  body,
  icon
 }) {
  try {
   return new Notification({
    title: title,
    body: body,
    icon: icon,
   })
  } catch (err) {
   log.error("Notifications", err);
  }
 }
 getToken(tkn) {
  try {
   return this.ses.get({
     url: this.url,
     name: tkn,
    })
    .then((cookies) => {
     return cookies[0] ? cookies[0].value : ""
    })
  } catch (err) {
   log.error("getToken ", err);
  }
 }
 setToken(token, value, expirationDate) {
  try {
   var exdate = new Date();
   exdate = ((exdate.getTime() + (expirationDate * 60 * 60 * 1000)) / 1000.0);
   const cookie = {
    url: this.url,
    name: token,
    value: value,
    expirationDate: exdate
   }
   this.ses.set(cookie).then(() => {
    this.token = value
   })
  } catch (err) {
   log.error("setToken ", err);
  }
 }
 rmcookies(name) {
  try {
   return this.ses.remove(this.url, name)
  } catch (err) {
   log.error("rmcookies ", err);
  }
 }
 async baxios(method, url, data, withToken = true) {
  let token = await this.token
  return await axios({
   method: method,
   url: url,
   data: data,
   baseURL: 'http://127.0.0.1:3333/',
   timeout: 1500,
  })
 }
}