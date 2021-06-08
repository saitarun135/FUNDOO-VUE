<template>
<form @submit.prevent="handlesubmit">

    <h2><span id="sp1">F</span><span id="sp2">u</span><span id="sp3">n</span>
        <span id="sp4">d</span><span id="sp5">o</span><span id="sp6">o</span><span id="signin">-signin</span></h2>
    <input type="email" name="email" v-model="email" placeholder="Email" />

    <input type="password" name="Password" v-model="password" id="input-username" placeholder="Password" />

    <button class="btn btn-primary btn-block">Sign In</button>

    <a href="http://localhost:3000/register">Create account</a>
    <div class="fp">
        <a href="http://localhost:3000/forgot">forgot password</a>
    </div>

</form>
</template>

<script>
import axios from 'axios';
// import service from '../service/User'
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
        // userLogin(){
        //     let data={
        //         email: this.email,
        //         password: this.password
        //     };
        //     console.log("data to be sent",data);
        //      service.userLogin(data).then(response=>{
        //          console.log("response from login",response);
        //          this.$router.push('/dashboard');
        //      })
        // },
       
        async handlesubmit() {
            try {
                const response = await axios.post('/login', {
                    email: this.email,
                    password: this.password
                });
                alert("logged in..")
                localStorage.setItem('token', response.data.token);
                this.$router.push('/dashboard')
            } catch (e) {
                this.error = 'Invalid username/password'
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@import "@/styles/Pages/Login.scss";
</style>
