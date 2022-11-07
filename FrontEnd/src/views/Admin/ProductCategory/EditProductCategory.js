import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";

const EditProductCategory = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/categoryproduct/${id}`).then((res) => {
        setCategory(res.data);
    });
    return (
        <div>
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
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
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
        </div>
    )
}

export default EditProductCategory
