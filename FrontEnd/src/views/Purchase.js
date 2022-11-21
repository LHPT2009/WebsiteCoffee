import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import axios from 'axios'
import moment from 'moment'
import Pagination from '../components/Admin/table/Pagination'

import Rating from '@mui/material/Rating'
import Button from '../components/Button/Button'
import logo from '../assets/images/logo_2.png'
import RatingProduct from '../components/Item/RatingProduct'

const Purchase = () => {
  const [receipt, setReceipt] = useState([])
  const [rate, setRate] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [purchasesPerPage] = useState(3)

  const indexOfLastItem = currentPage * purchasesPerPage
  const indexOfFirstItem = indexOfLastItem - purchasesPerPage
  const currentPurchases = receipt.slice(indexOfFirstItem, indexOfLastItem)
  const reversePurchases = receipt.reverse(receipt.createdAt)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios
      .post('http://localhost:8000/receipt/userid', {
        userid: localStorage.getItem('token')
          ? jwt_decode(localStorage.getItem('token')).id
          : '',
      })
      .then((res) => {
        setReceipt(res.data)
      })
  }, [])

  const renderPurchase = (
    <>
      <div className="text-center uppercase text-[32px] font-googleSansBold text-primary mt-5 mb-5">
        Lịch sử mua hàng
      </div>
      <div className="text-center uppercase text-[16px] font-googleSansRegular mb-5">
        (Tổng cộng: {receipt.length} đơn hàng)
      </div>
      {currentPurchases
        .map((item) => (
          <div className="mb-3">
            <div className="flex items-center justify-between p-4 bg-s5 text-[16px] font-semibold rounded-t-3xl border-[2px] border-b-0 border-solid border-s5">
              <div>Mã đơn: {item._id}</div>
              <div
                className={`px-4 py-2 rounded-full ${
                  item.statusdelivery === true
                    ? 'bg-tertiary-cont'
                    : 'bg-[#eb5353] text-white'
                }`}
              >
                {item.statusdelivery === true
                  ? 'Hoàn thành'
                  : 'Chưa hoàn thành'}
              </div>
            </div>
            <div className="border-[2px] rounded-b-3xl border-solid border-s5 border-t-0">
              <div className="p-3 hover:bg-s1">
                <div className="p-2">
                  Ngày đặt hàng: {moment(item.createdAt).format('DD.MM.YYYY')}
                </div>
                <div className="p-2">
                  Tổng tiền:{' '}
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                  }).format(item.price)}
                </div>
              </div>
              <h4 className="my-3 text-t1">Đánh giá sản phẩm</h4>
              <RatingProduct receiptid={item._id} />
            </div>
          </div>
        ))
        .sort(receipt.createdAt)}
      <Pagination
        itemsPerPage={purchasesPerPage}
        totalItems={receipt.length}
        paginate={paginate}
      />
    </>
  )

  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="my-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {renderPurchase}
      </div>
      <Footer />
    </div>
  )
}

export default Purchase
