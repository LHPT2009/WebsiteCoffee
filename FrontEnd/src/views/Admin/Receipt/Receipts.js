import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from 'react-router-dom'

import Topnav from '../../../components/Admin/topnav/TopNav'
import SearchAdmin from '../../../components/Admin/topnav/SearchAdmin'
import { CSVLink } from 'react-csv'
const Receipts = () => {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  const [receipt, setReceipt] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/receipt').then((res) => {
      setReceipt(res.data)
    })
  }, [])

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = receipt.filter((value) => {
      return value._id.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  const renderSearch = (
    <>
      {filteredData.map((item) => (
        <tr key={item._id}>
          <td>{item._id}</td>
          <td>{item.userid}</td>
          <td>{item.createdAt}</td>
          <td>{item.updatedAt}</td>
          <td>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price)}
          </td>
          <td>{item.statusdelivery}</td>
          <td style={{ minWidth: 100 }}>
            <Button
              btnStyle={'btn-outline'}
              type="button"
              btnCSS={'h-11 mr-2'}
              icon="edit"
              onClick={() => {
                navigate('../editreceipt/' + item._id)
              }}
            >
              Sửa
            </Button>
          </td>
        </tr>
      ))}
    </>
  )

  const renderReceipt = (
    <>
      {receipt.map((item) => (
        <tr key={item._id}>
          <td>{item._id}</td>
          <td>{item.userid}</td>
          <td>{item.createdAt}</td>
          <td>{item.updatedAt}</td>
          <td>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price)}
          </td>
          <td>{item.statusdelivery}</td>
          <td style={{ minWidth: 100 }}>
            <Button
              btnStyle={'btn-outline'}
              type="button"
              btnCSS={'h-11 mr-2'}
              icon="edit"
              onClick={() => {
                navigate('../editreceipt/' + item._id)
              }}
            >
              Sửa
            </Button>
          </td>
        </tr>
      ))}
    </>
  )

  return (
    <div>
      <Topnav />
      <div className="flex justify-between mb-10">
        <h1 className="font-googleSansBold uppercase text-primary text-[24px] flex items-center">
          Đơn hàng
        </h1>
        <SearchAdmin
          placeholder={'Nhập mã đơn hàng'}
          onChange={handleFilter}
          value={wordEntered}
        />
      </div>
      <CSVLink
        data={receipt.filter((rec) => rec.statuspayment == true)}
        filename="Doanh thu của quán Cafe"
      >
        Xuất file Excel
      </CSVLink>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Mã đơn</th>
                    <th>Mã tài khoản</th>
                    <th>Ngày đặt</th>
                    <th>Ngày giao hàng</th>
                    <th>Tổng tiền</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {wordEntered === '' ? renderReceipt : renderSearch}
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
