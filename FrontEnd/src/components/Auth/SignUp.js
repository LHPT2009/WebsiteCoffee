import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Header from '../Header/Header'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import Footer from '../Footer/Footer'

const SignUp = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const addUser = () => {
    if (password == rePassword) {
      axios
        .post('http://localhost:8000/auth/register', {
          firstname,
          lastname,
          username,
          email,
          password,
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      alert('password xác nhận của bạn ko đúng!!!')
    }
  }
  return (
    <div className="text-center font-googleSansRegular relative pb-24 lg:pb-12 min-h-screen">
      <Header />
      <div className="h-10"></div>
      <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px] justify-center">
        <form onSubmit={''}>
          <div>
            <TextInput
              name="lastName"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Họ"
              className="w-[198px] mr-2"
            />
            <TextInput
              name="firstName"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Tên"
              className="w-[198px]"
            />
          </div>
          <div className="mt-2">
            <TextInput
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Tên đăng nhập"
              className={'w-[400px]'}
            />
          </div>
          <div className="mt-2">
            <TextInput
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Mật khẩu"
              className={'w-[400px]'}
            />
          </div>
          <div className="mt-2">
            <TextInput
              name="re-password"
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              placeholder="Xác nhận mật khẩu"
              className={'w-[400px]'}
            />
          </div>
          <div className="mt-2">
            <TextInput
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className={'w-[400px]'}
            />
          </div>
        </form>
        <Button
          type="button"
          btnStyle="btn-fill"
          icon="login"
          onClick={addUser}
          btnCSS={'h-[44px] px-6 py-3 mt-2'}
        >
          Tạo tài khoản
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
