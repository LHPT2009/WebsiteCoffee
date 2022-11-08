import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EditProductCategory = () => {
    const [category, setCategory] = useState([]);
    const [name, setName] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    axios.get(`http://localhost:8000/category/${id}`).then((res) => {
        setCategory(res.data);
    });

    const editProductCategory = async (e) => {
        e.preventDefault();
        const edit = await axios.put(`http://localhost:8000/category/${id}`, { name });
        if (edit) {
            navigate("/admin/productcategories");
        } else {
            alert(`Sửa ko thanh cong!!!`);
        }
    };

    return (
        <div>
            <form onSubmit={editProductCategory}>
                <h2 className="page-header">
                    <b>Chỉnh sửa loại sản phẩm</b>
                </h2>
                <div>
                    <h1>Tên loại</h1>
                    <input
                        type={"text"}
                        defaultValue={category.name}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                </div>
                <div>
                    <Button type="button" onClick={editProductCategory}>
                        <a>
                            Sửa
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

export default EditProductCategory
