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

