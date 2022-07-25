import React, { useState } from 'react'

export const useMenu = (initialMenu = []) => {
   

    const [products, setProducts] = useState(initialMenu)


    const sortProducts = () => {
        return console.log('desde Sort')
    }

    return {
        sortProducts
    }
}
