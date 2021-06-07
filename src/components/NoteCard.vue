<template>
<div class="create">

    <form class="create-note" @submit.prevent="handlesubmit">
        <input name="title" v-model="title" placeholder="Title" />
        <textarea name="content" v-model="body" style="resize: none" placeholder="Take a note..." rows="3"></textarea>
        <div class="btm-icons">
            <i class="far fa-bell"></i>
            <i id="second-icon" style="opacity:0.9;" class="fas fa-user"></i>
            <i style="opacity:0.9;" class="fas fa-palette"></i>
            <i id="forth-icon" style="opacity:0.9;" class="fas fa-archive"></i>
            <i id="fifth-icon" style="opacity:0.9;" class="fas fa-ellipsis-v"></i>
            <button id="btn-section" type="submit">Close</button>
        </div>
    </form>
</div>
</template>



<style lang="scss" scoped>
.create-note {
    position: relative;
    width: 480px;
    max-width: 100%;
    margin: 152px auto;
    margin-right: 80%;
    background: #fff;
    padding: 15px;
    border-radius: 2px;
    box-shadow: 0 1px 5px #ccc;
}

input {
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
}

textarea {
    width: 100%;
    max-width: 100%;
    border: none;
    padding: 4px;
    outline: none;
    font-size: 1.2em;
}

button {
    border: none;
    background: transparent;
    font-weight: 500;
}

#second-icon {
    padding-left: 30px;
    padding-right: 30px;
}

#forth-icon {
    padding-left: 30px;
    padding-right: 30px;
}

#fifth-icon {
    padding-right: 195px;
}

span {
    font-weight: 500;
}

a {
    text-decoration: none;
}

#left {
    margin-left: -60%;

    a {
        color: black;
    }
}
</style>
