import axios from 'axios';
import { SHOPPIFY_API } from './constant/projectAPI';

export const userLogin = async(data) => {
    
      
    return await axios.post(`${SHOPPIFY_API}/login`, data,{headers: {
        "Content-Type" : "application/json"
    }});
}