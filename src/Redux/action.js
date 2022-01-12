import axios from 'axios';
export const actionTypes = {
    GET_REQUEST: 'GET_REQUEST',
    GET_SUCCESS: 'GET_SUCCESS',
    GET_ERROR: 'GET_ERROR'
}
export const getRequest = ()=>({
    type : actionTypes.GET_REQUEST,
    payload: {
        isLoding : true,
    }
})
export const getSuccess = (res)=>({
    type : actionTypes.GET_SUCCESS,
    payload: {
        isLoding : false,
        data : res
    }
})
export const getError = (err)=>({
    type : actionTypes.GET_ERROR,
    payload: {
        isLoding : false,
        isError : true,
        error : err
    }
})
export const getData = (config)=>(dispatch)=>{
    dispatch(getRequest());
    axios(config)
    .then((res)=>{
        dispatch(getSuccess(res.data));
    })
    .catch((err)=>{
        dispatch(getError(err))
    })
}