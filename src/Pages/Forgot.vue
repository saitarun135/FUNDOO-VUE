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
            service.userForgot(userData).then(response => {
                localStorage.getItem('data', response.data.email);
                console.log("forgot password:", response);
                alert("reset link sent successfully");
            }).catch(error=>{
                alert("Email is not registered");
                return error;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Forgot.scss";
</style>
