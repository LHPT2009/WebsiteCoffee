import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from "react-router-dom";

const AddProductCategory = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const addProductCategory = async (e) => {
        e.preventDefault();
        const add = await axios.post(`http://localhost:8000/category`, { name });
        if (add) {
            navigate("/admin/productcategories");
        } else {
            alert(`them ko thanh cong!!!`);
        }
    }
    return (
        <div>
            <form onSubmit={addProductCategory}>
                <h2 className="page-header">
                    <b>Thêm loại sản phẩm</b>
                </h2>
                <div>
                    <h1>Tên loại</h1>
                    <input
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                    /><br />
                </div>
                <div>
                    <Button type="button" onClick={addProductCategory}>
                        <a>
                            Thêm
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

export default AddProductCategory
