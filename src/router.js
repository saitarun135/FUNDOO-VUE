//package vue -router --save
import Vue from 'vue'
import Router from 'vue-router'
import Login from './Pages/Login.vue'
import Register from './Pages/Register.vue'
import Forgot from './Pages/Forgot.vue'
import Reset from './Pages/Reset.vue'
import Dashboard from './components/Dashboard.vue'
import CreateNotes from './components/CreateNotes.vue'
import DisplayNotes from './components/DisplayNotes.vue'
import UpdateNotes from './components/UpdateNotes.vue'


Vue.use(Router)

export  default new Router({
    mode:'history',
    routes:[
        {
            path:'/login',
            component:Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/forgot',
            component:Forgot
        },
        {
            path:'/reset/:resetToken',
            component:Reset
        },
      
        {
            path:'/dashboard',
            component:Dashboard,
            children:[{
                path:'/createNote',
                component:CreateNotes
            },
            {
                path:'/display',
                component:DisplayNotes
            },
            {
                path:'/update',
                component:UpdateNotes
            },
        ]
        },
       
    
        ]
})