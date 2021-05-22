<template>
<form @submit.prevent="handlesubmit">
    <div v-if="error" class="alert alert-danger" role="alert">
        {{error}}
    </div>
    <h3>Sign In</h3>

    <div class="form-group">
        <!-- <label>Email address</label> -->
        <input type="email" class="form-control form-control-lg" v-model='email' required />
        <label>Email address</label>
    </div>

    <div class="form-group">
        <!-- <label>Password</label> -->
        <!-- v-model==two way binding -->
        <input type="password" class="form-control form-control-lg" v-model='password' required />
        <label>Password</label>
    </div>

    <!-- <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button> -->
    <button class="btn btn-primary btn-block">Sign In</button>
    <p class="forgot-password text-right mt-2 mb-4">
        <router-link to="/forgot">Forgot password ?</router-link>
        <br>
        <a href="http://localhost:8080/register">NewUser-clickhere</a>
    </p>
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
            error:''
        }
    },
    methods: {
        async handlesubmit() {
            try{
            const response = await axios.post('/login', {
                email: this.email,
                password: this.password
            });
            alert("logged in..")
            // console.log(response)  displaying token on console
            localStorage.setItem('token', response.data.token); //locally storing token
            this.$router.push('/dash')
        }catch(e){
            this.error='Invalid username/password'
        }
        }
    }
}
</script>
