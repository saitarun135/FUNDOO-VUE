<template>
<div class="dashboard navbar-fixed">
    <header>
        <div class="menu-btn">
        </div>
        <div class="left_area">
            <div class="btn">
            </div>
            <h3><i id="sidebar_btn" @click="hidingSidebar" class="fas fa-bas" @dblclick="showingSidebar">&#9776;</i><img style="height:35px;" src="../assets/keep.jpg" alt="not" />Fund<span>oo</span></h3>
        </div>
        <div class="input-group">
            <div class="form-outline">
                <input type="search" id="form1" class="form-control" placeholder='search...' />
            </div>
        </div>
        <div class="right-area">
            <i style="font-size:25px;" id="pic" class="fas fa-user-circle"></i>
        </div>
        <hr>
    </header>
    <div class="sidebar" id="A">
        <!-- <a href="/display"><i class="fas fa-lightbulb"></i><span>Notes</span></a> -->
        <router-link to="/display"><i class="fas fa-lightbulb"></i><span>Notes</span></router-link>
        <a href=""><i class="fas fa-bell"></i><span>Reminders</span></a>
        <a href=""><i class="fas fa-pen-square"></i><span>Edit-labels</span></a>
        <a href=""><i class="fas fa-archive"></i><span>Archive</span></a>
        <a href=""><i class="fas fa-trash-alt"></i><span>Trash</span></a>
        <!-- <router-link to="/trash"> <i class="fas fa-trash-alt"></i><span>Trash</span></router-link> -->
    </div>
    <CreateNotes />
</div>
</template>

<script>
import CreateNotes from './CreateNotes.vue'
export default {
    components: {
        CreateNotes
    },
    data() {
        return {}
    },
    methods: {
        toggleMenu(e) {
            e.classList.toggle("active");
            document.querySelector("sidebar").classList.toggle("active");
        },
        hidingSidebar() {
            document.getElementById("A").style.left = "-250px";
            document.getElementById("A").style.transition = "0.7s";
        },
        showingSidebar() {
            document.getElementById("A").style.left = "0px";
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Dashboard.scss";
</style>
