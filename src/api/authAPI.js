import axios from 'axios';
import { AUTHENTICATE_API } from './constant/projectAPI';

export const userLogin = async(data) => {
    
      
    return await axios.post(`${AUTHENTICATE_API}/login`, data,{headers: {
        "Content-Type" : "application/json"
    }});
}