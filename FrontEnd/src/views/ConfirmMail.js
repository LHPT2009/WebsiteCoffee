import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { Link, useLocation } from "react-router-dom";
import sendemail from '../assets/images/SendEmail.png'
import Button from '../components/Button/Button';
import { useNavigate } from 'react-router-dom'

const ConfirmMail = () => {
  const search = useLocation().search;
  const confirm = new URLSearchParams(search).get('confirm');
  const userid = jwt_decode(confirm).id
  axios.get(`http://localhost:8000/auth/confirm/${userid}`)
  const navigate = useNavigate()

  return (
    <div className="relative items-center text-center min-h-screen pb-24 lg:pb-12 bg-background">
      <Header />
      <div className="flex flex-col gap-4 items-center mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px]">
      <img
                className="w-[260px] sm:w-[320px] h-auto py-4"
                src={sendemail}
              />
        <div className="text-center text-black text-h2 sm:text-d2">Xác nhận email thành công</div>
        <Button
        type="button"
        btnStyle="btn-fill"
        btnCSS={''}
        icon="login"
        onClick={() => {
          navigate('/signin')
        }}
        >Trở về đăng nhập
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default ConfirmMail
