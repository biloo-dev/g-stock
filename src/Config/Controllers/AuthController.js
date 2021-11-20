const { User } = require('../Models')
const httpError = require('http-errors')  
const { signAccessToken } = require('../Helpers/jwt_helper.js');
const log = require('electron-log');  
module.exports = {
  async login(req, res, next) {
  try {   
   let { username, password } = req.body
   if (!username || !password) return next(next(httpError(500, '`username` + `password` are required fields'))) 
    let user = await User.verify(username , password)
    if (!user) return next(httpError(401, 'Username or password do not match'))
   let lifeTime = "6h"
   if (req.body.remeberMe) {
    lifeTime = "1d"
   }
   let accessToken = await signAccessToken(user.id,lifeTime)
   req.auth = user
   res.send({
    user: user,
    accessToken: accessToken
   }) 
  } catch (err) { 
    console.log('err :>> ', err);
   log.error("AuthController>>", err);
  //  next(err)
  }
 },
 async virifayToken(req, res, next) {
   try {   
     let user = await User.findById(req.payload.aud); 
     res.send({ user})
  } catch (err) {
    log.error("AuthController>>", err);
    next(httpError.Unauthorized())
  //  next(err)
  }
 },
 async autoSeed(req, res, next) {
  try {
   
    let user = await User.findAll()
    console.log('user :>> ', user.length);
    if(!user.length) {
      await User.create({
        username: "admin",
        name: "admnistrator",
        password: "admin123",
      }) 
    }
    res.send('successfully seeds')
  } catch (err) {
   log.error("AuthController>>", err);
   next(err)
   // next(httpError.Unauthorized())
  }
 },
 async Register({ body }, res , next) {
  try {
    const check  = await User.findOne({ username: body.username }) 
    if (check) return next(next(httpError(500, 'username already exists'))) 
   let user = await User.create(body)
   let accessToken = await signAccessToken(user)
    return res.json({
    status: 200,
    ok: true,
    message: 'Registration successful',
    data: {
      user: await User.findOne({ id: user }),
      accessToken: accessToken
    }
   })
  } catch (err) {
    console.log('err :>> ', err);
   return next(httpError[500],err)
 
  }
 },
  async logout({ body ,auth }, res , next) {
    try {
        console.log('auth :>> ', auth);
    } catch (err) {
      console.log('err :>> ', err);
      return next(httpError[500],err)
  
    }
  }

}