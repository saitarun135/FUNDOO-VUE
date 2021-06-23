<template>
<div class="carddisplay-section">
    <div v-for="note in notes" :key="note.id" id="blur" class="container note">
        <div @click="toggle(note.id)" class="card-content">
            <h5>{{note.title}}</h5>
            <p>{{note.body}}</p>
        </div>
        <div class="import-icons">
            <icons class="imported-icons note-icons" :cardId="note.id"  />
            <button v-if="flag" class="card-button" type="button" @click="handlesubmit();Togglebtn();">Close</button>
        </div>
    </div>
    <div id="popup">
        <UpdateNotes :cardId="clickedCard" :cardContent="cardContent" />
    </div>
</div>
</template>

<script>
import service from '../service/User'
import icons from './icons'
import UpdateNotes from './UpdateNotes.vue'
export default {
    name: 'DisplayNotes',
    components: {
        icons,
        UpdateNotes
    },
    data() {
        return {
            flag: true,
            notes: [{
                id: 1,
                title: 'Fundoo',
                body: 'unlimited notes..'
            }, ],
            clickedCard: '',
            cardContent: {},
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
        toggle(id) {
            var blur = document.getElementById('blur');
            blur.classList.toggle('active');
            this.clickedCard = id;
            // this.card.content = this.notes.filter((note) => note.id === id);
            var popup = document.getElementById('popup');
            popup.classList.toggle('active');
        },
        
    }
}
</script>

<style lang="scss">
@import "@/styles/DisplayNotes.scss";
</style>
