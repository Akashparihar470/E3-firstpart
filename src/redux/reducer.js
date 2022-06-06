import { actionTypes } from "./action";

const initState = {
    isLoading:false,
    data:[],
    isError:false
};

function reducer(state = initState, action) {
    switch(action.type){
        case actionTypes.ADD_USER_REQUEST:{
            return{
                ...state,
                loading:true,
                error:false
            }
        }
        case actionTypes.ADD_USER_SUCCESS:{
            return{
                ...state,
                loading:false,
                data:action.payload
            }
        }
        case actionTypes.ADD_USER_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true
            }
        }
        default:
            return state;  
    }   
}

export default reducer;
