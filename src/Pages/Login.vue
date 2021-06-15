<template>
<form @submit.prevent="handlesubmit">
    <h2><span class="signin">Login</span></h2>

    <input type="email" name="email" v-model="email" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" placeholder="Email" />
    <input type="password" name="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$" v-model="password" placeholder="Password" />
    <button class="btn btn-primary btn-block">Sign In</button>
    <a style="text-decoration:none;" href="/register">Create account</a>

    <div class="fp">
        <a href="/forgot">Forgot password</a>
    </div>

</form>
</template>

<script>
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
            service.userLogin(userData).then(response => {
                console.log("user logged in", response);
                localStorage.setItem('token', response.data.token);
                alert("logged in...");
                this.$router.push("/dashboard");
            }).catch(error=>{
                alert("invalid credentials/please check your inputs");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Login.scss";
</style>
