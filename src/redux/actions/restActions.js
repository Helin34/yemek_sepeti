import api from "../../utils/api";
import ActionTypes from "../reducers/actionTypes";


export const setLoading =(payload)=>
    ({type:ActionTypes.REST_LOADİNG});
export const setRestaurants =(payload)=>
    ({type:ActionTypes.REST_SUCCESS,payload,});
export const setError =(payload)=>
    ({type:ActionTypes.REST_ERRORs,payload,});

export const getRestaurants =()=> {
    return async (dispatch)=>{

  
    dispatch(setLoading());
    api
    .get ("/restaurants")
    .then((res)=>dispatch(setRestaurants(res.data)))
    .catch((err)=>dispatch(setError(err)));
  }
}
