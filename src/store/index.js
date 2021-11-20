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
 
 },
 getters: {
   
   
 },
 mutations: { 
   
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
       console.log('sendLogin  oky :>> ');

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
    SendLogin: ({ commit }, arr) => {
        commit('SendLogin', arr)
    },
    
    logout: ({ commit }) => { commit('logout')},
    editProfile: ({ commit }, data) => { commit('editProfile', data) },
 },
})