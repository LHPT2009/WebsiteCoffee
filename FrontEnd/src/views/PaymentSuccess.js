import React, { useEffect, params, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const message = new URLSearchParams(search).get('message');

  const products = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const userid = localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')).id : "";
  const price = new URLSearchParams(search).get('amount');
  const statuspayment = true;
  const statusdelivery = false;
  const discountid = localStorage.getItem('discount') ? (JSON.parse(localStorage.getItem('discount'))._id) : ("");
  const discountprice = localStorage.getItem('discount') ? (JSON.parse(localStorage.getItem('discount')).price) : (0);

  if (message == "Successful.") {
    if (localStorage.getItem('cart')) {
      const rec = axios.post('http://localhost:8000/receipt', {
        userid,
        price,
        products,
        discountid,
        discountprice,
        statuspayment,
        statusdelivery,
      })
      console.log("thu danh dau", message);
      localStorage.removeItem('cart');
      localStorage.removeItem('discount');
      navigate("/paymentsuccess");
    }
  }
  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <div className="text-center text-[100px] font-bold">Thanh toán thành công!!!</div>
      </div>
      <Footer />
    </div>
  )
}

export default PaymentSuccess
