import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

const EditDiscount = () => {
  const [disCount, setDisCount] = useState([])

  const { id } = useParams()

  axios.get(`http://localhost:8000/discount/${id}`).then((res) => {
    setDisCount(res.data)
  })

  return (
    <div>
      <h2 className="page-header">
        <b>Chỉnh sửa sản phẩm</b>
      </h2>
      <div>
        <h1>Tên</h1>
        <input type={'text'} onChange={''} defaultValue={disCount.name} />
        <br />

        <h1>Giá</h1>
        <input
          type={'text'}
          defaultValue={disCount.price}
          onChange={'(e) => setPrice(e.target.value)'}
        />
        <br />
        <h1>Ngày BD</h1>
        <input type={'text'} onChange={''} defaultValue={disCount.startdate} />
        <br />

        <h1>Ngày KT</h1>
        <input
          type={'text'}
          defaultValue={disCount.enddate}
          onChange={'(e) => setPrice(e.target.value)'}
        />
        <br />
      </div>
      <div>
        <Button type="button">
          <a onClick={''}>Sửa</a>
        </Button>
        <Button type="button">
          <a href="../Products">Quay về</a>
        </Button>
      </div>
    </div>
  )
}

export default EditDiscount
