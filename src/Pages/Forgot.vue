<template>
<div class="box">
    <div class="inner-box">
        <form @submit.prevent="handlesubmit">
            <h3>Forget-password</h3>

            <input type="email" v-model="email" placeholder="Email Address" />
            <button type="submit" class="btn btn-primary btn-block">send Recovery link</button>

        </form>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Forgot',
    data() {
        return {
            email: '',
        }
    },
    methods: {
        async handlesubmit() {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/sendPasswordResetLink', {
                email: this.email
            });

            console.log(response);
            alert("reset link send successfully");
            
        }
    }
}
</script>

<style scoped src="../assets/CSS/Forgot.css">
</style>


