import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

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
  const [role, setRole] = useState('')

  const navigate = useNavigate()
  useEffect(() => {
    axios.get('http://localhost:8000/role/one').then((res) => {
      console.log(res.data._id)
      setRole(res.data._id)
    })
  }, [])

  const addUser = () => {
    if (password == rePassword) {
      axios
        .post('http://localhost:8000/auth/register', {
          firstname,
          lastname,
          username,
          email,
          password,
          role,
        })
        .then(function (response) {
          console.log(response)
          alert('Mời bạn trở lại trang đăng nhập')
          navigate('/signin')
        })
        .catch(function (error) {
          console.log(error)
        })
    } else {
      alert('Mật khẩu xác nhận không trùng khớp')
    }
  }
  return (
    <div className="relative min-h-screen pb-24 text-center lg:pb-12">
      <Header />
      <div className="uppercase text-[32px] font-googleSansBold text-primary mt-20">
        Đăng ký
      </div>
      <div className="fixed top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form onSubmit={addUser}>
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
        <div className="flex justify-center my-5">
          <Button
            type="button"
            btnStyle="btn-fill"
            btnCSS={'w-[400px]'}
            icon="login"
            onClick={addUser}
          >
            Tạo tài khoản
          </Button>
        </div>
        <Link to="/signin" className="hover:text-primary">
          Đăng nhập
        </Link>
      </div>
      <Footer />
    </div>
  )
}

export default SignUp
