

import { app, protocol } from "electron"; 
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';
const isDevelopment = process.env.NODE_ENV !== "production"; 
//  import Router from './Config/Router'
const Router = require('./Config/Router');
const log = require('electron-log');
// Server = require('./Server/server.js')
const { sequelize } = require('./Config/models')

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } },
]); 

app.setAppUserModelId("FlixyLe");
// Quit when all windows are closed.
app.on("window-all-closed", () => { 
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => { 
  if (win === null) {
    createWindow();
  }
}); 
app.allowRendererProcessReuse=false
app.on("ready", async () => {
  try { 
    await sequelize.sync()  
    await sequelize.authenticate();
    log.info('Connection has been established successfully.');
    log.info('Database is running :>> '); 
    require('./Config/Router/routes.js')
    new Router()  
  } catch (err) {
    log.error(err)
  } 
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", (data) => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
