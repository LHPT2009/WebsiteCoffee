import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [productid, setProductid] = useState("");
    const navigate = useNavigate();

    const addProduct = async (e) => {
        e.preventDefault();
        const add = await axios.post(`http://localhost:8000/product`, { productid, name, price });
        if (add) {
            navigate("/admin/products");
        } else {
            alert(`them ko thanh cong!!!`);
        }
    }

    return (
        <div>
            <form onSubmit={addProduct}>
                <h2 className="page-header">
                    <b>Thêm sản phẩm</b>
                </h2>
                <div>
                    <h1>Ma loai san pham</h1>
                    <input type={"text"} placeholder={"Tên sản phẩm"} onChange={(e) => setProductid(e.target.value)} /> <br />
                    <h1>Giá</h1>
                    <h1>Tên sản phẩm</h1>
                    <input type={"text"} placeholder={"Tên sản phẩm"} onChange={(e) => setName(e.target.value)} /> <br />
                    <h1>Giá</h1>
                    <input type={"text"} placeholder={"Giá"} onChange={(e) => setPrice(e.target.value)} /> <br />
                </div>
                <div>
                    <Button type="button">
                        <a onClick={addProduct}>
                            Thêm
                        </a>
                    </Button>
                    <Button type="button">
                        <a href="./Products">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct
