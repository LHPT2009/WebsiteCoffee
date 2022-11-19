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
      <div className="text-center uppercase text-[32px] font-googleSansBold text-primary mt-20">
        Tài khoản của tôi
      </div>
      <div className="fixed top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px]">
        <div className="flex items-center justify-end">
          <div className="w-[20%] text-left overflow-hidden">Tên đăng nhập</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 mb-0 hover:border-outline-var"
                disabled={'disabled'}
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-3">
          <div className="w-[20%] text-left overflow-hidden">Email</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 mb-0"
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-3">
          <div className="w-[20%] text-left overflow-hidden">Số điện thoại</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 mb-0"
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-3">
          <div className="w-[20%] text-left overflow-hidden">Địa chỉ</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 mb-0"
                defaultValue={jwt_decode(localStorage.getItem('token')).name}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button icon="" onClick={''}>
            Lưu
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
