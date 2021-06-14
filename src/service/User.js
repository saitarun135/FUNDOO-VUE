// import axios from 'axios';
import AxiosService from '../service/axios';
const axios=new AxiosService()

export default{
    userRegister(data){
        return axios.postData("/register",data);
    },
    userLogin(data){
        return axios.postData("/login",data);
    },
    userForgot(data){
        return axios.postData("/auth/sendPasswordResetLink",data);
    },
    userReset(data){
        return axios.postData("/auth/resetPassword",data);
    },
    userCreateNote(data){
        return axios.postData("/createNote",data);
    }
}