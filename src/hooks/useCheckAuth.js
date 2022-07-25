import { useDispatch, useSelector } from "react-redux";
import { inicioToken} from "../store/auth";
import { getProducts } from "../store/menu";

export const useCheckAuth = () => {

    const {status } = useSelector(state => state.auth) ;
    const dispatch = useDispatch()

    let userToken = localStorage.getItem('token'); 
    if(!!userToken){
      dispatch(inicioToken())
      dispatch(getProducts())
    }

   
  return status
}
