import React, {useState, useEffect} from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Staffs = () => {
    const [id,setId] = useState("");
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
            <Button type="button">
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
                            </tr>
                        </thead>
                        <tbody>
                            {staff.map((item) =>
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.number}</td>
                                    <td>{item.cardid}</td>
                                    <td>{item.positionid}</td>
                                    <td style={{ minWidth: 100 }}>
                                        <Button><Link to={'/admin/EditPosition/'}>Sửa</Link></Button>|
                                        <Button><Link to={'/admin/DeletePosition/'}>Xóa</Link></Button>|
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
