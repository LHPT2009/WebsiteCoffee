import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import Header from '../Header/Header'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import Footer from '../../components/Footer/Footer'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
const SignIn = () => {
  const clientId = "78527833894-ao0e2761t8gbk4qijevpihcamn5ltlj9.apps.googleusercontent.com";
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sideKey, setSideKey] = useState(
    '6LdfshcjAAAAAHnu08PuFr0edhzcfFCjILuyM3QA'
  )
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientId })
    })
  }, [])

  if (!window.location.hash) {
    window.location = window.location + '#loaded'
    window.location.reload()
  }

  const onSuccess = (res) => {
    const Auth = axios.post('http://localhost:8000/auth/google', {
      lastname: res.profileObj.familyName,
      firstname: res.profileObj.givenName,
      email: res.profileObj.email
    }).then((res) => {
      navigate('/');
      localStorage.setItem('token', res.data);
    })
  }
  const loginUser = async (e) => {
    e.preventDefault()
    try {
      if (token) {
        const Auth = await axios.post('http://localhost:8000/auth/login', {
          username,
          password,
        })
        if (!Auth) {
          alert('Sai tên đăng nhập hoặc mật khẩu')
        }
        if (
          Auth.data.role.rolename == 'Admin' &&
          Auth.data.confirmemail == true
        ) {
          navigate('/admin')
          localStorage.setItem('token', Auth.data.accessToken)
        } else {
          if (
            Auth.data.role.rolename == 'User' &&
            Auth.data.confirmemail == true
          ) {
            navigate('/')
            localStorage.setItem('token', Auth.data.accessToken)
          } else {
            alert('Tài khoản chưa được xác thực')
          }
        }
      } else {
        alert('Vui lòng xác nhận Captcha')
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="relative min-h-screen pb-24 text-center lg:pb-12">
      <Header />
      <div className="uppercase text-[32px] font-googleSansBold text-primary mt-20">
        Đăng nhập
      </div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
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
        <GoogleLogin clientId={clientId}
          buttonText="Đăng nhập bằng GOOGLE"
          scope='https://www.googleapis.com/auth/drive.file'
          onSuccess={onSuccess}
        />
        <div className="flex justify-center mt-3">
          <ReCAPTCHA
            sitekey={sideKey}
            onChange={(token) => {
              setToken(token)
            }}
            className="block pl-12 pr-5 py-5 w-[400px] bg-s5 rounded-3xl hover:rounded-2xl hover:bg-s2 border-[2px] border-solid border-outline-var"
          />
        </div>
        <div className="flex justify-center mt-5">
          <Button
            type="button"
            btnStyle="btn-fill"
            btnCSS={'w-[400px]'}
            icon="login"
            onClick={loginUser}
          >
            Đăng nhập
          </Button>
        </div>
        <div className="flex justify-center mt-5 gap-[100px]">
          <Link to="/signup" className="hover:text-primary">
            Tạo tài khoản
          </Link>
          <Link to="/enteremail" className="hover:text-primary">
            Quên mật khẩu?
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default SignIn
