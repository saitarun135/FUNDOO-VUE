<template>
<form @submit.prevent="handlesubmit">

    <h2><span class="sp1">F</span><span class="sp2">u</span><span class="sp3">n</span>
        <span class="sp4">d</span><span class="sp5">o</span><span class="sp6">o</span><span class="signin">-signin</span></h2>
    <input type="email" name="email" v-model="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" />

    <input type="password" name="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" v-model="password"  placeholder="Password" />

    <button class="btn btn-primary btn-block">Sign In</button>

    <a href="http://localhost:3000/register">Create account</a>
    <div class="fp">
        <a href="http://localhost:3000/forgot">forgot password</a>
    </div>

</form>
</template>

<script>
// import axios from 'axios';
import service from '../service/User'
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async handlesubmit() {
            let userData = {
                email: this.email,
                password: this.password
            }
            service.userLogin(userData).then(response =>{
                console.log("user logged in",response);
                alert("user logged in..");
                localStorage.setItem('token', response.data.token);
                this.$router.push("/dashboard");
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Login.scss";
</style>
