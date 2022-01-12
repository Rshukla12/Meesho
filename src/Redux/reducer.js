import { actionTypes } from "./action"

const initState = {
    isLoading: false,
    isError:false,
    error: null,
    data: []
}
export const reducer = (state=initState,action)=>{
    switch(action.type){
        case actionTypes.GET_REQUEST : {
            return {
                ...state,
                isLoding : true,
            }
        }
        case actionTypes.GET_SUCCESS : {
            return {
                ...state,
                isLoding : false,
                data: action.payload.data
            }
        }
        case actionTypes.GET_ERROR : {
            return {
                ...state,
                isLoding : false,
                isError : true,
                error: action.payload.error
            }
        }
        default : {
            return state
        }
    }
}