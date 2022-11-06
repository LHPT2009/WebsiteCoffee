import React, {useState, useEffect} from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const ReceiptIngredientDetails = () => {
    const [id,setId] = useState("");
    const [receiptIngredientDetail, setReceiptIngredientDetail] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/receiptingredientdetail').then((res) => {
        setReceiptIngredientDetail(res.data)
      })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Chi tiết phiếu nhập nguyên liệu
            </h2>
            <Button type="button">
                <a href="./AddReceiptIngredientDetail">
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
                                <th>Mã phiếu</th>
                                <th>Mã nhà cung cấp</th>
                                <th>Số lượng</th>
                                <th>Đơn vị</th>
                            </tr>
                        </thead>
                        <tbody>
                            {receiptIngredientDetail.map((item) =>
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.supplierid}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.unit}</td>
                                    <td style={{ minWidth: 100 }}>
                                        <Button><Link to={'/admin/EditReceiptIngredientDetail/'}>Sửa</Link></Button>|
                                        <Button><Link to={'/admin/DeleteReceiptIngredientDetail/'}>Xóa</Link></Button>|
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

export default ReceiptIngredientDetails
