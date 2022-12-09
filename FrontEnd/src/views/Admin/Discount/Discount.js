import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import Topnav from '../../../components/Admin/topnav/TopNav'
import SearchAdmin from '../../../components/Admin/topnav/SearchAdmin'
import Pagination from '../../../components/Admin/table/Pagination'

const Discount = () => {
  const navigate = useNavigate()
  const [disCount, setDisCount] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [discountsPerPage] = useState(3)

  const indexOfLastItem = currentPage * discountsPerPage
  const indexOfFirstItem = indexOfLastItem - discountsPerPage
  const currentDiscounts = disCount.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/discount`).then((res) => {
      setDisCount(res.data)
    })
  }, [])

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = disCount.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  const renderSearch = (
    <>
      {filteredData.map((item) => (
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price)}
          </td>
          <td>{item.startdate}</td>
          <td>{item.enddate}</td>
          <td style={{ minWidth: 100 }}>
            <Button
              btnStyle={'btn-outline'}
              onClick={() => {
                navigate('../editdiscount/' + item._id)
              }}
              btnCSS={'h-11 mr-2'}
              icon="edit"
            >
              Sửa
            </Button>
          </td>
        </tr>
      ))}
    </>
  )
  const renderDiscount = (
    <>
      {currentDiscounts.map((item) => (
        <tr key={item._id}>
          <td>{item.name}</td>
          <td>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(item.price)}
          </td>
          <td>{item.startdate}</td>
          <td>{item.enddate}</td>
          <td style={{ minWidth: 100 }}>
            <Button
              btnStyle={'btn-outline'}
              onClick={() => {
                navigate('../editdiscount/' + item._id)
              }}
              btnCSS={'h-11 mr-2'}
              icon="edit"
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
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Giảm giá
        </h1>
        <SearchAdmin
          placeholder={'Nhập tên mã'}
          onChange={handleFilter}
          value={wordEntered}
        />
      </div>

      <Button
        btnStyle={'btn-outline'}
        btnCSS={'h-11 mb-10'}
        icon="add"
        onClick={() => {
          navigate('../adddiscount')
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
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Bắt đầu</th>
                    <th>Kết thúc</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {wordEntered === '' ? renderDiscount : renderSearch}
                </tbody>
              </table>
              <Pagination
                itemsPerPage={discountsPerPage}
                totalItems={disCount.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
