import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

const EditReceipt = () => {
  const { id } = useParams()
  const [receipt, setReceipt] = useState([])
  const [receiptdetail, setReceiptDetail] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8000/receipt/${id}`)
      .then((res) => setReceipt(res.data))
  }, [])
  useEffect(() => {
    axios
      .get(`http://localhost:8000/receipt/detail/${id}`)
      .then((res) => setReceiptDetail(res.data))
  }, [])

  return (
    <div>
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Chỉnh sửa
      </h1>
      <div>
        <h1>Mã tài khoản</h1>
        <input
          type={'text'}
          placeholder={'Mã tài khoản'}
          defaultValue={receipt.userid}
        />{' '}
        <br />
        <h1>Tổng tiền</h1>
        <input
          type={'text'}
          placeholder={'Tổng tiền'}
          defaultValue={receipt.price}
        />{' '}
        <br />
        <h1>Trạng thái thanh toán</h1>
        <input
          type={'boolean'}
          placeholder={'Trạng thái thanh toán'}
          defaultValue={receipt.statuspayment}
        />{' '}
        <br />
        <h1>Trạng thái giao hàng</h1>
        <input
          type={'boolean'}
          placeholder={'Trạng thái giao hàng'}
          defaultValue={receipt.statusdelivery}
        />{' '}
        <br />
        <h1>Chi tiết đặt hàng</h1>
        {receiptdetail.map((item) => (
          <ul>
            <li><p>{item.productid.name}</p></li>
            <li><p>{item.amount}</p></li>
          </ul>
        ))}
        <br />
      </div>
      <div>
        <Button type="button">
          <a>Sửa</a>
        </Button>
        <Button type="button">
          <a href="./Receipts">Quay về</a>
        </Button>
      </div>
    </div>
  )
}

export default EditReceipt
