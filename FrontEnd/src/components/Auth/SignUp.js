import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Header from '../Header/Header'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

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
        .post('http://localhost:8000/auth/register', { firstname, lastname, username, email, password })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    else {
      alert("password xác nhận của bạn ko đúng!!!");
    }
  }
  return (
    <div className="text-center">
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
          <div>
            <TextInput
              name="re-password"
              onChange={(e) => setRePassword(e.target.value)}
              type="password"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
          <div>
            <TextInput
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </div>
        </form>
        <Button onClick={addUser} icon="login" buttonCSS="mt-4">
          Tạo tài khoản
        </Button>
      </div>
    </div>
  )
}

export default SignUp
