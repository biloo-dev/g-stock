module.exports = { 
  pages: {
    index:  'src/main.js',
    login: 'src/login/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      preload: 'src/preload.js',
      externals: [ "intel","robotjs", 
        'knex', 'sqlite3', "sequelize", "sequelize-cli" ],
      mainProcessWatch: [
        "src/Config/Router/index.js",
        "src/Config/Settings/index.js",
        "src/Config/index.js",
        "src/Config/tools/utils.js",
        "src/Config/tools/getControllers.js",
        "src/Config/Router/routes.js"
      ], 
      builderOptions: {
        appId: "dz.FlixyLe",
        productName: "FlixyLe",
        artifactName: "${productName}-${version}-${arch}.${ext}",
        copyright: "Copyright © 2020 ScriptGang",
        publish: [
          {
            provider: "generic",
            url: "http://127.0.0.1:3333/api/${version}/${arch}",
          },
        ],
        win: {
          publish: [
            {
              provider: "generic",
              url: "https://127.0.0.1:3333/api/${version}/${arch}",
            },
          ],
          target: [
            {
              target: "nsis",
              "arch": [
               "x64",
               // "ia32"
              ]
            },
          ],
          icon: "./public/LOGOO3.png",
        },
        nsis: {
          oneClick: false,
          perMachine: true,
          displayLanguageSelector: true,
          installerLanguages: ["en_US", "fr", "ar"],
          allowToChangeInstallationDirectory: true,
        },
      },
    },
  },
  transpileDependencies: ["vuetify"],
 
};
