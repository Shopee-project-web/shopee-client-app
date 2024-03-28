import axios from 'axios';
import { AUTHENTICATE_API } from './constant/projectAPI';

export const userLogin = async(data) => {      
    return await axios.post(`${AUTHENTICATE_API}/login`, data,{headers: {
        "Content-Type" : "application/json"
    }});
};

export const userRegister = async(data) => {
    const response = null;
    try{
        response = await axios.post(`${AUTHENTICATE_API}/register`, data, {headers: {
            "Content-Type" : "application/json"
        }});
        return response;
    }catch(e){
        console.log("Can't connect to database");
    }
};

export const  userLogout = async() => {
    return await axios.post(`${AUTHENTICATE_API}/logout`,{},{withCredentials: true});
};