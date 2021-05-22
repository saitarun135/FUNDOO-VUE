import Vue from 'vue'
import Router from 'vue-router'
// import Nav from './components/Nav.vue'
import HomeLogin from './components/HomeLogin.vue'
import Register from './components/Register.vue'
// import HomeDash from './components/HomeDash.vue'
 import Forgot from './components/Forgot.vue'
 import Reset from './components/Reset.vue'
Vue.use(Router)

export  default new Router({
    mode:'history',
    routes:[
        // {path:'/nav',component:Nav},
        {path:'/',component:HomeLogin},
        {path:'/register',component:Register},
        // {path:'/dash',component:HomeDash},
         {path:'/forgot',component:Forgot},
            {path:'/reset/:resetToken',component:Reset}
        ]
})