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

<style lang="scss" scoped>
input[type="text"] {
    width: 600px;
    margin-left: 30%;
    margin-top: 7%;
    height: 50px;
    border-radius: 5px;
    font-family: 'Times New Roman', Times, serif;
    font-weight: 600;
    letter-spacing: 1px;
}

i {
    margin-left: -50px;
    letter-spacing: -15px;
}

#img1 {
    opacity: 0.5;
    font-size: 20px;
    margin-left: -20px;
}

#img2 {
    opacity: 0.5;
    font-size: 20px;
}

#ff {
    display: none;
}
</style>
