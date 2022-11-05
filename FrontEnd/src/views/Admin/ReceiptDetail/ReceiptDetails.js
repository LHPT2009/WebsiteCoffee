import React, {useState, useEffect} from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const ReceiptDetails = () => {
    const [id,setId] = useState("");
    const [receiptDetail, setReceiptDetail] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/receiptdetail').then((res) => {
        setReceiptDetail(res.data)
      })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Chi tiết hóa đơn
            </h2>
            <Button type="button">
                <a href="./AddReceiptDetail">
                Thêm chi tiết
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                        <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Mã hóa đơn</th>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptDetail.map((item) =>
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.productid}</td>
                                    <td>{item.amount}</td>
                                    <td style={{ minWidth: 100 }}>
                                        <Button><Link to={'/admin/EditReceiptDetail/'}>Sửa</Link></Button>|
                                        <Button><Link to={'/admin/DeleteReceiptDetail/'}>Xóa</Link></Button>|
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

export default ReceiptDetails
