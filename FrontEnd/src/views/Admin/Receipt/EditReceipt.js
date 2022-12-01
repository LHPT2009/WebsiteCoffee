import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import TextInput from '../../../components/Input/TextInput'
import Topnav from '../../../components/Admin/topnav/TopNav'

const EditReceipt = () => {
  const [receipt, setReceipt] = useState([])
  const [receiptdetail, setReceiptDetail] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  const [userid, setUserId] = useState(receipt.userid)
  const [price, setPrice] = useState(receipt.price)
  const [statuspayment, setStatusPayment] = useState(receipt.statuspayment)
  const [statusdelivery, setStatusDelivery] = useState(receipt.statusdelivery)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt/${id}`).then((res) => {
      setReceipt(res.data)
      setStatusPayment(res.data.statuspayment)
      setStatusDelivery(res.data.statusdelivery)
    })
    axios
      .get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt/detail/${id}`)
      .then((res) => setReceiptDetail(res.data))
    axios.put(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/notification/${id}`, {})
  }, [id])

  const editReceipt = async (e) => {
    e.preventDefault()
    if (statuspayment) {
      const edit = await axios.put(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt/${id}`, {
        userid,
        price,
        statuspayment,
        statusdelivery,
      })
      if (edit) {
        navigate('/admin/receipts')
      } else {
        alert('sua ko thanh cong!!!')
      }
    } else {
      alert('Không thể thay đổi trạng thái vận chuyển khi chưa được thanh toán!')
    }
  }
  return (
    <div>
      <Topnav />
      <form onSubmit={editReceipt}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Chỉnh sửa đơn hàng
        </h1>
        <div>
          <div className="inline-block w-[200px] mr-3">Mã tài khoản</div>
          <TextInput
            placeholder={'Mã tài khoản'}
            type="text"
            required={'required'}
            onChange={(e) => setUserId(e.target.value)}
            defaultValue={receipt.userid}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Tổng tiền</div>
          <TextInput
            placeholder={'Tổng tiền'}
            type="text"
            required={'required'}
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={receipt.price}
            className="inline-block w-[400px]"
          />
          <div className="inline-block w-[200px] mx-3">đ</div>
          <br />
          <div className="inline-block w-[200px] mr-3">
            Trạng thái thanh toán
          </div>
          <select
            className="border-outline-var border-style: solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
            hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-300"
            placeholder={'Trạng thái thanh toán'}
            value={statuspayment}
            onChange={(e) => setStatusPayment(e.target.value)}
          >
            <option value="true">Đã thanh toán</option>
            <option value="false">Chưa thanh toán</option>
          </select>
          <br />
          <div className="inline-block w-[200px] mr-3">
            Trạng thái giao hàng
          </div>
          <select
            className="border-outline-var border-style: solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
            hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-300"
            placeholder={'Trạng thái giao hàng'}
            value={statusdelivery}
            onChange={(e) => setStatusDelivery(e.target.value)}
          >
            <option value="true">Đã giao</option>
            <option value="false">Chưa giao</option>
          </select>
          <br />
          <h1 className="font-googleSansBold uppercase text-primary text-[16px] mb-4">
            Chi tiết đặt hàng
          </h1>
          {receiptdetail.map((item) => (
            <ul>
              <li className="mx-5 mb-5 font-googleSansRegular text-secondary">
                <p>
                  • {item.productid.name} - Số lượng: {item.amount}
                </p>
              </li>
            </ul>
          ))}
          <br />
        </div>
        <div className="flex gap-3">
          <Button type="button" icon="edit" onClick={editReceipt}>
            Sửa
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../receipts')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditReceipt
