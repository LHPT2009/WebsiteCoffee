import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Receipts = () => {
  const [id, setId] = useState('')
  const [receipt, setReceipt] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/receipt').then((res) => {
      setReceipt(res.data)
    })
  }, [])
  return (
    <div>
      <h2 className="page-header">Hóa đơn</h2>
      <Button type="button">
        <a href="./AddReceipt">Thêm hóa đơn</a>
      </Button>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Mã hóa đơn</th>
                    <th>Mã tài khoản</th>
                    <th>Tổng tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {receipt.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.userid}</td>
                      <td>{item.price}</td>
                      <td style={{ minWidth: 100 }}>
                        <Button>
                          <Link to={'/admin/editreceipt/'}>Sửa</Link>
                        </Button>
                        |
                        <Button>
                          <Link to={'/admin/deletereceipt/'}>Xóa</Link>
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

export default Receipts
