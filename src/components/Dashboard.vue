<template>
<div class="dashboard">

    <!-- <input type="checkbox" id="check"> -->
    <header>
        <label for="check">
            <i id="sidebar_btn" class="fas fa-bars"></i>
        </label>

        <div class="left_area">
            <h3><img style="height:35px;" src="../assets/keep.jpg" alt="not" />Fund<span>oo</span></h3>
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
        <a href=""><i class="fas fa-lightbulb"></i><span>Notes</span></a>
        <a href=""><i class="fas fa-bell"></i><span>Reminders</span></a>
        <a href=""><i class="fas fa-pen-square"></i><span>Edit-labels</span></a>
        <a href=""><i class="fas fa-archive"></i><span>Archive</span></a>
        <a href=""><i class="fas fa-trash-alt"></i><span>Trash</span></a>
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
    data() {},
    methods: {
        toggleMenu(e) {
            e.classList.toggle("active");
            document.querySelector("sidebar").classList.toggle("active");
        },

    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/Dashboard.scss";
</style>
