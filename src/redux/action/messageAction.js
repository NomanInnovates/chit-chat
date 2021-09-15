import { db } from "../../configs/firebase";
import { SEND_MSG, RECEIVE_MSG } from "../constants/types";

export const sendMessage = (msg) => async (dispatch) => {
  try {
    await db.collection("messages").add(msg);

    dispatch({
      type: SEND_MSG,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const recieveMessage = () => async (dispatch) => {
  try {
    await db.collection("messages").onSnapshot((querySnapshot) => {
      let allMsgs = [];
      querySnapshot.forEach((doc) => {
        allMsgs.push({ ...doc.data(), uid: doc.id });
      });
      console.log("all msg in action", allMsgs);
      dispatch({
        type: RECEIVE_MSG,
        payload: allMsgs,
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
