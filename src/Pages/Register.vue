<template>
<div class="main">
    <form @submit.prevent="handlesubmit">
        <div class="head">
            <h2><span id="sp1">F</span><span id="sp2">u</span><span id="sp3">n</span>
                <span id="sp4">d</span><span id="sp5">o</span><span id="sp6">o</span></h2>
            <!-- <img src="https://uspto.report/TM/88624243/mark" alt="" class="logo"> -->
            <h3>Create your Fundoo Account</h3>
        </div>
        <div class="name">
            <input type="name" required>
            <label>First name</label>
        </div>
       
        <div class="name">
            <input type="name" required v-model.trim="$v.name.$model" :class="{
                'is-invalid':$v.name.$error,'is-valid':!$v.name.$invalid}">
            <label>Last name</label>
            <!-- <div class="valid-feedback">ur name is valid</div> -->
            <div class="invalid-feedback">
                <div class="box">
                    <span id="val" v-if="!$v.name.required">Required field</span>
                    <span id="val" v-if="!$v.name.minLength">must have {{$v.name.$params.minLength.min}}letters </span>
                    <span id="val" v-if="!$v.name.maxLength">must have atmost {{$v.name.$params.maxLength.max}}letters</span>
                </div>
            </div>

        </div>

        <div class="user-name">
            <input type="username" v-model="email" value="@gmail.com" required>
            <label>Username</label>
            <!-- <span class="gmail">@gmail.com</span> -->
        </div>
        <!-- <a class="line1">You can use letters, numbers & periods</a> -->
        <!-- <a href="" class="line2">Use my current email address instead</a> -->
        <div class="pass">
            <input :type="password_type" class="password" v-model="password" id="pass1" required>
            <label>Password</label>
        </div>

        <div class="pass">
            <input :type="password_type" class="password" v-model="password_confirmation" id="pass2" required>
            <label>Confirm</label>
        </div>
        <div class="iconeye">
            <img src="https://icon-library.com/images/show-hide-icon/show-hide-icon-28.jpg" @click="togglePassword()" class="fadeIn fourth" id="eye">
        </div>
        <a class="line3">Use 6 or more characters with a mix of letters, numbers & symbols</a>
        <a href=" http://localhost:3000/" class="line4">Sign in instead</a>
        <input type="submit" value="Next">
    </form>
    <div class="side-image">
        <!-- https://ssl.gstatic.com/accounts/signup/glif/account.svg -->
        <img src="https://i.pinimg.com/236x/01/0e/b9/010eb99f6b90c32fb5a1eb8f533ae50f.jpg" alt="" class="side-logo">
    </div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import useValidate from '@vuelidate/core'
// import { reactive, computed } from 'vue'
import {
    required,
    minLength,
    maxLength
} from 'vuelidate/lib/validators'

Vue.use(VueAxios, axios)
export default {
    name: 'Register',

    data() {
        return {

            // lastname:'',
            name: '',
            email: '',
            // email: '',
            password: '',
            password_confirmation: '',
            //calling password functionality
            password_type: "password",
            password_toggle_element: "show",
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3),
            maxLength: maxLength(10)
        },

    },
    methods: {

        togglePassword() {
            this.password_type = this.password_type === 'password' ? 'text' : 'password'
        },

        async handlesubmit() {

            await axios.post('register', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
            alert("user registered successfully..!")
            // console.log(response);
            this.$router.push('/');
        }
    }
}
</script>
