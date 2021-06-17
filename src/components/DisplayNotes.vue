<template>
<div class="carddisplay-section">
    <div v-for="note in notes" :key="note.data" class="container note">
        <div class="card-content">
            <h5>{{note.title}}</h5>
            <p>{{note.body}}</p>
        </div>
        <div class="import-icons">
            <icons class="imported-icons " />
            <button v-if="flag" class="card-button" type="button" @click="handlesubmit();Togglebtn();">Close</button>
        </div>

    </div>
</div>
</template>

<script>
import service from '../service/User'
import icons from './icons'
export default {
    name: 'DisplayNotes',
    components: {
        icons
    },
    data() {
        return {
            flag: true,
            notes: [{
                id: 1,
                title: 'Fundoo',
                body: 'unlimited notes..'
            }, ],
        }
    },
    methods: {
        Togglebtn() {
            this.flag = !this.flag;
        },
        async handlesubmit() {
            service.userDisplayNotes().then(response => {
                this.notes.push(...response.data);
            })
        },
    }
}
</script>

<style lang="scss">
@import "@/styles/DisplayNotes.scss";
</style>
