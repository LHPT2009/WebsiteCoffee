import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer/Footer'

const Repass = () => {
  const [password, setPassword] = useState('')
  const [rePassword, setrePassword] = useState('')
  const navigate = useNavigate()

  const ResetPass = async (e) => {
    e.preventDefault()
    const rstoken = localStorage.getItem('tokenreset')
    const email = jwt_decode(rstoken).email
    if (password == rePassword) {
      const updateUser = await axios.post('http://localhost:8000/mail/reset', {
        email: email,
        password: password,
      })
      if (updateUser) {
        localStorage.removeItem('checksuccess')
        localStorage.removeItem('tokenreset')
        navigate('/signin')
      } else {
        navigate('/repass')
      }
    } else {
      navigate('/repass')
    }
  }
  if (localStorage.getItem('checksuccess')) {
    return (
      <div className="text-center relative pb-24 lg:pb-12 min-h-screen">
        <form onSubmit={ResetPass}>
          <div>
            <TextInput
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mật khẩu mới"
            />
          </div>
          <div>
            <TextInput
              name="re-password"
              onChange={(e) => setrePassword(e.target.value)}
              type="password"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
          <div>
            <Button
              icon={'navigate_next'}
              onClick={ResetPass}
              btnCSS={'h-[44px] px-6 py-3'}
            >
              Tiếp tục
            </Button>
          </div>
        </form>
        <Footer />
      </div>
    )
  } else {
    return <Navigate to={'/checkcode'} />
  }
}

export default Repass
