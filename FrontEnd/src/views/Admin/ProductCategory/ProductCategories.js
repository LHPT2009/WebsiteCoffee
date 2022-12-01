import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import Topnav from '../../../components/Admin/topnav/TopNav'

const ProductCategories = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [productCategory, setProductCategory] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/category`).then((res) => {
      setProductCategory(res.data)
    })
  }, [])
  return (
    <div>
      <Topnav />
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Loại sản phẩm
      </h1>
      <Button
        btnStyle={'btn-outline'}
        btnCSS={'h-11 mb-10'}
        icon="add"
        onClick={() => {
          navigate('../addproductcategory')
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
                    <th>Mã loại</th>
                    <th>Tên loại</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {productCategory.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.name}</td>
                      <td style={{ minWidth: 100 }}>
                        <Button
                          btnStyle={'btn-outline'}
                          onClick={() => {
                            navigate('../editproductcategory/' + item._id)
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

export default ProductCategories
