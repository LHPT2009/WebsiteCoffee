import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import Coffee from '../../views/Collections/Coffee'
import { ListProductContext } from '../../context/ListProductContext'
import './cart.css'

const Cart = () => {
  const { products, delProduct, upAmount, downAmount } =
    useContext(ListProductContext)

  const orderList = products.map((n) => (
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
      <tbody>
        <tr key={n.id}>
          <td>{n.name}</td>
          <td>{n.price}</td>
          <td>
            <Button
              onClick={() => downAmount(n.id)}
              icon="remove-outline"
              buttonCSS="h-[20px] w-[44px]"
              children=""
            />
            <span className="mx-2">{n.amount}</span>
            <Button
              onClick={() => upAmount(n.id)}
              icon="add-outline"
              buttonCSS="h-[20px] w-[44px]"
              children=""
            />
          </td>
          <td className="lowercase">{n.price * n.amount} đ</td>
          <td>
            <Button
              onClick={() => delProduct(n.id)}
              icon="close-outline"
              buttonCSS="h-[20px] w-[44px]"
              children=""
            />
          </td>
        </tr>
      </tbody>
    </table>
  ))

  const cartEmpty = (
    <h3 className="text-center font-googleSansMedium">Giỏ hàng rỗng</h3>
  )

  return (
    <div>
      <Header />
      <div className="mt-10 mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {products.length != 0 ? orderList : cartEmpty}
      </div>
    </div>
  )
}

export default Cart
