import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

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
    <div className="text-center font-googleSansRegular">
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
              className={'w-[400px]'}
            />
          </div>
          <div>
            <TextInput
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mật khẩu"
              className={'w-[400px]'}
            />
          </div>
        </form>
        <Button
          type="button"
          btnStyle="btn-fill"
          icon="login"
          onClick={loginUser}
          btnCSS={'h-[44px] px-6 py-3 mt-2'}
        >
          Đăng nhập
        </Button>
        <Link to="/signup" className="hover:text-primary mt-5 block">
          Tạo tài khoản
        </Link>
      </div>
    </div>
  )
}

export default SignIn
