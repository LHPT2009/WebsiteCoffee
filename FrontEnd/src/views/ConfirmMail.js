import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { Link, useLocation } from "react-router-dom";

const ConfirmMail = () => {
  const search = useLocation().search;
  const confirm = new URLSearchParams(search).get('confirm');
  const userid = jwt_decode(confirm).id
  axios.get(`http://localhost:8000/auth/confirm/${userid}`)
  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <div className="text-center text-[100px] font-bold">Cảm ơn bạn đã xác nhận mail của mình!</div>
        <div className="text-center text-[10px] font-bold">{userid}</div>
        <Link to={"/signin"}>Đăng nhập</Link>
      </div>
      <Footer />
    </div>
  )
}

export default ConfirmMail
