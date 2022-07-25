
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        email:null,
        errorMessage:null,
        name:null,
        status: 'not-authenticated',//checking,not-authenticated,authenticated 
        uuid:null,
    },




    reducers: {
        login:( state , { payload } ) => {
            console.log(payload);
            state.email=payload.email;
            state.errorMessage= null ;
            state.name=payload.name;
            state.status='authenticated';
            state.uuid=payload.uuid;

        },
        logout:(state,  {payload}) => {
            state.status='not-authenticated';
            state.uuid= payload;
            state.email= null;
            state.errorMessage= payload?.errorMessage;
           },
        checkingCredentials:(state) => {
            state.status = 'checking';
       },
    }
});

// Action creators are generated for each case reducer function
export const { login ,logout,checkingCredentials} = authSlice.actions;