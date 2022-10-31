import React, { useState, useEffect, useContext } from "react";
import Header from '../../components/Header/Header'
import {ListProductContext} from '../../context/ListProductContext'


const Cart = () => {
  const {products,delProduct,upAmount,downAmount} = useContext(ListProductContext);
  const productList = products.map(n => 
  <p key={n.id}>
  <button onClick={() => delProduct(n.id)}>x</button>
  {n.name}-{n.price}/VNĐ-Số lượng:
  <button onClick={() => upAmount(n.id)}>+</button>
  {n.amount}
  <button onClick={() => downAmount(n.id)}>-</button>
  </p>);
  if(products.length != 0){
    return (
      <div>
        <Header/>
        <h3> Danh sách sản phẩm giỏ hàng</h3>
        {productList}
      </div>
    );
  }
  else{
    return (
      <div>
        <Header/>
        <h3> Giỏ hàng rỗng</h3>
      </div>
    );
  }
};

export default Cart