import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:3333/';
const ipc = require('electron').ipcRenderer
import api from './routes'
axios.interceptors.response.use(function (response) { 
 return response;
}, async function (err) {
 if (err.response && err.response.status == 401) {
  let a = await ipc.invoke("logout")
  console.log("err get settings", err.response.statusText)
 }
 return Promise.reject(err);
});
 
Vue.use(Vuex) 
export default new Vuex.Store({
 state: {
  data: [],
  clients: [],
  loadClient: false,
  isLogin: false,
  settings: {},
  historique: [],
  djezzySetting: {},
  djezzy: {},
  mobilisSetting: {},
  mobilis: {},
  ooredooSetting: {},
  ooredoo: {},
  loadHist: false,
  loadClient: false,
  auth: [],
  users: [],
  isLoading: false,
  manufactor: ['Cinterion', 'Huawei', 'Sierra Wireless', 'Simcom', 'Telit', 'ZTE', 'U-Blox']
 },
 getters: {
  getClients: state => (id) => {
   return state.clients.filter((e,i) => { 
    state.clients[i].numeroPhoneList = typeof e.numeroPhoneList === "string" ? JSON.parse(e.numeroPhoneList) : e.numeroPhoneList
    if (id) return e.type == id && e.id != 1 && e.id != 2
    else return e 
   })
  },
  getHistorique: state => (id, type) => {
   return state.historique.filter(e => {  
    if (id && type) return e.operateur === id && e.type == type
    else if (!id || !type) return e.operateur === id || e.type == type
    else return e 
   })
  },
  getSettings: state => {
   return state.settings
  },
  getDjezzySetting: state => {
   return state.djezzySetting
  },
  getDobilisSetting: state => {
   return state.mobilisSetting
  },
  getDoredooSetting: state => {
   return state.ooredooSetting
  },
 },
 mutations: { 
  getSettings: async (state, settings) => {
   try {
    state.settings = settings
    state.djezzySetting = settings[0]
    state.mobilisSetting = settings[1]
    state.ooredooSetting = settings[2]
   } catch (err) {
    console.log('err :>> ', err);
   }
  },
  getDjezzy: async (state, data) => {
   state.djezzy = data
  //  state.loadDjezzy = false
  },
  getMobilis: async (state, data) => {
   state.mobilis = data
  //  state.loadMobilis = false
  },
  getOoredoo: async (state, data) => {
   state.ooredoo = data
  //  state.loadOoredoo = false
  },
  getHistorique: async (state, data) => {
   state.historique = data
   state.loadHist = false
  },
  getClients: async (state, data) => {
   try {
      state.loadClient = true
      let { data } = await baxios('POST', 'getClients', null)
      state.clients = data
    state.loadClient = false
    } catch (err) {
      state.loadClient = false
      console.log('err.response :>> ', err.response.status);
    }
  },
  logout: async state => {
   state.isLoading = true
   try {
    let result = await ipc.invoke("logout")
    console.log('result :>> ', result);
    // state.isLogin = false 
    state.isLoading = false
   } catch (err) {
    console.log('err :>> ', err);
    // state.isLogin = true
    state.isLoading = false
   }
  }, 
  getUsers: async (state, arr) => {
   state.isLoading = true
   try {
    let { data } = await axios.post("users")
    state.users = data
    state.isLoading = false
   } catch (error) {
    ipc.send('notify-error', "error on get users Data")
    console.log('error :>> ', error);
    state.isLoading = false
   }

  },
  SendLogin: async (state, arr) => {
   state.isLoading = true
   try {
    state.isLogin = true  
    let result = await ipc.invoke("login", arr) 
    console.log('result :>> ', result);
    // state.auth = result.user 
    state.isLoading = false
   } catch (error) {
    state.isLogin = false
    console.log('error :>> ', error);
    state.isLoading = false
    state.auth = []
   }
  },
  editProfile: async (state, data) => {
   state.isLoading = true
   try {
    let {
     data
    } = await axios.post("auth/editProfile", data)
    state.auth = data.user
    state.isLoading = false
   } catch (error) {
    state.isLoading = false
    console.log('error :>> ', error);
   }
  },
 },
 actions: {
  getSettings: async ({ commit }) => {
   try {
    let { data } = await baxios('POST', '/getSettings', null) 
    commit('getSettings', data);
   } catch (err) {
    console.log('err.response :>> ', err.response.status);
   }
  },
  getDjezzy: async ({ commit },data) => {
   try {
     console.log('getDjezzya :>> ',data);
    commit('getDjezzy', data);
   } catch (err) {
    console.log('err.response :>> ', err);
   }
  },
  getMobilis: async ({ commit },data) => {
    console.log('getMobilia :>> ',data);
   try {
    commit('getMobilis', data);
   } catch (err) {
    console.log('err.response :>> ', err);
   }
  },
  getOoredoo: async ({ commit },data) => {
   try {
     console.log('getOoredoa :>> ',data);
    commit('getOoredoo', data);
   } catch (err) {
    console.log('err.response :>> ', err);
   }
  },
  getHistorique: async ({ commit, state }) => {
   try {
    state.loadHist = true
    let {
     data
    } = await baxios('POST', 'getHistorique', null)
    commit('getHistorique', data);
   } catch (err) {
    state.loadHist = false
    console.log('err.response :>> ', err.response.status);
   }
  },
  getClients: async ({ commit, state }) => { 
    commit('getClients'); 
  },
  SendLogin: ({ commit }, arr) => {
   commit('SendLogin', arr)
  },
  deleteClients: async ({ commit },arr) => {
   try {
    let { data } = await baxios('POST', '/deleteClients', arr) 
    commit('getClients');
   } catch (err) {
    console.log('err :>> ', err);
   }
  },
  reglreCredit: async ({ commit },arr) => {
   try {
    let { data } = await baxios('POST', '/reglreCredit', arr) 
    commit('getClients');
   } catch (err) {
    console.log('err :>> ', err);
   }
  },
  saveClients: async ({ commit },arr) => {
   try {
    let { data } = await baxios('POST', '/saveClients', arr) 
    commit('getClients');
   } catch (err) {
    console.log('err :>> ', err);
   }
  } ,
  logout: ({ commit }) => { commit('logout')},
  editProfile: ({ commit }, data) => { commit('editProfile', data) },
 },
})