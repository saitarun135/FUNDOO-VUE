<template>
<div id="app">
    <router-view />
</div>
</template>

<script>
export default {
    name: 'App',
    components: {

    }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    background: #fff;
}

form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #9c9c9c;
    border-radius: 10px;
    width: 750px;
    padding: 25px;
    background: #fff;
}

.logo {
    width: 110px;
    padding: 5px 0;
}

.head {
    padding-left: 10px;
}

.head h3 {
    margin: 0;
    font-size: 23px;
    font-family: jost;
    position: relative;
    letter-spacing: 1px;
}

.head img {
    height: 100px;
    margin-bottom: -15px;
}

input {
    outline: none;
    border: 1px solid #9c9c9c;
    border-radius: 5px;
    padding: 0 10px;
    height: 35px;
    font-size: 15px;
}

input:focus {
    border: 1.5px solid #1f52f9;
}

.name {
    display: inline-block;
}

input[type="name"] {
    display: block;
    margin: 30px 0 0 10px;
}

input[type="username"] {
    display: block;
    width: 390px;
    margin: 10px 0 0 10px;
}

.gmail {
    position: relative;
    display: block;
    top: -58px;
    left: 317px;
    font-family: roboto;
    color: #333;
    font-size: 15px;
    cursor: default;
}

.pass {
    display: inline-block;
}

.password {
    display: block;
    width: 140px;
    margin: 0 5px 0 10px;
}

label {
    position: relative;
    font-family: roboto;
    color: #555;
    font-size: 15px;
    pointer-events: none;
    left: 20px;
    top: -28px;
    transition: .2s all;
}

input:focus~label,
input:valid~label {
    top: -49px;
    left: 15px;
    background: #fff;
    padding: 0 5px;
    font-size: 10px;
    color: #1f52f9;
}

a {
    position: relative;
    font-family: roboto;
    text-decoration: none;
    display: block;
}

.line1 {
    font-size: 12px;
    margin: -30px 0 0 15px;
}

.line2 {
    color: #1144ed;
    font-size: 15px;
    margin: 20px 0 20px 15px;
}

.line3 {
    font-size: 12px;
    margin: -10px 0 0 15px;
    width: 310px;
}

.line4 {
    font-size: 15px;
    margin: 20px 8px;
    color: #4971f6;
    display: inline-block;
    font-family: arial rounded mt;
}

input[type="submit"] {
    background: #4971f6;
    color: #fff;
    border: none;
    padding: 6px 24px;
    border-radius: 5px;
    margin: 40px 0 30px 180px;
    cursor: pointer;
    font-size: 15px;
}

input[type="submit"]:hover {
    background: #254fdb;
}

.iconeye {
    display: inline-block;
}

#eye {
    display: block;
    position: relative;
    top: -18px;
    width: 27px;
    cursor: pointer;
}

.side-image {
    display: inline-block;
    position: relative;
    top: 50px;
    left: 50%;
    transform: translate(50%, 50%);
}

.side-logo {
    width: 230px;
}

/* side img border in reg page*/
.side-image img {
    border-radius: 25%;
    opacity: 0.9;
}

#sp1 {
    color: red;
    letter-spacing: 2px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 600;
}

#sp2 {
    color: gold;
    font-family: cursive;
}

#sp3 {
    color: lightcoral;
    font-family: cursive;
}

#sp4 {
    color: green;
    font-family: cursive;
}

#sp5 {
    color: indigo;
}

#sp6 {
    color: orangered;
}

.box span {
    height: 10px;
    padding-left: 35px;
    text-align: center;
}

/*login */
</style>
