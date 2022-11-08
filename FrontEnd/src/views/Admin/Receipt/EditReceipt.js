import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EditReceipt = () => {
    const { id } = useParams();
    const [receipt, setReceipt] = useState([]);
    const [userid, setUserid] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/receipt/${id}`).then((res) => setReceipt(res.data));
    }, []);

    const editReceipt = async (e) => {
        e.preventDefault();
        const edit = await axios.put(`http://localhost:8000/receipt/${id}`, { userid, price })
        if (edit) {
            navigate("/admin/receipts");
        } else {
            alert("Sua khong thanh cong!")
        }
    }
    return (
        <div>
            <form onSubmit={editReceipt}>
                <h2 className="page-header">
                    <b>Chỉnh sửa hóa đơn</b>
                </h2>
                <div>
                    <h1>Mã tài khoản</h1>
                    <input type={"text"} placeholder={"Mã tài khoản"} defaultValue={receipt.userid} onChange={(e) => setUserid(e.target.value)} /> <br />
                    <h1>Tổng tiền</h1>
                    <input type={"text"} placeholder={"Tổng tiền"} defaultValue={receipt.price} onChange={(e) => setPrice(e.target.value)} /> <br />
                </div>
                <div>
                    <Button type="button" onClick={editReceipt}>
                        <a>
                            Sửa
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

export default EditReceipt
