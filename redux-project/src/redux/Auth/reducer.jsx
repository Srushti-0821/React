
import {  LOGOUT_USER, SIGNIN, SIGNUP } from "../actionType"

const initialState ={
    user :[],
    currentUser:null,
    isAuth : false
}

export function reducer(state=initialState, {type,payload})
{
    switch(type)
    {
        case SIGNUP :
            return {user:[...state.user,payload],currentUser:null}

        case SIGNIN :
            return {...state,currentUser:payload,isAuth:true}

        case LOGOUT_USER:
            return { ...state, currentUser: null};

        default :
            return state
    }

}

// const initialStatee = {
//   currentUser: null,
// };

// export const reducer = (state = initialStatee, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return { ...state, currentUser: action.payload };
//     case "LOGOUT":
//       return { ...state, currentUser: null };
//     default:
//       return state;
//   }
// };