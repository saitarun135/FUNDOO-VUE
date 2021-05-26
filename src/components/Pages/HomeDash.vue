<template>

<div class="heading">
    <nav class="navbar navbar-expand navbar-light fixed-top">
        <div class="container">
            <a href="#" class="navbar-brand">FUNDOO</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <router-link to="/login" class="nav-link">Logout</router-link>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">About</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <h1>FUNDOO-NOTES</h1>
    <!-- <Nav/> -->
    <h3 v-if="user">welcome to Notes</h3>
    <h3 v-if="!user">Not logedin</h3>
</div>

</template>

<script>
import axios from 'axios'
// import Nav from './components/Nav.vue'
export default{
    name:'HomeDash',
    components:{
        // Nav
    },
    data(){
        return{
            user:null 
        }
    }, 
    async created(){
        const response=await axios.get('user');
        this.user=response.data;
        // console.log(response);
    }
}
</script>

<style scoped>

</style>