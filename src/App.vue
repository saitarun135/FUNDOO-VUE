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
    padding: 10px 0;
    font-size: 16px;
    color: black;
    letter-spacing: 1px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    background: transparent;
}

.auth-wrapper .form-group label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: black;
    pointer-events: none;
    transition: .5s;
}

.auth-wrapper .form-group input:focus~label,
.auth-wrapper .form-group input:valid~label {
    top: -18px;
    left: 0;
    color: red;
    font-size: 16px;
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
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
}

.auth-inner {
    width: 450px;
    margin: auto;
    background: #ffffff;
    box-shadow: 40px 55px 45px 55px rgba(34, 35, 58, 0.2);
    padding: 40px 55px 45px 55px;
    border-radius: 15px;
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
    padding-bottom: 20px;
}

.custom-control-label {
    font-weight: 400;
}

.forgot-pssword,
.forgot-pssword a {
    text-align: right;
    font-size: 13px;
    padding-top: 10px,
}

.forgot-pssword a {
    color: #167bff;
}

.jumbotron {
    margin-top: 100px;
    margin-left: 30%;
    margin-right: 30%;
    height: fit-content;

}

.btn btn-primary btn-block {
    text-align: center;
}

/* html{
    font-size:62.5%;
} */

@media screen and(max-width:768px) {

    /* #app {
        width: 100%;
    } */
    html {
        font-size: 35%;
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
