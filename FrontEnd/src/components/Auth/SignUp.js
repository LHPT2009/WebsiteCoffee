import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Header from '../Header/Header'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })

  const { username, email, password } = inputs

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    })
  }

  const addUser = () => {
    axios
      .post('http://localhost:8000/auth/register', {
        ...inputs,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
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
              onChange={''}
              type="text"
              placeholder="Họ"
              className="w-[198px] mr-2"
            />
            <TextInput
              name="firstName"
              onChange={''}
              type="text"
              placeholder="Tên"
              className="w-[198px]"
            />
          </div>
          <div>
            <TextInput
              name="username"
              onChange={''}
              type="text"
              placeholder="Tên đăng nhập"
            />
          </div>
          <div>
            <TextInput
              name="password"
              onChange={''}
              type="password"
              placeholder="Mật khẩu"
            />
          </div>
          <div>
            <TextInput
              name="re-password"
              onChange={''}
              type="password"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
          <div>
            <TextInput
              name="email"
              onChange={''}
              type="password"
              placeholder="Email"
            />
          </div>
        </form>
        <Button onClick={''} icon="login" buttonCSS="mt-4">
          Tạo tài khoản
        </Button>
      </div>
    </div>
  )
}

export default SignUp
