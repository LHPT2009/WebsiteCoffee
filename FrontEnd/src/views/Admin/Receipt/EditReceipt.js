import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
const EditReceipt = () => {
  const [receipt, setReceipt] = useState([]);
  const [receiptdetail, setReceiptDetail] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const [userid, setUserId] = useState(receipt.userid);
  const [price, setPrice] = useState(receipt.price);
  const [statuspayment, setStatusPayment] = useState(receipt.statuspayment);
  const [statusdelivery, setStatusDelivery] = useState(receipt.statusdelivery);

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

  const editReceipt = async (e) => {
    e.preventDefault();
    const edit = await axios.put(`http://localhost:8000/receipt/${id}`, { userid, price, statuspayment, statusdelivery });
    if (edit) {
      navigate("/admin/receipts");
    } else {
      alert("sua ko thanh cong!!!")
    }
  }
  return (
    <div>
      <form onSubmit={editReceipt}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Chỉnh sửa
        </h1>
        <div>
          <h1>Mã tài khoản</h1>
          <input
            type={'text'}
            placeholder={'Mã tài khoản'}
            defaultValue={receipt.userid}
            onChange={(e) => setUserId(e.target.value)}
          />{' '}
          <br />
          <h1>Tổng tiền</h1>
          <input
            type={'text'}
            placeholder={'Tổng tiền'}
            defaultValue={receipt.price}
            onChange={(e) => setPrice(e.target.value)}
          />{' '}
          <br />
          <h1>Trạng thái thanh toán</h1>
          <input
            type={'boolean'}
            placeholder={'Trạng thái thanh toán'}
            defaultValue={receipt.statuspayment}
            onChange={(e) => setStatusPayment(e.target.value)}
          />{' '}
          <br />
          <h1>Trạng thái giao hàng</h1>
          <input
            type={'boolean'}
            placeholder={'Trạng thái giao hàng'}
            defaultValue={receipt.statusdelivery}
            onChange={(e) => setStatusDelivery(e.target.value)}
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
          <Button type="button" onClick={editReceipt}>
            <a>Sửa</a>
          </Button>
          <Button type="button">
            <a href="./Receipts">Quay về</a>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditReceipt
