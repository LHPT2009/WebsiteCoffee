import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteReceipt = () => {
    const { id } = useParams();
    const [receipt, setReceipt] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/receipt/${id}`).then((res) => setReceipt(res.data));
    }, []);

    const deleteReceipt = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/receipt/${id}`);
        if (del) {
            navigate("/admin/receipts");
        } else {
            alert("Xoa khong thanh cong!")
        }
    }
    return (
        <div>
            <form onSubmit={deleteReceipt}>
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
                    <Button type="button" onClick={deleteReceipt}>
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
            </form>
        </div>
    )
}

export default DeleteReceipt
