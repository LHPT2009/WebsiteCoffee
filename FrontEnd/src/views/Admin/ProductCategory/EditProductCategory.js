import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const EditProductCategory = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

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
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Chỉnh sửa loại sản phẩm</b>
                </h2>
                <div>
                    <TextInput
                        placeholder={'Tên loại sản phẩm'}
                        type="text"
                        required={'required'}
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={category.name}
                        className="block w-[400px]"
                    />  <br />
                </div>
                <div>
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit" onClick={editProductCategory}>
                        <a className="hover:text-white">
                            Sửa
                        </a>
                    </Button>
                    <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                        <a className="hover:text-white" href="../ProductCategories">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditProductCategory
