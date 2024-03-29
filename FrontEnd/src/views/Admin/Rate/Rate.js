import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link, useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'

import Pagination from '../../../components/Admin/table/Pagination'
import Topnav from '../../../components/Admin/topnav/TopNav'
import SearchAdmin from '../../../components/Admin/topnav/SearchAdmin'

const Rate = () => {
  const navigate = useNavigate()
  const [rate, setRate] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [ratesPerPage] = useState(3)

  const indexOfLastItem = currentPage * ratesPerPage
  const indexOfFirstItem = indexOfLastItem - ratesPerPage
  const currentRates = rate.filter((rate) => rate.statusrate == true).slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/rate`).then((res) => {
      setRate(res.data)
    })
  }, [])

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = rate.filter((value) => {
      return value.content.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  const renderSearch = (
    <>
      {filteredData.map((item) => (
        <tr key={item._id}>
          <td>
            <a href={'/product/' + item.productid} target="_blank">
              {item.productid}
            </a>
          </td>
          <td>{item.userid}</td>
          <td>{item.point} ★</td>
          <td>{item.content}</td>
          <Button
            btnStyle={'btn-outline'}
            onClick={() => {
              navigate('../editrate/' + item._id)
            }}
            btnCSS={'h-11 mr-2'}
            icon="edit"
          >
            Sửa
          </Button>
        </tr>
      ))}
    </>
  )
  const renderRate = (
    <>
      {currentRates.map((item) => (
        <tr key={item._id}>
          <a href={'/product/' + item.productid} target="_blank">
            {item.productid}
          </a>
          <td>{item.userid}</td>
          <td>{item.point} ★</td>
          <td>{item.content}</td>
          <Button
            btnStyle={'btn-outline'}
            onClick={() => {
              navigate('../editrate/' + item._id)
            }}
            btnCSS={'h-11 mr-2'}
            icon="edit"
          >
            Sửa
          </Button>
        </tr>
      ))}
    </>
  )

  return (
    <div>
      <Topnav />
      <div className="flex justify-between mb-10">
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Đánh giá
        </h1>
        <SearchAdmin
          placeholder={'Nhập nội dung'}
          onChange={handleFilter}
          value={wordEntered}
        />
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>Mã user</th>
                    <th>Điểm</th>
                    <th>Nội dung</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>{wordEntered === '' ? renderRate : renderSearch}</tbody>
              </table>
              <Pagination
                itemsPerPage={ratesPerPage}
                totalItems={rate.filter((rate) => rate.statusrate == true).length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rate
