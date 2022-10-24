import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header'

const ItemDetail = () => {
  const { id } = useParams()
  const [info, setInfo] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:8000/product/${id}`)
      .then((res) => setInfo(res.data))
  }, [])

  return (
    <div>
      <Header />
      <p>{info._id}</p>
      <p>{info.name}</p>
      <p>{info.price}</p>
      <p>{info.image}</p>
    </div>
  )
}

export default ItemDetail
