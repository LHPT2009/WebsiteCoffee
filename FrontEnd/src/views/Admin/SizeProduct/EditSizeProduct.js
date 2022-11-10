import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EditSizeProduct = () => {
    const [sizeProduct, setSizeProduct] = useState([]);
    const [name, setName] = useState(sizeProduct.name);
    const [price, setPrice] = useState(sizeProduct.price);
    const navigate = useNavigate();


    const { id } = useParams();

    axios.get(`http://localhost:8000/sizeproduct/${id}`).then((res) => {
        setSizeProduct(res.data);
    });

    const editSizeProduct = async (e) => {
        e.preventDefault();
        const edit = await axios.patch(`http://localhost:8000/sizeproduct/${id}`, { name: name, price: price });
        if (edit) {
            navigate("/admin/sizeproducts");
        } else {
            alert("Sua ko thanh cong!!!");
        }
    }

    return (
        <div>
            <form onSubmit={editSizeProduct}>
                <h2 className="page-header">
                    <b>Chỉnh sửa kích cỡ</b>
                </h2>
                <div>
                    <h1>Tên kích cỡ</h1>
                    <input type={"text"} placeholder={"Tên kích cỡ"} defaultValue={sizeProduct.name} onChange={(e) => setName(e.target.value)} /> <br />
                    <h1>Giá</h1>
                    <input type={"number"} placeholder={"Giá"} defaultValue={sizeProduct.price} onChange={(e) => setPrice(e.target.value)} /> <br />
                </div>
                <div>
                    <Button type="button" onClick={editSizeProduct}>
                        <a>
                            Sửa
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

export default EditSizeProduct
