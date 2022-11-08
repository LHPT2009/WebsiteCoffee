import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteSizeProduct = () => {
    const { id } = useParams();
    const [sizeProduct, setSizeProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/sizeproduct/${id}`).then((res) => setSizeProduct(res.data));
    }, []);

    const deleteSizeProduct = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/sizeproduct/${id}`);
        if (del) {
            navigate("/admin/sizeproducts");
        } else {
            alert("Xoa khong thanh cong!")
        }
    }
    return (
        <div>
            <form onSubmit={deleteSizeProduct}>
                <h2 className="page-header">
                    <b>Xóa kích cỡ</b>
                </h2>
                <div>
                    <h1>Tên kích cỡ</h1>
                    <input type={"text"} placeholder={"Tên kích cỡ"} value={sizeProduct.name} /> <br />
                    <h1>Giá</h1>
                    <input type={"text"} placeholder={"Giá"} value={sizeProduct.price} /> <br />
                </div>
                <div>
                    <Button type="button" onClick={deleteSizeProduct}>
                        <a>
                            Xóa
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

export default DeleteSizeProduct
