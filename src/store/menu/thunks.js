
 import * as axios from 'axios';
 import Swal from 'sweetalert2'



 import { changeAvailable, setProducts } from './menuSlice'



 
 export const getProducts = () => {
	return async(dispatch, getState) => {

		const { uuid } = getState().auth
		if(!uuid)return;
		let userToken = localStorage.getItem('token');
		const config = {
			headers: { Authorization: `Bearer ${ userToken }` }
		};
		const res = await axios.get(`http://api-staging.parrot.rest/api/v1/products/?store=${uuid}`, config);
		

		let products = res.data.results.map( item=>{
			let pivo={
				name:item.name,
				price : item.price,
				availability :item.availability,
				imageUrl:item.imageUrl,
				uuid:item.uuid,
				categorySort: item.category.sortPosition,
				categoryUuid: item.category.uuid,
				categoryName: item.category.name,
			}
			return pivo
		} )
		
		dispatch(setProducts(products))


	}
 }

 export const chageAvailable = (uuid , availability ) => {
	 return async( dispatch, getStore) => {
		const auxAva = (availability ==='UNAVAILABLE' ) ? 'AVAILABLE' : 'UNAVAILABLE';
		

		const article = { availability :auxAva };
		let userToken = localStorage.getItem('token');
		Swal.showLoading();
		
		const config = {
			headers: { Authorization: `Bearer ${ userToken }` }
		};
		axios.put(`http://api-staging.parrot.rest/api/v1/products/${ uuid }/availability`, article, config)
			.then(response => {
				Swal.fire('Se cambió la disponibilidad')

			});
		const auxChange={
			uuid ,
			availability : auxAva
		}
		dispatch(changeAvailable(auxChange))
	}

 }