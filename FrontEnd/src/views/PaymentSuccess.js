import React, { useEffect, params, useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import thank from '../assets/images/Thankyou.png'
import Button from '../components/Button/Button';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const search = useLocation().search;
  const message = new URLSearchParams(search).get('message');
  const address = '';
  const numberphone = '';
  axios
  .get(
    `${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/user/${jwt_decode(localStorage.getItem('token')).id
    }`
  )
  .then((res) => {
    // setCurrUser(res.data)
    address = res.data.address;
    numberphone = res.data.numberphone;
  })
  const products = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  const userid = localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')).id : "";
  const price = new URLSearchParams(search).get('amount');
  const statuspayment = true;
  const statusdelivery = false;
  const discountid = localStorage.getItem('discount') ? (JSON.parse(localStorage.getItem('discount'))._id) : ("");
  const discountprice = localStorage.getItem('discount') ? (JSON.parse(localStorage.getItem('discount')).price) : (0);
  if (message == "Successful.") {
    if (localStorage.getItem('cart')) {
      const rec = axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt`, {
        userid,
        price,
        products,
        discountid,
        discountprice,
        statuspayment,
        statusdelivery,
        numberphone,
        address
      })
      localStorage.removeItem('cart');
      localStorage.removeItem('discount');
      navigate("/paymentsuccess");
    }
  }
  return (
    <div className="relative items-center text-center min-h-screen pb-24 lg:pb-12 bg-background">
      <Header />
      <div className="flex flex-col gap-4 items-center mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px]">
        <img
          className="w-[260px] sm:w-[320px] h-auto py-4"
          src={thank}
        />
        <div className="text-center text-black text-h2 sm:text-d2">Thanh toán thành công</div>
        <Button
          type="button"
          btnStyle="btn-fill"
          btnCSS={''}
          icon="shopping_bag"
          onClick={() => {
            navigate('/product')
          }}
        >Tiếp tục mua sắm
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default PaymentSuccess
