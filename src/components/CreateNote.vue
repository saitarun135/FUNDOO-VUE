<template>
<div class="input-box1">
    <div v-show="showNote==false" class="input-bx">
        <input @click="showNote=!showNote " type="text" placeholder="Take a note.." />
        <span id="img1"><i class="fas fa-image"></i></span>
        <span id="img2"><i class="fas fa-paint-brush"></i></span>
    </div>
    <NoteCard v-if="showNote" />
</div>
</template>

<script>
import NoteCard from './NoteCard.vue'
export default {
    components: {
        NoteCard
    },
    name: 'CreateNote',
    data() {
        return {
            showNote: false,

        }
    }
}
</script>

