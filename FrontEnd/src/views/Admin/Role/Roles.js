import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Roles = () => {
    const [id, setId] = useState("");
    const [role, setRole] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/role').then((res) => {
            setRole(res.data)
        })
    }, [])
    return (
        <div className="font-googleSansRegular">
            <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                Loại tài khoản
            </h2>
            <Button
                btnStyle={'btn-outline'}
                type="button"
                btnCSS={'h-11 mb-10'}
                icon="add"
            >
                <a href="./AddRole">
                    Thêm loại tài khoản
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Mã loại</th>
                                        <th>Tên loại</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {role.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.rolename}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button icon="edit" btnCSS={'h-11 mr-2'}><Link className="hover:text-white" to={`/admin/editrole/${item._id}`}>Sửa</Link></Button>|
                                                <Button icon="delete" btnCSS={'h-11'}><Link className="hover:text-white" to={`/admin/deleterole/${item._id}`}>Xóa</Link></Button>|
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

export default Roles
