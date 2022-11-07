import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Products = () => {
    const [disCount, setDisCount] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/discount').then((res) => {
            setDisCount(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Mã Phiếu Giảm Giá
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Tên</th>
                                        <th>Giá</th>
                                        <th>Bắt đầu</th>
                                        <th>Kết thúc</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {disCount.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item.name}</td>
                                            <td>{item.price} đ</td>
                                            <td>{item.startdate} đ</td>
                                            <td>{item.enddate} đ</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button><Link to={`/admin/editdiscount/${item._id}`}>Sửa</Link></Button>|
                                                <Button><Link to={`/admin/deletediscount/${item._id}`}>Xóa</Link></Button>|
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
