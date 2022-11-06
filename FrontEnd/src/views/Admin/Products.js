import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../components/Button/Button'

const Products = () => {
  const [RowData, SetRowData] = useState([])
  const [id, setId] = useState('')
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])
  return (
    <div>
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Sản phẩm
      </h1>
      <Button
        btnStyle={'btn-outline'}
        type="button"
        btnCSS={'h-11 mb-10'}
        icon="add"
      >
        <Link className="hover:text-white" to="../addproduct">
          Thêm mới
        </Link>
      </Button>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th></th>
                    <th>Hình</th>
                    <th>Tên</th>
                    <th>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {product.map((item) => (
                    <tr key={item._id}>
                      <td></td>
                      <td>
                        <img src={logo} alt="" width={50} height={50}></img>
                      </td>
                      <td>{item.name}</td>
                      <td>{item.price} đ</td>
                      <td style={{ minWidth: 100 }}>
                        <Button
                          btnStyle={'btn-outline'}
                          type="button"
                          btnCSS={'h-11 mr-2'}
                          icon="edit"
                        >
                          <Link
                            className="hover:text-white"
                            to={'/admin/EditProduct/' + item._id}
                          >
                            Sửa
                          </Link>
                        </Button>
                        <Button
                          btnStyle={'btn-outline'}
                          type="button"
                          btnCSS={'h-11'}
                          icon="delete"
                        >
                          <Link
                            className="hover:text-white"
                            to={'/admin/DeleteProduct/' + item._id}
                          >
                            Xóa
                          </Link>
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

export default Products
