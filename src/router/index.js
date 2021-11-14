import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import login from '../views/login.vue'
import flexy from '../views/flexy.vue'
import GeneralSettings from '../views/GeneralSettings.vue'
import DjezzySettings from '../views/DjezzySettings.vue'
import MobilisSettings from '../views/MobilisSettings.vue'
import OoredooSettings from '../views/OoredooSettings.vue'
import ActivationSim from '../views/ActivationSim.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    redirect:{name:'flexy'},
    children:[
      {
        path: 'flexy',
        name: 'flexy',
        component: flexy
      },
      {
        path: 'DjezzySettings',
        name: 'DjezzySettings',
        component: DjezzySettings
      },
      {
        path: 'MobilisSettings',
        name: 'MobilisSettings',
        component: MobilisSettings
      },
      {
        path: 'OoredooSettings',
        name: 'OoredooSettings',
        component: OoredooSettings
      },
      {
        path: 'GeneralSettings/:id',
        name: 'GeneralSettings',
        props: true,
        component: GeneralSettings
      },
      {
        path: 'ActivationSim',
        name: 'ActivationSim',
        props: true,
        component: ActivationSim
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: login
  }
]

const router = new VueRouter({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
