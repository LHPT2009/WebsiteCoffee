import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeleteReceiptIngredient = () => {
    const [receiptIngredient, setReceiptIngredient] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/receiptingredient/${id}`).then((res) => {
        setReceiptIngredient(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa phiếu nhập nguyên liệu</b>
            </h2>
            <div>
                <h1>Ngày nhập</h1>
                <input type={"text"} placeholder={"Ngày nhập"} defaultValue={receiptIngredient.date} /> <br />
                <h1>Mã nhân viên</h1>
                <input type={"text"} placeholder={"Mã nhân viên"} defaultValue={receiptIngredient.staffid} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./ReceiptIngredients">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeleteReceiptIngredient
