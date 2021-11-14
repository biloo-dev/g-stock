 // import Route from '../tools/utils.js'  
 const Route = require('../tools/utils.js');
 const log = require('electron-log');
 
 Route.get("/login", 'AuthController@login')
 Route.get("/autoSeed", 'AuthController@autoSeed')
 Route.post("/virifayToken", 'AuthController@virifayToken')

 Route.post('/Users', 'AuthController@update')
 Route.post('/register', 'AuthController@update')
 Route.post('/update', 'AuthController@update')
 Route.post('/editProfile', 'AuthController@editProfile')
 Route.post('/logout', 'AuthController@logout')

 Route.post('/getHistorique', 'HistoriqueController@index')
 Route.post('/saveHistorique', 'HistoriqueController@store')
  Route.post('/deleteHistorique', 'HistoriqueController@destroy')

 Route.post('/getClients', 'ClientController@index')
 Route.post('/saveClients', 'ClientController@store')
 Route.post('/deleteClients', 'ClientController@destroy')
 Route.post('/reglreCredit', 'ClientController@reglreCredit')

 Route.post('/getSettings', 'SettingsController@index')
 Route.post('/saveSettings', 'SettingsController@update')