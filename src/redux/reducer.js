import { ERROR, GET_DATA } from "./actionType"

const initalState ={
    planets:[],
    isloading :false,
    isError: false,
}


export const reducer =(state=initalState, {type,payload})=>{

    switch(type){
        case "LOADING_DATA" :{
            return{...state , isloading:true}
        }
        case "ERROR":{
            return {...state, isloading:false, isError:true }
        }

        case "GET_DATA":{
            return{...state, isloading:false,planets:payload}
        }
        default :return state
    }
   
}