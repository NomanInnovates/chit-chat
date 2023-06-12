import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Room.css'
import { IoMdSend } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { recieveMessage, sendMessage } from '../redux/action/messageAction'
import { useDispatch } from 'react-redux'

function Room () {
  const params = useParams()
  const dispatch = useDispatch()
  const [message, setMessage] = useState('')

  useEffect(() => {
    dispatch(recieveMessage())
  }, [dispatch])

  const msgs = useSelector(state => state.messageReducer.msgs)
    const user = useSelector(state => state.authReducer.user)

  const handleInput = async e => {
    e.preventDefault()
    //    console.log(message)
    // console.log('store from redx', store)
    let msg = {
      message: message,
      userId: user.uid,
      roomId : params?.id,
      timestamp: new Date(),
      uName: user.displayName,
    }
    dispatch(sendMessage(msg))
    setMessage('')
  }

  return (
    <div className='roomPage'>
      <div className='roomHeader'>
        <div className='backButton'>
        
          <Link to='/chats'>
            <button> back</button>
          </Link>{' '}
        </div>{' '}
        <div> Room Name</div>
      </div>
      <div className='roomBody'>
          {msgs?.filter(i=> i.roomId === params.id)?.map(m =>
                  { 
                return <p className={`message ${m.userId === user.uid ? 'msgSent': '' }`}>
                <span class='userName'>{m.uName}</span>
                <div className='userMessage'>{m.message}</div>
                <span class='chat_timestemp'>{new Date(m.timestamp * 1000).toString()}</span>
              </p>
      
              })
          }
      
      </div>
      <div className='roomFooter'>
        <form>
          <input
            value={message}
            type='text'
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={handleInput} type='submit'>
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Room
