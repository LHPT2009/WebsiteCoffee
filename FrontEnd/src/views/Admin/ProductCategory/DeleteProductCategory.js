import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteProductCategory = () => {
    const [category, setCategory] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();

    axios.get(`http://localhost:8000/category/${id}`).then((res) => {
        setCategory(res.data);
    });

    const deleteProductCategory = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/category/${id}`);
        if (del) {
            navigate("/admin/productcategories");
        } else {
            alert(`xoa ko thanh cong!`);
        }
    }

    return (
        <div>
            <form onSubmit={deleteProductCategory}>
                <h2 className="page-header">
                    <b>Xóa loại sản phẩm</b>
                </h2>
                <div>
                    <h1>Tên loại</h1>
                    <input
                        type={"text"}
                        value={category.name}
                    /><br />
                </div>
                <div>
                    <Button type="button" onClick={deleteProductCategory}>
                        <a>
                            Xóa
                        </a>
                    </Button>
                    <Button type="button">
                        <a href="./ProductCategories">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteProductCategory
