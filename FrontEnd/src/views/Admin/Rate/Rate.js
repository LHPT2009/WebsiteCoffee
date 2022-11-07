import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Products = () => {
    const [rate, setRate] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/rate').then((res) => {
            setRate(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Đánh giá
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>

                                        <th>Mã sản phẩm</th>
                                        <th>Mã User</th>
                                        <th>Điểm</th>
                                        <th>Nôi Dung</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rate.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item.productid}</td>
                                            <td>{item.usertid}</td>
                                            <td>{item.point}</td>
                                            <td>{item.content}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button><Link to={`/admin/editrate/${item._id}`}>Sửa</Link></Button>|
                                                <Button><Link to={`/admin/deleterate/${item._id}`}>Xóa</Link></Button>|
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

export default Products
