<template>
<div class="box">
    <div class="inner-box">
        <form @submit.prevent="handlesubmit">
            <h3>Forget-password</h3>

            <input type="email" v-model="email" placeholder="Email Address" pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
            <button type="submit" class="btn btn-primary btn-block">send Recovery link</button>

        </form>
    </div>
</div>
</template>

<script>
// import axios from 'axios'
import service from '../service/User'
export default {
    name: 'Forgot',
    data() {
        return {
            email: '',
        }
    },
    methods: {
        async handlesubmit() {
            let userData = {
                email: this.email,
            }
            service.userForgot(userData).then(response =>{
                console.log("forgot password:",response);
                // localStorage.setItem('token', response.data.token);
                alert("reset link send successfully");
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Forgot.scss";
</style>
