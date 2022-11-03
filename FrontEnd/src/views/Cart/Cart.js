import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import { ListProductContext } from '../../context/ListProductContext'
import './cart.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { products, delProduct, upAmount, downAmount } =
    useContext(ListProductContext)
  const navigate = useNavigate()
  const [price, setPrice] = useState(0)

  useEffect(() => {
    let ans = 0
    products.map((item) => (ans += item.amount * item.price))
    setPrice(ans)
  })
  const addOrder = async () => {
    const userid = '633538e7ae2e75dd12c59178'
    if (!userid) {
      alert('Ban chua dang nhap, moi dang nhap!!!')
      return navigate('/cart')
    }
    const rec = await axios.post('http://localhost:8000/receipt', {
      userid,
      price,
      products,
    })
    if (rec) {
      alert('Thanh toan thanh cong!')
      navigate('/admin')
    } else {
      alert('Thanh toan that bai!!!')
      navigate('/admin')
    }
  }
  const orderList = products.map((n) => (
    <tr key={n.id}>
      <td>{n.name}</td>
      <td>{n.price}</td>
      <td>
        <Button
          onClick={() => downAmount(n.id)}
          buttonStyle="btn--primary--fill"
          icon="remove"
          buttonCSS="h-[20px] w-[44px]"
        />
        <span className="mx-2">{n.amount}</span>
        <Button
          onClick={() => upAmount(n.id)}
          buttonStyle="btn--primary--fill"
          icon="add"
          buttonCSS="h-[20px] w-[44px]"
        />
      </td>
      <td className="lowercase">{n.price * n.amount} đ</td>
      <td>
        <Button
          onClick={() => delProduct(n.id)}
          buttonStyle="btn--primary--fill"
          icon="delete"
          buttonCSS="h-[20px] w-[44px]"
          type="button"
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
      <h1>Tồng tiền: {price}</h1>
      <Button
        type="button"
        buttonStyle="btn--primary--fill"
        icon="payments"
        onClick={addOrder}
        buttonCSS={'h-[44px] px-6 py-3'}
      >
        Thanh toán
      </Button>
    </div>
  )

  const cartEmpty = (
    <h3 className="text-center font-googleSansMedium">Giỏ hàng rỗng</h3>
  )

  return (
    <div>
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {products.length != 0 ? formorderList : cartEmpty}
      </div>
    </div>
  )
}

export default Cart
