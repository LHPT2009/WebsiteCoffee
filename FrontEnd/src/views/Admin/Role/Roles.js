import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Button/Button'
import Topnav from '../../../components/Admin/topnav/TopNav'

const Roles = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [role, setRole] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/role').then((res) => {
      setRole(res.data)
    })
  }, [])
  return (
    <div>
      <Topnav />
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Loại tài khoản
      </h1>
      <Button
        btnStyle={'btn-outline'}
        btnCSS={'h-11 mb-10'}
        icon="add"
        onClick={() => {
          navigate('../addrole')
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
                  {role.map((item) => (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.rolename}</td>
                      <td style={{ minWidth: 100 }}>
                        <Button
                          btnStyle={'btn-outline'}
                          onClick={() => {
                            navigate('../editrole/' + item._id)
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

export default Roles
