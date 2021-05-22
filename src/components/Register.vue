<template>
<div class="vue-tempalte">
    <form @submit.prevent="handlesubmit">
        <h3>Sign Up</h3>

        <div class="form-group">
            <input type="text" class="form-control form-control-lg" v-model="name" required />
            <label>Full Name</label>
        </div>

        <div class="form-group">
            <input type="email" class="form-control form-control-lg" v-model="email" required />
            <label>Email address</label>
        </div>

        <div class="form-group">
            <input type="password" class="form-control form-control-lg" id="password" v-model="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*?[#?!@$%^&*-]).{6,}" required />
            <label>Password</label>
        </div>
        <div class="form-group">
            <input type="password" class="form-control form-control-lg" id="confirm_password" v-model="password_confirmation" required />
            <label>Re-password</label>
        </div>
        <label>show-password</label>
        <input type="checkbox" name="" v-on="myFun">
        

        <button type="submit" class="btn btn-primary btn-block">signup</button>
        <!-- <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button> -->

        <p class="forgot-password text-right">
            Already registered
            <a href="http://localhost:8080/">signin</a>
            <!-- <router-link :to="{name: 'login'}">sign in?</router-link> -->
        </p>
    </form>
</div>
</template>

<script>
// import {
//     required,
//     minLength,
//     maxLength,
//     between
// } from 'vuelidate/lib/validators'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name: 'Register', 
    data() {
        return {
            // FullName: '',
            // Emailaddress: '',
            // password: '',
            // repassword: ''
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    // validations:{
    //     name:{
    //         required,
    //         minLength:minLength(3),
    //         maxLength:maxLength(15)
    //     }
    // },

    methods: {
        async handlesubmit() {
            //e.preventDefault()

            alert("user registered successfully..!")

            //axios postmethod to communicate with api
            //register-->shortest form of url
            //await and async[const response = ]
            await axios.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            // console.log(response);
            this.$router.push('/')
        }
    }

}
</script>
  //another way of writing
            // submitForm(){
            //    this.$axios.post('http://127.0.0.1:8000/api/auth/register',{
            //        name:this.name,email:this.email,password:this.password,
            //        password_confirmation:this.password_confirmation
            //    }).then(response=>{console.log(response)}).catch(error=>{console.log(error)})
            // },
