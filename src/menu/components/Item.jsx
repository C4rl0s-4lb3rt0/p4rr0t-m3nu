import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { chageAvailable } from '../../store/menu/thunks';

export const Item = ({name ,uuid, availability, price,imageUrl,description }) => {
    const dispatch = useDispatch()

    const [isChecked, setIsChecked] = useState(availability);



    const handleOnChange = () =>{
        dispatch(chageAvailable(uuid, availability) )
        setIsChecked(!isChecked);
    }


   
    return (
        <div  className="element">
            <div className="container">
                <div className="row">
                    <div className="col-1 col-md-1"></div>
                    <div className="col-3 ">
                        <img src={imageUrl} alt={uuid} width="100%" />
                    </div>
                    <div className="col-12 col-md-5 ">
                        <h3 className="name">{ name }</h3>
                        <h5 className="description">{ description }  </h5>
                        <h4 className="precie">${ price} MXN</h4>
                    </div>
                    <div className="col-12  col-md-3">
                        <h3 className="name text-center disponibilidad">Disponibilidad</h3>
                        <div className="center">
                            <input type="checkbox" checked={(availability ==='AVAILABLE') ?true: false} onChange={handleOnChange}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
