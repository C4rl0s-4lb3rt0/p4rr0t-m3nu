//import { useMemo } from "react";
// import { Link as RouterLink } from "react-router-dom";
// import { Google } from "@mui/icons-material";
// import { Button, Grid, Link, TextField, Typography,Alert } from "@mui/material";
//import { useDispatch, useSelector } from "react-redux";
//import {startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";

import { useDispatch } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { startLoginWithEmailPassword } from "../../store/auth/thunks";


const formData = {
    email:'android-challenge@parrotsoftware.io',
    password:'8mngDhoPcB3ckV7X'
  }

export const AuthPages = () => {   
    
    
    const {email, password , onInputChange } = useForm(formData);
    const dispatch = useDispatch();


    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        dispatch( startLoginWithEmailPassword({email, password}) );
        //dispatch( uuidInit());
        
        //dispatch( startLoginWithEmailPassword({email, password}) );
      } 

    return (
        <>
          <div className="container">
              <form onSubmit={onSubmit}>

                <div className="row">
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="email"
                            value={email}
                            onChange={ onInputChange} 
                            placeholder="logeate" 
                            id="exampleFormControlInput1"
                        />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={password}
                            onChange={ onInputChange} 
                            placeholder="***" 
                            id="exampleFormControlInput2"
                        />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Enviar</button>
                    </div>
                </div>
              </form>

          </div>
        </>
    );

}




