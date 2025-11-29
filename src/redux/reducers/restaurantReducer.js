import ActionTypes from "./actionTypes";
import Restaurant from "../../pages/Restaurant";
import Header from "../../components/Header";




const initialState={
    restaurants:[],
    isLoading:true,
    error:null,

};

const restaurantReducer= ( state=initialState,action)=>{
    console.log(" aksiyon geldi",action)
    switch (action.type){
        case ActionTypes.REST_LOADİNG:
            return {...state,isLoading:true};
        case ActionTypes.REST_ERROR:
            return {...state,isLoading:false,
                 error: action.payload.message};
        case ActionTypes.REST_SUCCESS:
            return {...state,isLoading:false,error:null,
                restaurants:action.payload,};
            default:
                return state;
    }
};
export default restaurantReducer;