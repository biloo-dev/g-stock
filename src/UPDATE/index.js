const isDevelopment = process.env.NODE_ENV !== "production";
// const builder = require("electron-builder")
// const Platform = builder.Platform
const { autoUpdater } = require("electron-updater");
const os = require("os");
const log = require("electron-log");
autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
let version = app.getVersion();
let arch = os.arch();
autoUpdater.setFeedURL({
  provider: "generic",
  url: `http://127.0.0.1:3333/api/${version}/${arch}`,
});

//-------------------------------------------------------------------
// Auto updates
//-------------------------------------------------------------------
autoUpdater.on("checking-for-update", () => {
  console.log("Checking for update...");
});
autoUpdater.on("update-available", (ev, info) => {
  console.log("Update available.");
  log.info("info", info);
});
autoUpdater.on("update-not-available", (ev, info) => {
  console.log("Update not available.");
  log.info("info", info);
});
autoUpdater.on("error", (ev, err) => {
  console.log("Error in auto-updater.");
  log.info("err", err);
});
autoUpdater.on("update-downloaded", (ev, info) => {
  console.log("Update downloaded.  Will quit and install in 5 seconds.");
  log.info("info", info);
  // Wait 5 seconds, then quit and install
  // setTimeout(function() {
  //   autoUpdater.quitAndInstall();
  // }, 5000)
});
// Wait a second for the window to exist before checking for updates.
//autoUpdater.setFeedURL('http://127.0.0.1:8080/');
setTimeout(function() {
  log.info("starting update check");
  // autoUpdater.checkForUpdates();
}, 1000);
