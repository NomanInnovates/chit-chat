import { SEND_MSG, RECEIVE_MSG } from "../constants/types";

let initialState = {
  messages: [],
};

export default function msgReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MSG:
      return {
        ...state,
        msgs: action.payload,
      };
    case SEND_MSG:
      return state;

    default:
      return state;
  }
}
