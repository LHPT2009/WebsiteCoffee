import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../../components/Admin/topnav/TopNav'
import SearchAdmin from '../../../components/Admin/topnav/SearchAdmin'
import { CSVLink } from 'react-csv'
import { Link } from 'react-router-dom'

import Pagination from '../../../components/Admin/table/Pagination'

const Receipts = () => {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  const [receipt, setReceipt] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [receiptsPerPage] = useState(3)

  const indexOfLastItem = currentPage * receiptsPerPage
  const indexOfFirstItem = indexOfLastItem - receiptsPerPage
  const currentReceipts = receipt.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt`).then((res) => {
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
          <td>{moment(item.createdAt).format('DD.MM.YYYY')}</td>
          <td>{moment(item.updatedAt).format('DD.MM.YYYY')}</td>
          <td>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price)}
          </td>
          <td>
            {item.statusdelivery === true ? 'Đã giao' : 'Chưa hoàn thành'}
          </td>
          <td>
            {item.statuspayment === true ? 'Đã thanh toán' : 'Chưa thanh toán'}
          </td>
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
      {currentReceipts.map((item) => (
        <tr key={item._id}>
          <td>{item._id}</td>
          <td>{item.userid._id}</td>
          <td>{moment(item.createdAt).format('DD.MM.YYYY')}</td>
          <td>{moment(item.updatedAt).format('DD.MM.YYYY')}</td>
          <td>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price)}
          </td>
          <td>
            {item.statusdelivery === true ? 'Đã giao' : 'Chưa hoàn thành'}
          </td>
          <td>
            {item.statuspayment === true ? 'Đã thanh toán' : 'Chưa thanh toán'}
          </td>
          <td style={{ minWidth: 100 }}>
            <Button
              btnStyle={'btn-outline'}
              type="button"
              btnCSS={'h-11 mr-2'}
              icon="edit"
              onClick={() => {
                navigate(`/admin/editreceipt/${item._id}`)
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
      <Button btnStyle={'btn-outline'} btnCSS={'h-11 mb-10'} icon="">
        <CSVLink
          data={receipt.filter((rec) => rec.statuspayment == true)}
          filename="Doanh thu của quán Cafe"
        >
          Xuất file Excel
        </CSVLink>
      </Button>
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
                    <th>Thanh toán</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {wordEntered === '' ? renderReceipt : renderSearch}
                </tbody>
              </table>
              <Pagination
                itemsPerPage={receiptsPerPage}
                totalItems={receipt.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receipts
