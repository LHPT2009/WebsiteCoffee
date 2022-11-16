import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import TextInput from '../../components/Input/TextInput'
import { ListProductContext } from '../../context/ListProductContext'
import './cart.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

const Cart = () => {
  const { products, delProduct, upAmount, downAmount, clearCart } =
    useContext(ListProductContext)
  const navigate = useNavigate()
  const [price, setPrice] = useState(0)
  const [userid, setUserId] = useState('')
  const [namediscount, setNameDisCount] = useState('')
  const [discountid, setDisCountId] = useState('')
  const [discountprice, setDiscountPrice] = useState(0)
  const [statuspayment, setStatusPayment] = useState(false)
  const [statusdelivery, setStatusDelivery] = useState(false)
  useEffect(() => {
    setUserId(
      localStorage.getItem('token')
        ? jwt_decode(localStorage.getItem('token')).id
        : ``
    )
  }, [])
  useEffect(() => {
    let ans = 0
    products.map((item) => (ans += item.amount * item.price))
    setPrice(ans - discountprice)
  })

  const searchdiscount = (e) => {
    e.preventDefault()
    axios
      .post(`http://localhost:8000/discount/one`, { name: namediscount })
      .then((res) => {
        setNameDisCount(res.data.name)
        setDisCountId(res.data._id)
        setDiscountPrice(res.data.price)
      })
  }

  const addOrder = async () => {
    if (!localStorage.getItem('token')) {
      alert('Ban chua dang nhap, moi dang nhap!!!')
      return navigate('/signin')
    }
    const rec = await axios.post('http://localhost:8000/receipt', {
      userid,
      price,
      products,
      discountid,
      discountprice,
      statuspayment,
      statusdelivery,
    })
    setNameDisCount('')
    setDiscountPrice(0)
    setDisCountId('')
    if (rec) {
      alert('Thanh toan thanh cong!')
      clearCart()
      navigate('/')
    } else {
      alert('Thanh toan that bai!!!')
      navigate('/')
    }
  }

  const orderList = products.map((n) => (
    <tr key={n.id}>
      <td>{n.name}</td>
      {/* <td>size: {n.size}</td> */}
      <td>
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(n.price)}
      </td>
      <td>
        <div className="flex h-[47px]">
          <button onClick={() => downAmount(n.id, n.name)}>
            <span className="material-symbols-rounded">remove</span>
          </button>
          <input
            className="mx-2 rounded-full hover:text-black focus:text-black text-center w-20 h-10 bg-[transparent]"
            type="text"
            value={n.amount}
          />
          <button onClick={() => upAmount(n.id, n.name)}>
            <span className="material-symbols-rounded">add</span>
          </button>
        </div>
      </td>
      <td className="lowercase">
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(n.price * n.amount)}
      </td>
      <td>
        <Button
          onClick={() => delProduct(n.name)}
          btnStyle="btn-danger"
          icon="delete"
          type="button"
          children=""
        />
      </td>
    </tr>
  ))
  const formorderList = (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá bán</th>
            <th>Số lượng</th>
            <th>Tổng tiền (1 sản phẩm)</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>{orderList}</tbody>
      </table>
      {/* Card total - discount */}
      <div className="p-6 mt-10 rounded-3xl bg-secondary-cont text-on-secondary-cont border-outline-var">
        {/* Thêm mã giảm giá thì mới render cái này */}
        {discountprice > 0 && (
          <div className="mb-2 text-l2">
            Giảm giá:{' '}
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(discountprice)}
          </div>
        )}
        <div className="text-[18px] font-semibold">
          Tồng tiền:{' '}
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(price)}
        </div>
      </div>
      {/* Discount - Payment */}
      <div className="flex justify-between mt-6">
        <div className="flex">
          <div>
            <TextInput
              value={namediscount}
              placeholder="Mã giảm giá (nếu có)"
              onChange={(e) => setNameDisCount(e.target.value)}
              className="mr-3"
            />
          </div>
          <div>
            <Button btnCSS={'h-[50px]'} icon={''} onClick={searchdiscount}>
              Áp dụng
            </Button>
          </div>
          {/* <button
          onClick={() => {
            setNameDisCount('')
            setDiscountPrice(0)
            setDisCountId('')
          }}
        >
          xóa mã
        </button> */}
        </div>
        <div>
          <Button btnCSS={'h-[50px]'} icon="payments" onClick={addOrder}>
            Thanh toán
          </Button>
        </div>
      </div>
    </div>
  )

  const cartEmpty = (
    <div className="text-center font-googleSansMedium">
      <div className="flex items-center justify-center gap-3">
        <span className="material-symbols-rounded text-[32px]">
          shopping_cart
        </span>
        <span>Giỏ hàng rỗng</span>
      </div>
    </div>
  )

  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {products.length != 0 ? formorderList : cartEmpty}
      </div>
      <Footer />
    </div>
  )
}

export default Cart
