import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeleteReceipt = () => {
    const { id } = useParams();
    const [receipt, setReceipt] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/receipt/${id}`).then((res) => setReceipt(res.data));
    }, []);
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa hóa đơn</b>
            </h2>
            <div>
                <h1>Mã tài khoản</h1>
                <input type={"text"} placeholder={"Mã tài khoản"} value={receipt.userid} /> <br />
                <h1>Tổng tiền</h1>
                <input type={"text"} placeholder={"Tổng tiền"} value={receipt.price} /> <br />
            </div>
            <div>
                <Button type="button">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button">
                    <a href="./Receipts">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeleteReceipt
