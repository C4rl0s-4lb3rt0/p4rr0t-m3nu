import axios from 'axios';


export const apiParrot = axios.create({
    baseURL:'http://api-staging.parrot.rest/api/',
})



export function initAxiosInterceptors(){
    axios.interceptors.request.use(function(config){
        let userToken
        if ( localStorage.getItem('token')){
            userToken = localStorage.getItem('token');
            config.headers.Authorization= `bearer ${userToken}`
            return config
        } else {
              userToken = '';
        }
    })
}