import { v4 } from "uuid";
import api from "../../utils/api";
import ActionTypes from "../reducers/actionTypes";


export const getCart=()=>(dispatch)=>{
    dispatch({
        type:ActionTypes.CART_LOADİNG,

    });
    api.get("/cart")
    .then((res)=>dispatch({
        type:ActionTypes.CART_SUCCESS,
        payload:res.data
    }))
    .catch(err=> dispatch({
        type:ActionTypes.CART_ERROR,
        payload:err.message
    }))
   
};


export const addToBasket =(product)=>(dispatch)=>{
    const newItem ={
        id:v4(),
        productId:product.id,
        title:product.title,
        price:product.price,
        photo:product.photo,
        amount:1,

    };
    api.post("/cart",newItem)
    .then(()=>dispatch({
        type:ActionTypes.ADD_TO_BASKET,
        payload:newItem,

    }))
}

export const updateItem =(id,newAmount) =>(dispatch)=>
    {
        api.patch(`/cart/${id}`,{amount:newAmount}).then((res)=>{
            dispatch({
                type:ActionTypes.UPDATE_ITEM,
                payload:res.data,
            });
        })


}

export const  deleteItem =(id)=>
(dispatch)=>{
    api.delete(`/cart/${id}`)

    .then(()=>dispatch({
        type:ActionTypes.DELETE_ITEM,
        payload:id,
    }))
}
