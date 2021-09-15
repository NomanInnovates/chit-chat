import { Alert } from 'bootstrap'
import { db } from '../../configs/firebase'
import {ADD_ROOM,GET_ROOM} from '../constants/types'
import firebase  from 'firebase'

export const addRoom = (chatName,user) => async ( dispatch) => {
    try {
        await db
          .collection('rooms')
          .add({ roomName: chatName,userName: user.displayName, userId: user.uid , timeStamp: firebase.firestore.FieldValue.serverTimestamp()})
          
          dispatch({
              type:ADD_ROOM
            })
        } 
    catch (error) {
        console.log(error.message)
      } 

}

export const getRoom = () => async (dispatch) => {
    try {
      db.collection("rooms")
        .orderBy("timeStamp")
        .onSnapshot((querySnapshot) => {
          let allRoom = [];
          querySnapshot.forEach((doc) => {
            allRoom.push({ ...doc.data(), uid: doc.id });
          });
  
          dispatch({
            type: GET_ROOM,
            payload: allRoom,
          });
        });
    } catch (error) {
        Alert(error.message)
      console.log("error", error);
      
    }
  };