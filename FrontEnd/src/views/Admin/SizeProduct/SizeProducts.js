import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const SizeProducts = () => {
    const [id, setId] = useState("");
    const [sizeProduct, setSizeProduct] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/sizeproduct').then((res) => {
            setSizeProduct(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Kích cỡ
            </h2>
            <Button type="button" icon="add" btnCSS={'h-[44px] px-6 py-3'}>
                <a href="./AddSizeProduct">
                    Thêm kích cỡ
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Mã kích cỡ</th>
                                        <th>Tên kích cỡ</th>
                                        <th>Giá</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sizeProduct.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button icon="edit" btnCSS={'h-[44px] px-6 py-3'}><Link to={`/admin/editsizeproduct/${item._id}`}>Sửa</Link></Button>|
                                                <Button icon="delete" btnCSS={'h-[44px] px-6 py-3'}><Link to={`/admin/deletesizeproduct/${item._id}`}>Xóa</Link></Button>|
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

export default SizeProducts
