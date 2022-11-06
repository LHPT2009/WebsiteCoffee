import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const EarnPoints = () => {
    const [id, setId] = useState("");
    const [earnPoint, setEarnPoint] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/earnpoints').then((res) => {
            setEarnPoint(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Tích điểm
            </h2>
            <Button type="button">
                <a href="./AddEarnPoint">
                    Thêm tích điểm
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Mã tích điểm</th>
                                        <th>Mã người dùng</th>
                                        <th>Điểm tích lũy</th>
                                        <th>Ngày bắt đầu</th>
                                        <th>Ngày kết thúc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {earnPoint.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.userid}</td>
                                            <td>{item.point}</td>
                                            <td>{item.startdate}</td>
                                            <td>{item.finaldate}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button><Link to={`/admin/editearnpoint/${item._id}`}>Sửa</Link></Button>|
                                                <Button><Link to={`/admin/deleteearnpoint/${item._id}`}>Xóa</Link></Button>|
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

export default EarnPoints
