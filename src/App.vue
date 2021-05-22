<template>
<div id="app">
    <!-- <Nav /> -->
    <div class="jumbotron">
        <div class="container">
            <!-- <div class="box"> -->
            <div class="auth-wrapper">
                <!-- <HomeLogin /> -->
                <router-view />
                <!--route part added -->
            </div>
        </div>
    </div>
    <!-- </div> -->

</div>
</template>

<script>
// import Nav from './components/Nav.vue'
//import HomeLogin from './components/HomeLogin.vue'
export default {
    name: 'App',
    components: {
        // Nav,
        //      HomeLogin
    }
}
</script>

<style>
/* @import url(); */

* {
    box-sizing: border-box;
}

body {
    background: #1C8EF9 !important;
    min-height: 100vh;
    display: flex;
    font-weight: 400;
    font-family: 'Fira Sans', 'sans-serif';
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/*added for labelling*/
.auth-wrapper .form-group {
    position: relative;
}

.auth-wrapper .form-group input {
    width: 100%;
    /* padding: 10px 0; */
     padding: 0.625rem 0;
    /* font-size: 16px; */
    font-size: 1rem;
    color: black;
    /* letter-spacing: 1px; */
      letter-spacing: 0.0625rem;
    /* margin-bottom: 30px; */
    margin-bottom: 1.9rem;
    border: none;
    /* border-bottom: 1px solid black; */
     border-bottom: 0.0625rem solid black;
    outline: none;
    background: transparent;
}

.auth-wrapper .form-group label {
    position: absolute;
    top: 0;
    left: 0;
    /* padding: 10px 0; */
     padding: 0.625 0;
    /* font-size: 16px; */
      font-size: 1rem;
    color: black;
    pointer-events: none;
    transition: .5s;
}

.auth-wrapper .form-group input:focus~label,
.auth-wrapper .form-group input:valid~label {
    /* top: -18px; */
    top: -1.125rem;
    left: 0;
    color: red;
    /* font-size: 16px; */
       font-size: 1rem;
}

body,
html,
#app,
#root,
#auth-wrapper {
    width: 100%;
    height: 100%
}

#app {
    text-align: center;
}

.navbar-light {
    background-color: whitesmoke;
    /* box-shadow: 0px  14px 80px rgba(34, 35, 58, 0.2); */
    box-shadow: 0px  1rem 5rem rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
}

.auth-inner {
    /* width: 450px; */
     width: 28rem;
    margin: auto;
    background: #ffffff;
    /* box-shadow: 40px 55px 45px 55px rgba(34, 35, 58, 0.2); */
      box-shadow: 2.5rem 3.4rem 2.8rem 3.4rem rgba(34, 35, 58, 0.2);
    /* padding: 40px 55px 45px 55px; */
     padding: 2.5rem 3.4rem 2.8rem 3.4rem;
    /* border-radius: 15px; */
    border-radius: 0.9rem;
    transition: all .3s;
}

.auth-wrapper .form-control:focus {
    border-color: #167bff;
    box-shadow: none;
}

/* label{
    color:#f7497d;
} */
.auth-wrapper h3 {
    text-align: center;
    margin: 0;
    line-height: 1;
    /* padding-bottom: 20px; */
     padding-bottom: 1.2rem;
}

.custom-control-label {
    font-weight: 400;
}

.forgot-pssword,
.forgot-pssword a {
    text-align: right;
    /* font-size: 13px; */
     font-size:0.8rem ;
    /* padding-top: 10px, */
    padding-top: 0.6rem,
}

.forgot-pssword a {
    color: #167bff;
}

.jumbotron {
    /* margin-top: 100px; */
    margin-top: 6.3rem;
    margin-left: 30%;
    margin-right: 30%;
    height: fit-content;
}

.btn btn-primary btn-block {
    text-align: center;
}
/* .btn-block{
      display: block;
    width: 25%;   
    text-align: center;
    margin: 0 auto;
    font-size: 1rem;
    
}  */
/* html{
    font-size:62.5%;
} */

@media screen and(max-width:768px) {

    /* #app {
        width: 100%;
    } */
    html {
        font-size: 45%;
    }
}

@media screen and (max-width:998px) {

    /* #app {
        width: 100%;
    } */
    html {
        font-size: 55%;
    }
}
</style>
