import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import Topnav from '../../../components/Admin/topnav/TopNav'

const SizeProducts = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [sizeProduct, setSizeProduct] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/sizeproduct`).then((res) => {
      setSizeProduct(res.data)
    })
  }, [])
  return (
    <div>
      <Topnav />
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Kích cỡ
      </h1>
      <Button
        btnStyle={'btn-outline'}
        btnCSS={'h-11 mb-10'}
        icon="add"
        onClick={() => {
          navigate('../addsizeproduct')
        }}
      >
        Thêm mới
      </Button>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Mã kích cỡ</th>
                    <th>Tên kích cỡ</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeProduct.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td>
                        {new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        }).format(item.price)}
                      </td>
                      <td style={{ minWidth: 100 }}>
                        <Button
                          btnStyle={'btn-outline'}
                          onClick={() => {
                            navigate('../editsizeproduct/' + item._id)
                          }}
                          btnCSS={'h-11 mr-2'}
                          icon="edit"
                        >
                          Sửa
                        </Button>
                      </td>
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

export default SizeProducts
