import {INCREMENT , DECREMENT , CHANGE_VISIBLITY} from './actionTypes'




export const increment = () => {

return {type: INCREMENT}


}


export const decrement =() => {


return {type: DECREMENT}

}


export const changeVisibility = () => {


return {type : CHANGE_VISIBLITY}


}