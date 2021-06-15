<template>
<div class="main-section">
    <div v-on:click="flip()" v-if="flag==true" class="input-bx">
        <input type="text" placeholder="Take a note.." />
        <span class="img1"><i class="fas fa-image"></i></span>
        <span class="img2"><i class="fas fa-paint-brush"></i></span>
    </div>
    <div v-if="flag==false" class="create">
        <form class="create-note" @submit.prevent="handlesubmit" autocomplete="off">
            <input name="title" id="name-rmv" v-model="title" placeholder="Title" />
            <textarea name="content" id="txt-rmv" v-model="body" style="resize: none" placeholder="Take a note..." rows="3"></textarea>
            <div class="btm-icons">
                <icons />
                <button id="btn-section" type="submit" v-on:click="togglingWithClearHandleSubmit()">Close</button>
            </div>
        </form>
    </div>
    <DisplayNotes v-if="flag==true" />
</div>
</template>

<script>
import DisplayNotes from './DisplayNotes.vue'
import service from '../service/User'
import icons from './icons.vue'
export default {
    components: {
        icons,
        DisplayNotes
    },
    data() {
        return {
            visibleNotes: false,
            flag: true,
            title: '',
            body: '',
        }
    },
    methods: {
        togglingWithClearHandleSubmit() {
            this.flip() + this.handlesubmit() + this.clear()
        },
        flip() {
            this.flag = !this.flag;
        },
        async handlesubmit() {
            let userData = {
                title: this.title,
                body: this.body
            }
            service.userCreateNote(userData).then(response => {
                console.log("Notes", response);
                localStorage.getItem('token', response.data.token);
                alert("Note created successfully");
            }).catch(error => {
                alert("Empty notes not accepted..");
                return error;
            })
        },
        clear() {
            document.getElementById("name-rmv").value = '';
            document.getElementById("txt-rmv").value = '';
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/CreateNotes.scss";
</style>
