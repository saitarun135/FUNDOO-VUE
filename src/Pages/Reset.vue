<template>
<form @submit.prevent="handlesubmit">
    <h3>Reset Password</h3>

    <div class="form-group">
       
        <input type="email" class="form-control" v-model="email" placeholder="Enter your email" />
       
    </div>

    <div class="form-group">
        <input type="password" class="form-control" v-model="password" placeholder="password" />
    </div>

    <div class="form-group">
        <input type="password" class="form-control" v-model="password_confirmation" placeholder="confirm_password"/>
 
    </div>
    <button type="submit" class="btn btn-primary btn-block">submit</button>
</form>
</template>

<script>
import axios from 'axios'
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
            const response = await axios.post('http://127.0.0.1:8000/api/auth/resetPassword', {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                resetToken: this.$route.params.resetToken
            });
            alert("successfully updated.");
            console.log(response);
            this.$router.push('/login');
        }

    }
}
</script>
<style scoped src="../assets/CSS/Reset.css">
</style>