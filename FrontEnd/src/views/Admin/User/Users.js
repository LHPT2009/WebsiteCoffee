import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import jwt_decode from 'jwt-decode'
import Topnav from '../../../components/Admin/topnav/TopNav'
import SearchAdmin from '../../../components/Admin/topnav/SearchAdmin'
import Pagination from '../../../components/Admin/table/Pagination'

const Users = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [user, setUser] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(3)

  const indexOfLastItem = currentPage * usersPerPage
  const indexOfFirstItem = indexOfLastItem - usersPerPage
  const currentUsers = user.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/user`).then((res) => {
      setUser(res.data)
    })
  }, [])

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = user.filter((value) => {
      return value.email.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  const renderSearch = (
    <>
      {filteredData
        .filter(
          (user) => user._id != jwt_decode(localStorage.getItem('token')).id
        )
        .map((item) => (
          <tr key={item._id}>
            <td>{item.email}</td>
            <td>{item.lastname + ' ' + item.firstname}</td>
            <td>{item.numberphone}</td>
            <td>{item.role.rolename}</td>
            <td style={{ minWidth: 100 }}>
              <Button
                btnStyle={'btn-outline'}
                onClick={() => {
                  navigate('../edituser/' + item._id)
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

  const renderUser = (
    <>
      {currentUsers
        .filter(
          (user) => user._id != jwt_decode(localStorage.getItem('token')).id
        )
        .map((item) => (
          <tr key={item._id}>
            <td>{item.email}</td>
            <td>{item.lastname + ' ' + item.firstname}</td>
            <td>{item.numberphone}</td>
            <td>{item.role.rolename}</td>
            <td style={{ minWidth: 100 }}>
              <Button
                btnStyle={'btn-outline'}
                onClick={() => {
                  navigate('../edituser/' + item._id)
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
          Tài khoản
        </h1>
        <SearchAdmin
          placeholder={'Nhập email'}
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
                    <th>Email</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Role</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>{wordEntered === '' ? renderUser : renderSearch}</tbody>
              </table>
              <Pagination
                itemsPerPage={usersPerPage}
                totalItems={user.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
