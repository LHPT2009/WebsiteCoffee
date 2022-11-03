import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Button from '../../components/Button/Button'
import { ListProductContext } from '../../context/ListProductContext'
import './cart.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products, delProduct, upAmount, downAmount } = useContext(ListProductContext)
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let ans = 0;
    products.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  });
  const addOrder = async () =>{
    const userid = "633538e7ae2e75dd12c59178";
    if(!userid){
      alert("Ban chua dang nhap, moi dang nhap!!!")
      return navigate("/cart");
    }
    const rec = await axios.post("http://localhost:8000/receipt",{userid,price,products});
    if(rec){
      alert("Thanh toan thanh cong!")
      navigate("/admin");
    }else{
      alert("Thanh toan that bai!!!")
      navigate("/admin");
    }
  }
  const orderList = products.map((n) => (
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
  ))
  const formorderList = (
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
        {orderList}
        <h1>Tồng tiền: {price}</h1>
        <Button
              onClick={addOrder}
              buttonCSS="h-[20px] w-[32px]"
            > thanh toan gio hang</Button>
      </tbody>
    </table>
  );

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
