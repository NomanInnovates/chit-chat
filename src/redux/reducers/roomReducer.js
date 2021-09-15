import { ADD_ROOM, GET_ROOM } from "../constants/types";

let initialState = {
  rooms: [],
};

export default function roomReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROOM:
      return {
        ...state,
        rooms: action.payload,
      };
    case ADD_ROOM:
      return state;

    default:
      return state;
  }
}
