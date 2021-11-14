import Vue from "vue";
import App from "../views/login.vue";
import router from "../router";
import store from "../store";
import vuetify from '../plugins/vuetify';
// import vuetify from "./plugins/vuetify";
// import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
