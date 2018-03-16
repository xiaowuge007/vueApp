import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../components/home.vue'
import About from '../components/about.vue'
import Mine from '../components/mine.vue'
import Login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/HelloWorld/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/HelloWorld/home',
      children: [
        {
          path: '/HelloWorld/about',
          name: 'about',
          component: About,
          meta: {
            navShow: true
          }
        },
        {
          path: '/HelloWorld/home',
          name: 'home',
          component: Home,
          meta: {
            navShow: true
          }
        },
        {
          path: '/HelloWorld/mine',
          name: 'mine',
          component: Mine,
          meta: {
            navShow: true,
            requiresAuth: true
          }
        }
      ]
    }
  ]
})
