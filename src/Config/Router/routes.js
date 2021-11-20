 // import Route from '../tools/utils.js'  
 const Route = require('../tools/utils.js'); 
 
 Route.get("/login", 'AuthController@login')
 Route.get("/register", 'AuthController@Register')
 Route.get("/autoSeed", 'AuthController@autoSeed')
 Route.post("/virifayToken", 'AuthController@virifayToken')
 Route.post('/logout', 'AuthController@logout')

Route.post('/Caisse', 'CaisseController@index')
Route.post('/Caisse/store', 'CaisseController@store')
Route.post('/Caisse/update', 'CaisseController@update')
Route.post('/Caisse/delete', 'CaisseController@delete')
 
Route.post('/Product', 'ProductController@index')
Route.post('/Product/store', 'ProductController@store')
Route.post('/Product/update', 'ProductController@update')
Route.post('/Product/delete', 'ProductController@delete')

Route.post('/DetEffet', 'DetEffetController@index')
Route.post('/DetEffet/store', 'DetEffetController@store')
Route.post('/DetEffet/update', 'DetEffetController@update')
Route.post('/DetEffet/delete', 'DetEffetController@delete')
  
Route.post('/Effets', 'EffetsController@index')
Route.post('/Effets/store', 'EffetsController@store')
Route.post('/Effets/update', 'EffetsController@update')
Route.post('/Effets/delete', 'EffetsController@delete')
  
Route.post('/Effets', 'EffetsController@index')
Route.post('/Effets/store', 'EffetsController@store')
Route.post('/Effets/update', 'EffetsController@update')
Route.post('/Effets/delete', 'EffetsController@delete')
  
Route.post('/Tiers', 'TiersController@index')
Route.post('/Tiers/store', 'TiersController@store')
Route.post('/Tiers/update', 'TiersController@update')
Route.post('/Tiers/delete', 'TiersController@delete')
  
Route.post('/Transactions', 'TransactionsController@index')
Route.post('/Transactions/store', 'TransactionsController@store')
Route.post('/Transactions/update', 'TransactionsController@update')
Route.post('/Transactions/delete', 'TransactionsController@delete')
   
 
Route.post('/User', 'UserController@index')
Route.post('/User/store', 'UserController@store')
Route.post('/User/update', 'UserController@update')
Route.post('/User/delete', 'UserController@delete')
    
 