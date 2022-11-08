import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from "react-router-dom";

const AddSizeProduct = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [productid, setProductId] = useState("633f0db5ec8f7158d548cf45");


    const addSizeProduct = async (e) => {
        e.preventDefault();
        const add = await axios.post(`http://localhost:8000/sizeproduct`, { name: name, productid: productid, price: Number(price) });
        if (add) {
            navigate("/admin/sizeproducts");
        } else {
            alert(`them ko thanh cong!!!`);
        }
    }

    return (
        <div>
            <form onSubmit={addSizeProduct}>
                <h2 className="page-header">
                    <b>Thêm kích cỡ</b>
                </h2>
                <div>
                    <h1>Tên kích cỡ</h1>
                    <input type={"text"} placeholder={"Tên kích cỡ"} onChange={(e) => setName(e.target.value)} /> <br />
                    <h1>Giá</h1>
                    <input type={"text"} placeholder={"Giá"} onChange={(e) => setPrice(e.target.value)} /> <br />
                </div>
                <div>
                    <Button type="button" onClick={addSizeProduct}>
                        <a>
                            Thêm
                        </a>
                    </Button>
                    <Button type="button">
                        <a href="./SizeProducts">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddSizeProduct
