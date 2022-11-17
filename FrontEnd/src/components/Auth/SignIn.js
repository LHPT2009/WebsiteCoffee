import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

import Header from '../Header/Header'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import Footer from '../../components/Footer/Footer'

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
      if (!Auth) {
        alert("Thông tin tài khoản và mật khẩu không đúng!!!")
      }
      if (Auth.data.role.rolename == 'Admin' && Auth.data.confirmemail == true) {
        navigate('/admin')
        localStorage.setItem('token', Auth.data.accessToken)
      }
      else {
        if (Auth.data.role.rolename == 'User' && Auth.data.confirmemail == true) {
          navigate('/')
          localStorage.setItem('token', Auth.data.accessToken)
        } else {
          alert("bạn chưa xác nhận mail")
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="relative min-h-screen pb-24 text-center font-googleSansRegular lg:pb-12">
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
        <Link to="/signup" className="block mt-5 hover:text-primary">
          Tạo tài khoản
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default SignIn
