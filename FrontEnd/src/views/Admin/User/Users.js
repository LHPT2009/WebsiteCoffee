import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link, useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Users = () => {
  const navigate = useNavigate()
  const [id, setId] = useState('')
  const [user, setUser] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/user').then((res) => {
      setUser(res.data)
    })
  }, [])
  return (
    <div>
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Tài khoản
      </h1>
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
                  </tr>
                </thead>
                <tbody>
                  {user.map((item) => (
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
