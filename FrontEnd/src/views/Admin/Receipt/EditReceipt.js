import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditReceipt = () => {
    const { id } = useParams();
    const [receipt, setReceipt] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/receipt/${id}`).then((res) => setReceipt(res.data));
    }, []);
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa hóa đơn</b>
            </h2>
            <div>
                <h1>Mã tài khoản</h1>
                <input type={"text"} placeholder={"Mã tài khoản"} defaultValue={receipt.userid} /> <br />
                <h1>Tổng tiền</h1>
                <input type={"text"} placeholder={"Tổng tiền"} defaultValue={receipt.price} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./Receipts">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditReceipt
