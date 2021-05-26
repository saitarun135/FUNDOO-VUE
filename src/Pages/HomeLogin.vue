<template>
<form @submit.prevent="handlesubmit">

    <!-- <div class="form"> -->

    <img src="https://cdn.dribbble.com/users/2097788/screenshots/5398260/green-letter-f-logo-dribbble.jpg?compress=1&resize=400x300">
    <h2><span id="sp1">F</span><span id="sp2">u</span><span id="sp3">n</span>
        <span id="sp4">d</span><span id="sp5">o</span><span id="sp6">o</span><span id="signin">-signin</span></h2>
    <input type="email" name="email" v-model="email" placeholder="Email" />

    <input type="password" name="Password" v-model="password" placeholder="Password" />


    <button class="btn btn-primary btn-block">Sign In</button>

    <a href="http://localhost:3000/register">Create account</a>
    <div class="fp">
        <a href="http://localhost:3000/forgot">forgot password</a>
    </div>
  
</form>
</template>

<script>
import axios from 'axios';
export default {
    name: 'HomeLogin',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async handlesubmit() {
            try {
                const response = await axios.post('/login', {
                    email: this.email,
                    password: this.password
                });
                alert("logged in..")
                // console.log(response)  displaying token on console
                localStorage.setItem('token', response.data.token); //locally storing token
                this.$router.push('/dash')
            } catch (e) {
                this.error = 'Invalid username/password'
            }
        }
    }
}
</script>

<style scoped src="../assets/CSS/Login.css">

</style>
