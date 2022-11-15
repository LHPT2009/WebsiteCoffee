import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link, useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Rate = () => {
  const navigate = useNavigate()
  const [rate, setRate] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/rate').then((res) => {
      setRate(res.data)
    })
  }, [])
  return (
    <div>
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Đánh giá
      </h1>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Mã User</th>
                    <th>Điểm</th>
                    <th>Nội Dung</th>
                  </tr>
                </thead>
                <tbody>
                  {rate.map((item) => (
                    <tr key={item._id}>
                      <td>{item.productid}</td>
                      <td>{item.usertid}</td>
                      <td>{item.point}</td>
                      <td>{item.content}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rate
