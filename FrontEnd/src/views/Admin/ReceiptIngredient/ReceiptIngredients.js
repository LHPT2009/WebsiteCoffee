import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const ReceiptIngredients = () => {
    const [id, setId] = useState("");
    const [receiptIngredient, setReceiptIngredient] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/receiptingredient').then((res) => {
            setReceiptIngredient(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Phiếu nhập nguyên liệu
            </h2>
            <Button type="button">
                <a href="./AddReceiptIngredient">
                    Thêm phiếu nhập
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Mã phiếu</th>
                                        <th>Ngày nhập</th>
                                        <th>Mã NV</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {receiptIngredient.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.date}</td>
                                            <td>{item.staffid}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button><Link to={`/admin/editreceiptingredient/${item._id}`}>Sửa</Link></Button>|
                                                <Button><Link to={`/admin/Deletereceiptingredient/${item._id}`}>Xóa</Link></Button>|
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

export default ReceiptIngredients
