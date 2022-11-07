import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Users = () => {
    const [id, setId] = useState("");
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/user').then((res) => {
            setUser(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Tài khoản
            </h2>
            <Button type="button" icon="add" btnCSS={'h-[44px] px-6 py-3'}>
                <a href="./AddUser">
                    Thêm tài khoản
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Email</th>
                                        <th>Tên</th>
                                        <th>Số điện thoại</th>
                                        <th>Role</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {user.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item.email}</td>
                                            <td>{item.lastname + " " + item.firstname}</td>
                                            <td>{item.numberphone}</td>
                                            <td>{item.role.rolename}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button icon="edit" btnCSS={'h-[44px] px-6 py-3'}><Link to={`/admin/edituser/${item._id}`}>Sửa</Link></Button>|
                                                <Button icon="delete" btnCSS={'h-[44px] px-6 py-3'}><Link to={`/admin/DeleteUser/${item._id}`}>Xóa</Link></Button>|
                                            </td>
                                        </tr>
                                    )}
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
