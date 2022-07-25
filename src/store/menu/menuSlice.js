import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        isSaving: false,
        messageSaved: '',
        products: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        changeAvailable:(state, action) => {
            state.products = state.products.map( product => {
                if( product.uuid === action.payload.uuid){
                    product.availability = action.payload.availability
                    console.log('product')
                    console.log(product)
                    return product
                }
                return product
            })
        },
        clearProducts: ( state ) => {
            state.isSaving= false;
            state.messageSaved= '';
            state.products= [];
        }
    }
});

// Action creators are generated for each case reducer function
export const { setProducts ,changeAvailable ,clearProducts} = menuSlice.actions;