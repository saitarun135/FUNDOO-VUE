<template>
<form @submit.prevent="handlesubmit">
    <div class="jumbotron">

        <h3>Reset Password</h3>

        <div class="form-group">

            <input type="email" class="form-control" v-model="email" placeholder="Enter your email" />

        </div>

        <div class="form-group">
            <input type="password" class="form-control" v-model="password" placeholder="password" />
        </div>

        <div class="form-group">
            <input type="password" class="form-control" v-model="password_confirmation" placeholder="confirm_password" />

        </div>
        <button type="submit" class="btn btn-primary btn-block">update</button>
    </div>

</form>
</template>

<script>
// import axios from 'axios'
import service from '../service/User'
export default {
    name: 'Reset',
    data() {
        return {
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        async handlesubmit() {
            let userData = {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                resetToken: this.$route.params.resetToken
            }
            service.userReset(userData).then(response => {
                console.log(response);
                alert("successfully updated");
                this.$router.push('/login');
            })
        }

    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Reset.scss";
</style>
