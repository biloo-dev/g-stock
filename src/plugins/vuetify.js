
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';

import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
import colors from 'vuetify/lib/util/colors'
console.log('colors :>> ', colors);
export default new Vuetify({
  iconfont: 'mdi', // default - only for display purposes
  theme: {
    themes: {
      light: { 
        background: 'wheat' // colors.indigo.lighten5, // Not automatically applied 
      },
      dark: { 
        background: colors.indigo.base, // If not using lighten/darken, use base to return hex
       
      },
    },
  },
 });
