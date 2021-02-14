import Vue from 'vue'
import Router from 'vue-router'
import LOGIN from '@/pages/login/login'
import CONTROL from '@/pages/control/control'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'LOGIN',
      component: LOGIN
    },{
    path: '/control',
      name: 'control',
      component: CONTROL
    }
  ]
})
