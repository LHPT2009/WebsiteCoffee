import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditReceiptIngredient = () => {
    const [receiptIngredient, setReceiptIngredient] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/receiptingredient/${id}`).then((res) => {
        setReceiptIngredient(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa phiếu nhập nguyên liệu</b>
            </h2>
            <div>
                <h1>Ngày nhập</h1>
                <input type={"text"} placeholder={"Ngày nhập"} defaultValue={receiptIngredient.date} /> <br />
                <h1>Mã nhân viên</h1>
                <input type={"text"} placeholder={"Mã nhân viên"} defaultValue={receiptIngredient.staffid} /> <br />
            </div>
            <div>
                <Button type="button">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button">
                    <a href="./ReceiptIngredients">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditReceiptIngredient
