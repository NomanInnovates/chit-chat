import {SIGNIN,LOGOUT,CHECKUSER } from '../constants/types';

export const signIn = (data) => ( dispatch) => {
 
    dispatch({
        type:SIGNIN,
        payload: data
    })


}
export const logOut = () => ( dispatch) => {
 console.log("logActuion")
    dispatch({
        type:LOGOUT
    })


}
export const checkUser = (user) => async (dispatch) => {
    try {
      dispatch({
        type: CHECKUSER,
        payload: user,
      });
    } catch (error) {
      alert(error.message);
    }
  };