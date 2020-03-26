import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '*',
      meta: {
        title: '404'
      },
      name: '404',
      component: resolve => require(['@/views/ac_error/error'], resolve)
    },
    {
      path: '/',
      name: 'Main',
      meta: {
        title: 'ac_main'
      },
      component: resolve => require(['@/views/ac_main/main'], resolve)
    },
  ]
})
