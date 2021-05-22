<template>
    <form @submit.prevent="handlesubmit">
        <h3>Forgot-password</h3>
        <div class="form-group">
            <!-- <label>Email</label> -->
            <input type="email" v-model="email" class="form-control"/>
            <label>Email</label>
        </div>
        <button type="submit" class="btn btn-primary btn-block">submit</button>
</form>
</template>
<script>
import axios from 'axios'
export default{
    name:'Forgot', 
    data(){
        return{
            email:'',
        }
    },
    methods:{
        async handlesubmit(){
           const response=await axios.post('http://127.0.0.1:8000/api/auth/sendPasswordResetLink',{
               email:this.email
           });
           console.log(response);
           this.$router.push('/reset/:resetToken')
        }

    }
}
</script>
<style scoped>

</style> 