import React from 'react'
import jwt_decode from 'jwt-decode'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TextInput from '../components/Input/TextInput'
import Button from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <div className="grid lg:grid-cols-2">
          <div>
            <div>
              <div className="inline-block w-[200px] mr-3">Tên đăng nhập</div>
              <TextInput
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
            <div>
              <div className="inline-block w-[200px] mr-3">Email</div>
              <TextInput
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
            <div>
              <div className="inline-block w-[200px] mr-3">Số điện thoại</div>
              <TextInput
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
            <div>
              <div className="inline-block w-[200px] mr-3">Địa chỉ</div>
              <TextInput
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
          </div>
          <div className="mt-10">
            <Button btnCSS={'h-[44px]'} icon="logout" onClick={logout}>
              Đăng xuất
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
