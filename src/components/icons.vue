<template>
<div class="footer">
    <i class="fas fa-bell"></i>
    <i class="fas fa-user"></i>
    <i class="fas fa-palette"></i>
    <i clss="fas fa-image"></i>
    <i class="fas fa-archive"></i>
    <div class="dropdown">
        <i @click="myFunction();" class="fas fa-ellipsis-v"></i>
        <div ref="myDropdown" class="dropdown-content">
            <a @click="handlesubmit();">DeleteNote</a>
            <a>ChangeLabel</a>
        </div>
    </div>
</div>
</template>

<script>
import service from '../service/User'
export default {
    props: ['cardId'],
    data() {
        return {
            clickedCard: '',
        }
    },
    methods: {
        myFunction(event) {
            this.$refs.myDropdown.classList.toggle("show");
            return event;
            // document.getElementById("myDropdown").classList.toggle("show");
        },
        async handlesubmit() {
            let userData = {
                id: this.cardId,
            }
            service.userTrashNote(userData).then(response => {
                alert("Note deleted Successfully");
                return response;
            }).catch(error => {
                alert("Error");
                return error;
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "@/styles/icons.scss";
</style>
