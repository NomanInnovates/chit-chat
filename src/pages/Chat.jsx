import React, { useEffect } from 'react'
import './Chat.css'
import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { auth } from '../configs/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../redux/action/authAction'
import { addRoom, getRoom } from '../redux/action/roomsAction'

function Chat () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRoom())
  }, [dispatch])

  const user = useSelector(store => store.authReducer.user)
  const rooms = useSelector(store => store.roomReducer.rooms)
  console.log(user)
  const handleLog = async () => {
    try {
      await auth.signOut()
      dispatch(logOut())
      alert('log Out successful')
    } catch (error) {
      alert(error.message)
    }
  }

  const createChat = async () => {
    let chatName = prompt('enter room name')
    dispatch(addRoom(chatName, user))
  }
  return (
    <div>
      <div className='top-bar'>
        <div className='userProfile'>
          <img src={user?.photoURL} alt='profile' />
        </div>
        <div className='logOutBtn'>
          <button onClick={handleLog} className='createBtn'>
            <BiLogOut />
          </button>
        </div>
      </div>
      <div className='rooms-container'>
        <button className='createBtn' onClick={createChat}>
          Create a new room
        </button>
        <hr />
        {rooms.map((item, i) => {
          console.log(item)
          return (
            <Link to={`room/${item.uid}`}>
              <div className='chatDoor'>
                <div className='chatDoorImg'>
                  <img
                    src={`https://avatars.dicebear.com/api/male/:${item.uid}.svg`}
                    alt='ava'
                  />
                </div>
                <div className='chatDoorDetail'>
                  <h2>{item.roomName}</h2>
                  <h5>hello world</h5>
                </div>

                <hr />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Chat
