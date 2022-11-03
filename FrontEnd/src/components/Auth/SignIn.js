import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Header from '../Header/Header'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

const SignIn = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const loginUser = async (e) => {
    e.preventDefault()
    try {
      const Auth = await axios.post('http://localhost:8000/auth/login', {
        username,
        password,
      })
      localStorage.setItem('token', Auth.data.accessToken)
      if (Auth.data.role.rolename == 'Admin') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="text-center">
      <Header />
      <div className="h-10"></div>
      <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px] justify-center">
        <form onSubmit={loginUser}>
          <div>
            <TextInput
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Tên đăng nhập"
            />
          </div>
          <div>
            <TextInput
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
        </form>
        <Button onClick={loginUser} icon="login" buttonCSS="mt-4">
          Đăng nhập
        </Button>
      </div>
    </div>
  )
}

export default SignIn
