export const ordenamientoProd = ( products ) => {
    let filterServices = []; 
    let orderProductos = products
        orderProductos.forEach(service => {
            if (filterServices.length === 0)
                filterServices.push(service);
            else {
                let serviceFound = filterServices.find(element => element.uuid === service.uuid);
                if (!serviceFound)
                    filterServices.push(service);
                else {
                
                let position = filterServices.indexOf(serviceFound);
                filterServices[position] = service;
                }
            }
        })

        
        let listServices = filterServices.reduce(
        (h, obj) =>
            Object.assign(h, { [obj.categoryName]: (h[obj.categoryName] || []).concat(obj) }),
        {}
        );
        
        let titleCombos = Object.keys(listServices)
        console.log('titleCombos');
        console.log(titleCombos);
        let contenidosCombos=listServices;
        console.log('this.contenidosCombos');
        console.log(contenidosCombos);

        let ordenamiento={
            title:titleCombos,
            contenido:contenidosCombos
        }

        return  ordenamiento
}

