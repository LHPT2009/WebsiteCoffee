import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer/Footer'

const EnterEmail = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const SendMailUser = async (e) => {
    e.preventDefault()
    try {
      const tokenreset = await axios.post('http://localhost:8000/mail', {
        email: email,
      })
      localStorage.setItem('tokenreset', tokenreset.data)
      if (tokenreset) {
        navigate('/checkcode')
      } else {
        navigate('/enteremail')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="text-center relative pb-24 lg:pb-12 min-h-screen">
      <form onSubmit={SendMailUser}>
        <div>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Nhập email"
          />
        </div>
        <div>
          <Button
            onClick={SendMailUser}
            icon={'navigate_next'}
            btnCSS={'h-[44px] px-6 py-3'}
          >
            Tiếp tục
          </Button>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default EnterEmail
