import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Singleplayer from '../views/Singleplayer.vue'
import Profile from '../views/Profile.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/singleplayer',
    name: 'Singleplayer',
    component: Singleplayer,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      requiresGuest: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      requiresGuest: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//Nav Guards
router.beforeEach((to, from, next) => {
  if(to.path !== '/' && to.path !== '/about'){
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    const currentUser = firebase.auth().currentUser
    if (requiresAuth && !currentUser) next({ path: '/login', query: { redirect: to.fullPath } })
    else if (!requiresAuth && currentUser) next('/')
    else if (!requiresAuth && !currentUser) next()
    else next()
  }else{
    next()
  }
  
  
  
})



export default router
