import { ERROR, GET_DATA, LOADING_DATA } from "./actionType"

export const getPlanets = (input) => (dispatch) => {

    dispatch({ type: LOADING_DATA });

    fetch(`https://talentrax-server-e485.onrender.com/planets?q=${input}`).then((res) =>{return res.json()}).then((data) => {
        // console.log(data)
        dispatch({type:GET_DATA,payload:data})
    }).catch((err) => {
        console.log(err)
        dispatch({ type: ERROR })
    })

}