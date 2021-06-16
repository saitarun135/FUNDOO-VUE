<template>
<div class="main-section">
    <div v-for="note in notes" :key="note.data" class="container note">
        <div class="card-content">
            <h5>{{note.title}}</h5>
            <p><i>{{note.body}}</i></p>
        </div>
        <div class="import-icons">
            <icons class="note-icons" />
            <button type="button" @click="handlesubmit()">close</button>
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
import icons from './icons'
export default {
    components: {
        icons
    },
    data() {
        return {
            notes: [{
                id: 1,
                title: 'Fundoo',
                body: 'unlimited Notes...'
            }, ],
        }
    },
    methods: {
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
