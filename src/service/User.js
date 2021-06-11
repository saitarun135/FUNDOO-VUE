import axios from 'axios';
// import AxiosService from '../service/axios';
// const axios=new AxiosService()
export default{
    userRegister(data){
        return axios.post("/register",data);
    },
    userLogin(data){
        return axios.post("/login",data);
    },
    userForgot(data){
        return axios.post("/auth/sendPasswordResetLink",data);
    },
    userReset(data){
        return axios.post("/auth/resetPassword",data);
    },
    userCreateNote(data){
        return axios.post("/createNote",data);
    }
}