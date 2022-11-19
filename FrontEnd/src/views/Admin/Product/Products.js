import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { Link, useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'

import Pagination from '../../../components/Admin/table/Pagination'
import Topnav from '../../../components/Admin/topnav/TopNav'
import SearchAdmin from '../../../components/Admin/topnav/SearchAdmin'

const Products = (props) => {
  const navigate = useNavigate()
  const [RowData, SetRowData] = useState([])
  const [id, setId] = useState('')
  const [product, setProduct] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(3)

  const indexOfLastItem = currentPage * productsPerPage
  const indexOfFirstItem = indexOfLastItem - productsPerPage
  const currentProducts = product.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = product.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  const renderSearch = (
    <>
      {filteredData.map((item) => (
        <tr key={item._id}>
          <td>
            <img
              src={`data:image/png;base64,${btoa(
                String.fromCharCode(...new Uint8Array(item.image.data.data))
              )}`}
              alt="hinh san pham"
              width={60}
            ></img>
          </td>
          <td>
            {/* Dùng thẻ a để mở tab mới */}
            <a href={'/product/' + item._id} target="_blank">
              {item.name}
            </a>
          </td>
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
                navigate('../editproduct/' + item._id)
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
  const renderProduct = (
    <>
      {currentProducts.map((item) => (
        <tr key={item._id}>
          <td>
            <img
              src={`data:image/png;base64,${btoa(
                String.fromCharCode(...new Uint8Array(item.image.data.data))
              )}`}
              alt="hinh san pham"
              width={60}
            ></img>
          </td>
          <td>
            {/* Dùng thẻ a để mở tab mới */}
            <a href={'/product/' + item._id} target="_blank">
              {item.name}
            </a>
          </td>
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
                navigate('../editproduct/' + item._id)
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
          Sản phẩm
        </h1>
        <SearchAdmin
          placeholder={'Nhập tên sản phẩm'}
          onChange={handleFilter}
          value={wordEntered}
        />
      </div>

      <Button
        btnStyle={'btn-outline'}
        btnCSS={'h-11 mb-10'}
        icon="add"
        onClick={() => {
          navigate('../addproduct')
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
                    <th>Hình</th>
                    <th>Tên</th>
                    <th>Giá bán</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  {wordEntered === '' ? renderProduct : renderSearch}
                </tbody>
              </table>
              <Pagination
                itemsPerPage={productsPerPage}
                totalItems={product.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
