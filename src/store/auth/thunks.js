import { login ,checkingCredentials, logout} from "../auth/authSlice"
 //import { initAxiosInterceptors } from '../../api/apiParrot';

 import * as axios from 'axios';
import { clearProducts } from "../menu";




//initAxiosInterceptors()

export const startLoginWithEmailPassword = ({ email, password }) => {

    const loginPayload = {
        email: email,
        password: password
    }
    return async ( dispatch , getState) => {  
        dispatch(checkingCredentials());
    
        axios.post("http://api-staging.parrot.rest/api/auth/token", loginPayload)
        .then(response => {
            const userToken  = response.data.access;
            localStorage.setItem('token', userToken);
        //    dispatch(login(response.data))
        

            const config = {
                headers: { Authorization: `Bearer ${ userToken }` }
            };
            
            
            console.log('config')
            console.log(config)
            axios.get('http://api-staging.parrot.rest/api/v1/users/me',config )
                .then(aux=>{
                    console.log(aux.data.result)
                    let infoUser = {
                        email: aux.data.result.email,
                        uuid:  aux.data.result.stores[0].uuid,
                        name:  aux.data.result.stores[0].name
                    }
                    console.log('aux')
                    dispatch( login(infoUser) )

                }
                ).catch(
                    console.log
                );




        })
        .catch(
            err => console.log(err)
            );
    }
}


export const uuidInit = () =>{
    return async(dispatch, getState) => {
        let userToken
        if ( localStorage.getItem('token')){
            userToken = localStorage.getItem('token');
          } else {
              userToken = '';
          }
          console.log('userToken')
          console.log(userToken)
    }
}


export const inicioToken = () => {
    return async ( dispatch , getState) => {
        let userToken = localStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${ userToken }` }
        };
        
        
        console.log('config')
        console.log(config)
        axios.get('http://api-staging.parrot.rest/api/v1/users/me',config )
            .then(aux=>{
                console.log(aux.data.result)
                let infoUser = {
                    email: aux.data.result.email,
                    uuid:  aux.data.result.stores[0].uuid,
                    name:  aux.data.result.stores[0].name
                }
                console.log('aux')
                dispatch( login(infoUser) )
    
            }
            ).catch(
                console.log
            );

    }  

}

export const logOutThunk = () => {
    return async ( dispatch , getState) => {
        localStorage.removeItem('token')
        dispatch( logout () )
        dispatch( clearProducts() )

    }
}