<template>
<div v-if="flag==false" class="update">
    <form class="update-note" @submit.prevent autocomplete="off">
        <input name="title" v-model="title" placeholder="Title" />
        <textarea name="content" v-model="body" style="resize: none" placeholder="Take a note..." rows="3"></textarea>
        <div class="btm-icons">
            <icons />
            <button id="btn-section" type="submit" @click="handlesubmit();flip();">Close</button>
        </div>
    </form>
</div>
</template>

<script>
import icons from './icons.vue'
import service from '../service/User'
export default {
    components: {
        icons
    },
    props: ['cardId', 'cardContent'],
    data() {
        return {
            title: '',
            body: '',
            flag: false,
        }
    },
    created() {
        this.title = this.cardContent.title;
        this.body = this.cardContent.body;
    },
    methods: {
        flip() {
            this.flag = !this.flag;
        },
        async handlesubmit() {
            let userData = {
                id: this.cardId,
                title: this.title,
                body: this.body
            }
            service.userUpdateNotes(userData).then(response => {
                alert("Note updated  successfully");
                return response;
            }).catch(error=>{
                alert("Error ");
                return error;
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/UpdateNotes.scss";
</style>
