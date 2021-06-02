<template>
<div class="dashboard">

    <!-- <input type="checkbox" id="check"> -->

    <header>

        <label for="check">
            <i id="sidebar_btn" class="fas fa-bars"></i>
        </label>

        <div class="left_area">
            <h3><img style="height:35px;" src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="not" />Fund<span>oo</span></h3>
        </div>

        <div class="input-group">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" placeholder='search...' />
            </div>
            <!-- <i id="list" class="fas fa-list"></i> -->
        </div>

        <div class="right-area">

            <i style="font-size:25px;" id="pic" class="fas fa-user-circle"></i>
            <!-- <a href="http://localhost:3000/login" class="logout_btn"><i class="fa fa-sign-out" aria-hidden="true"></i>Signout</a> -->
        </div>

        <hr>
    </header>

    <div class="sidebar">
        <!-- <i style="color:red;" class="fas fa-angle-double-right"></i> -->
        <a href=""><i class="fas fa-lightbulb"></i><span>Notes</span></a>
        <a href=""><i class="fas fa-bell"></i><span>Reminders</span></a>
        <a href=""><i class="fas fa-pen-square"></i><span>Edit-labels</span></a>
        <a href=""><i class="fas fa-archive"></i><span>Archive</span></a>
        <a href=""><i class="fas fa-trash-alt"></i><span>Trash</span></a>
    </div>

</div>
</template>

<script>
export default {
    data() {

    },
    methods: {

        toggleMenu(e) {
            e.classList.toggle("active");
            document.querySelector("sidebar").classList.toggle("active");
        }
    }
}
</script>

<style scoped src="../assets/Component_CSS/Dashboard.css">

</style>
