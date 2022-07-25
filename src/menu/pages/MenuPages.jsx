import React from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { logOutThunk } from '../../store/auth'
import { Item } from '../components/Item';
import { ordenamientoProd } from '../herlpers.js/sort';

import '../menu.css';



export const MenuPages = () => {
    const dispatch = useDispatch()

    const { name } = useSelector(state => state.auth)
    
    const { products } = useSelector(state => state.menu)



 

    const logOut= () => {
        dispatch( logOutThunk())
    }
  
    const infoOrdenada = ordenamientoProd(products)

    return (
        <div className="container">
            <div className='mt-5 mb-4 header'>
                <div className='row'>
                    <div className='col-4 col-md-2 logo'>
                        <img src="" alt="logo" />
                    </div>
                    <div className='col-4 col-md-8'></div>
                    <div className='col-4  col-md-2 logout'>
                        <button className='btn btn-outline-danger'
                            onClick={ logOut }>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">

                    <h2>
                        {name}

                    </h2>
                </div>
            </div>            

            <div className="accordion" id="accordionExample">
                    
                       
                {   infoOrdenada.title.map(function(productoName, i){
                    
                    return ( 

                        <div className="card" key={i}>
                            <button className="btn btn-link" type="button" data-toggle="collapse"  data-target={"#collapse" + i} aria-expanded="true" aria-controls={'collapse' + i} >
                                <div className="card-header" id={'heading' + i}>
                                    <h2 className="mb-0">
                                        {productoName } - ( { infoOrdenada.contenido[productoName].length }  )
                                    </h2>
                                </div>
                            </button>
                            <div id={'collapse' + i} className={`collapse ${(i === 0)? 'show' : ''}`}  aria-labelledby={'heading' + i} data-parent="#accordionExample"  >
                                <div className="card-body">
                                    {
                                        infoOrdenada.contenido[productoName].map(function(producto, i){
                                            return (
                                                <Item  key={i} {...producto}>

                                                </Item>
                                                
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    )
                    })
                }

            </div>



        </div>
    )
}
