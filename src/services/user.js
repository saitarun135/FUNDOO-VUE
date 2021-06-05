import axios from 'axios';
const axios=new AxiosService();
export default{
    userLogin(data){
        return axios.post("/login",data);
    }
}