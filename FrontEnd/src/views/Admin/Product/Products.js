import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

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
      <h2 className="page-header">Sản phẩm</h2>
      <Button type="button">
        <Link to="/addproduct"></Link>
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
                        <Button>
                          <Link to={'/admin/EditProduct/' + item._id}>Sửa</Link>
                        </Button>
                        |
                        <Button>
                          <Link to={'/admin/DeleteProduct/' + item._id}>
                            Xóa
                          </Link>
                        </Button>
                        |
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
