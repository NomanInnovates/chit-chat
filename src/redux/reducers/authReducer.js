import { SIGNIN, LOGOUT, CHECKUSER } from "../constants/types";

let initialState = {
  isLogin: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN:
      let newState = {
        ...state,
        user: action.payload,
        isLogin: true,
      };
      return newState;
    case CHECKUSER:
      let check = {
        ...state,
        isLogin: true,
        user: action.payload,
      };
      return check;
    case LOGOUT:
      let logState = {
        ...state,
        isLogin: false,
      };
      return logState;

    default:
      return state;
  }
}
