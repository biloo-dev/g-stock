import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from './plugins/vuetify';
// import vuetify from "./plugins/vuetify";
// import "@mdi/font/css/materialdesignicons.css";
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import './scss/app.scss'
window.Swal = Swal
window.Toast = Swal.mixin({
 toast: true,
 position: 'bottom-end',
 showConfirmButton: false,
 timer: 3000,
 customClass: {
  container: 'cont'
 },
 timerProgressBar: true,
 didOpen: (toast) => {
  toast.addEventListener('mouseenter', Swal.stopTimer)
  toast.addEventListener('mouseleave', Swal.resumeTimer)
 }
}) 
Vue.config.productionTip = false;
window.Fire = new Vue() 
 
// Vue.directive('$model', {
//   bind: function (el, binding, vnode) { 
//     let ope = binding.expression.match(/\'(.*?)\'/).pop()
//     let filed = binding.expression.match(/].(.*)/).pop()
   
//     console.log('el  :>> ', binding.value );
//     el.oninput = () => (vnode.context['form'][ope][filed] = binding.value)
//   }
// })
new Vue({
  router,
  store,
  vuetify,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");