import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Staffs = () => {
    const [id, setId] = useState("");
    const [staff, setStaff] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/staff').then((res) => {
            setStaff(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Nhân viên
            </h2>
            <Button type="button" icon="add" btnCSS={'h-[44px] px-6 py-3'}>
                <a href="./AddStaff">
                    Thêm nhân viên
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Mã nhân viên</th>
                                        <th>Họ tên</th>
                                        <th>Địa chỉ</th>
                                        <th>SĐT</th>
                                        <th>Số CCCD</th>
                                        <th>Chức vụ</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {staff.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.firstname + " " + item.middlename + " " + item.lastname}</td>
                                            <td>{item.address}</td>
                                            <td>{item.number}</td>
                                            <td>{item.cardid}</td>
                                            <td>{item.positionid.name}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button icon="edit" btnCSS={'h-[44px] px-6 py-3'}><Link to={`/admin/editstaff/${item._id}`}>Sửa</Link></Button>|
                                                <Button icon="delete" btnCSS={'h-[44px] px-6 py-3'}><Link to={`/admin/deletestaff/${item._id}`}>Xóa</Link></Button>|
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

export default Staffs
