import React, { useEffect, useState ,useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'
import { ListProductContext } from '../../context/ListProductContext'

const ItemDetail = () => {
  const { id } = useParams()
  const [info, setInfo] = useState([])
  const {addProduct} = useContext(ListProductContext);

  const add = (e) => {
    e.preventDefault();
    const id = info._id;
    const name = info.name;
    const price = info.price;
    const amount = 1;
    const product = {id,name,price,amount};
    addProduct(product);
  };
  
  axios.get(`http://localhost:8000/product/${id}`).then((res) => setInfo(res.data))

  return (
    <div>
      <Header />
        <p>{info._id}</p>
        <p>{info.name}</p>
        <p>{info.price}</p>
        <p>{info.image}</p>
        <button onClick={add}>thêm ghi chú</button>
    </div>
  )
}

export default ItemDetail
