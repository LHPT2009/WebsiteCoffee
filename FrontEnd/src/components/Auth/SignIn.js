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
import barista2 from '../../assets/images/barista_2.png'
import SignUp from './SignUp'
const SignIn = () => {
  const clientId =
    '78527833894-ao0e2761t8gbk4qijevpihcamn5ltlj9.apps.googleusercontent.com'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [sideKey, setSideKey] = useState(
    '6LdfshcjAAAAAHnu08PuFr0edhzcfFCjILuyM3QA'
  )
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId: clientId })
    })
  }, [])

  if (!window.location.hash) {
    window.location = window.location + '#loaded'
    window.location.reload()
  }

  const onSuccess = (res) => {
    if (token) {
      const Auth = axios
        .post('http://localhost:8000/auth/google', {
          lastname: res.profileObj.familyName,
          firstname: res.profileObj.givenName,
          email: res.profileObj.email,
        })
        .then((res) => {
          navigate('/')
          localStorage.setItem('token', res.data)
        })
    } else {
      alert('Vui lòng xác nhận Captcha')
    }
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
    <div className="relative min-h-screen pb-24 items-center text-center lg:pb-12 bg-secondary-cont sm:bg-background">
      <Header />
      <div className="mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px] bg-secondary-cont sm:bg-background ">
        <div className="flex flex-col gap-10 text-center">
          {/* col-2-2 */}
          <div className="grid grid-cols-12 gap-6 h-full lg:h-full">
            {/* col-tilte */}
            <div className="hidden  md:flex md:flex-col col-span-12 lg:col-span-6 justify-center text-left items-start gap-[24px]">
              <h2 className="text-h2 text-primary">Bug Ổn xin chào</h2>
              <d1 className="text-d1 text-black">Đăng nhập để trải nghiệm trọn vẹn☕</d1>
              
            </div>
            {/* col-signin */}
            <div className="grid grid-cols-2 items-center mx-0 sm:mx-20 !py-20 lg:mx-0 !px-4 sm:!px-14 bg-secondary-cont col-span-12 lg:col-span-6 rounded-[24px] gap-4">
              <h1 className='text-h2 text-on-secondary-cont col-span-2 text-left'>Đăng nhập</h1> 
              <form onSubmit={loginUser} className='col-span-2'>
                <div>
                  <TextInput
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Tên đăng nhập"
                    className={'w-[100%]'}
                  />
                </div>
                <div>
                  <TextInput
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Mật khẩu"
                    className={'w-[100%]'}
                  />
                </div>
              </form>
              
                <ReCAPTCHA
                  sitekey={sideKey}
                  onChange={(token) => {
                    setToken(token)
                  }}
                  className="flex justify-center bg-secondary-cont rounded-[16px] col-span-2"
                />
              <div className="flex justify-center col-span-2">
                <Button
                  type="button"
                  btnStyle="btn-fill"
                  btnCSS={'w-full'}
                  icon="login"
                  onClick={loginUser}
                >
                  Đăng nhập
                </Button>
              </div>
              <div className='flex flex-row my-2 items-center col-span-2 text-caption'>
                <div className='h-[2px] w-full bg-outline-var mx-6'></div>
                Hoặc
                <div className='h-[2px] w-full bg-outline-var mx-6'></div>
                
              </div>
              <div className="flex justify-center border-[2px] bg-[#fff] px-4 border-solid border-outline-var rounded-full hover:border-outline col-span-2 transition-all ease-in duration-150">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Đăng nhập bằng Google"
                  scope="https://www.googleapis.com/auth/drive.file"
                  onSuccess={onSuccess}
                  className="flex gap-[8px] !shadow-none justify-center !text-black !bg-[#fff] !rounded-full"
                />  
              </div>
              <div className="flex justify-between m-3 col-span-2 ">
                <Button
                  type="button"
                  btnStyle="btn-text"
                  btnCSS={''}
                  icon=""
                  onClick={() => {
                    navigate('/signup')
                  }}
                >
                  Tạo tài khoản
                </Button>
                <Button
                  type="button"
                  btnStyle="btn-text"
                  btnCSS={''}
                  icon=""
                  onClick={() => {
                    navigate('/enteremail')
                  }}
                >
                  Quên mật khẩu?
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Footer />
    </div>
  )
}

export default SignIn
