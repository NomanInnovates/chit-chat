import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Room.css'
import { IoMdSend } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { recieveMessage, sendMessage } from '../redux/action/messageAction'
import { useDispatch } from 'react-redux'

function Room () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(recieveMessage())
  }, [dispatch])

  const msgs = useSelector(state => state.messageReducer.msgs)
//   console.log("ss",store)
  const user = useSelector(state => state.authReducer.user)
  // const {id} = useParams();
  // console.log("data in param",id)
  const [message, setMessage] = useState('')
  const handleInput = async e => {
    e.preventDefault()
    //    console.log(message)
    // console.log('store from redx', store)
    let msg = {
      uName: user.displayName,
      userId: user.uid,
      message: message,
      timestamp: new Date()
    }
    dispatch(sendMessage(msg))
    setMessage('')
  }

  return (
    <div className='roomPage'>
      <div className='roomHeader'>
        <div className='backButton'>
          {' '}
          <Link to='/chats'>
            <button> back</button>
          </Link>{' '}
        </div>{' '}
        <div> Room Name</div>
      </div>
      <div className='roomBody'>
          {
              msgs?.map(m =>
                  { 
                return <p className='message'>
                <span class='userName'>{m.uName}</span>
                <div className='userMessage'>{m.message}</div>
                <span class='chat_timestemp'>{new Date(m.timestamp * 1000).toString()}</span>
              </p>
      
              })
          }
        <p className='message'>
          <span class='userName'>Nomi</span>
          <div className='userMessage'>hello</div>
          <span class='chat_timestemp'>Tue, 24 Aug 2021 09:32:35 GMT</span>
        </p>
        <p className='message msgSent'>
          <span class='userName'>Noman </span>
          <div className='userMessage'>hi</div>
          <span class='chat_timestemp'>Tue, 24 Aug 2021 09:32:35 GMT</span>
        </p>
      </div>
      <div className='roomFooter'>
        <form>
          <input
            value={message}
            type='text'
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={handleInput} type='submit'>
            {' '}
            <IoMdSend />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Room
