import { Button } from 'react-bootstrap'
import React from 'react'
import icon from '../assets/chat-icon.png'
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare
} from 'react-icons/fa'
import './Signin.css'
import { auth, provider } from '../configs/firebase'
import { signIn } from '../redux/action/authAction'
import { useDispatch } from 'react-redux'


function Signin () {
  const dispatch = useDispatch()
  const handleClick = async () => {
    try {
      let res = await auth.signInWithPopup(provider)
      dispatch(signIn(res.user))
      console.log(res, 'responce in ', provider)
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className='signin-page'>
      <div className='signin-container'>
        <div className='icon'>
          <img src={icon} alt='icon' />
        </div>
        <div>
          <h3> Sign in to Chat </h3>
        </div>

        <div className='signInBtnContainer'>
          {' '}
          <Button onClick={handleClick} variant='primary'>
            Sign in with google
          </Button>
        </div>
        <div className='signinFooter'>
          <div className='socialLinks'>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://www.facebook.com/excellent.jutt/'
            >
              <FaFacebook />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://www.githube.com/Nomi0125/'
            >
              <FaGithub />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://www.linkedin.com/in/noman-imran-9080891ba/'
            >
              <FaLinkedin />
            </a>
            <a
              rel='noreferrer'
              target='_blank'
              href='https://twitter.com/Noman23880389'
            >
              <FaTwitterSquare />
            </a>
          </div>
          <div>
            © Chat app. Made with ❤️ by{' '}
            <a target='blank' href='https://github.com/Nomi0125'>
              Noman Sandhu
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
