/**
 * Created by pactera on 2018/3/16.
 */
import router from './router'

router.beforeEach((to, from, next) => {
  debugger
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!window.sessionStorage.getItem('admin')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
