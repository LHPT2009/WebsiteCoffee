import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EditProduct = () => {
    const [Product, setProduct] = useState([]);
    const [categoryproductid, setCategoryProductId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const navigate = useNavigate();

    const { id } = useParams();

    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
        setProduct(res.data);
    });

    const editProduct = async (e) => {
        e.preventDefault();
        const edit = await axios.put(`http://localhost:8000/product/${id}`, { categoryproductid, name, price, image });
        if (edit) {
            navigate("/admin/products");
        } else {
            alert(`Sửa ko thanh cong!!!`);
        }
    };

    return (
        <div>
            <form onSubmit={editProduct}>
                <h2 className="page-header">
                    <b>Chỉnh sửa sản phẩm</b>
                </h2>
                <div>
                    <h1>Ma sản phẩm</h1>
                    <input
                        type={"text"}
                        defaultValue={Product.categoryproductid}
                        onChange={(e) => setCategoryProductId(e.target.value)}
                    /><br />
                    <h1>Tên sản phẩm</h1>
                    <input
                        type={"text"}
                        defaultValue={Product.name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                    <h1>Giá</h1>
                    <input
                        type={"text"}
                        defaultValue={Product.price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <h1>Hinh anh</h1>
                    <input
                        type={"text"}
                        defaultValue={Product.image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    <br />
                </div>
                <div>
                    <Button type="button" onClick={editProduct}>
                        <a>
                            Sửa
                        </a>
                    </Button>
                    <Button type="button">
                        <a href="../Products">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditProduct
