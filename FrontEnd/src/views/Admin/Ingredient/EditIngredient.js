import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditIngredient = () => {
    const [ingredient, setIngredient] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/ingredient/${id}`).then((res) => {
        setIngredient(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa nguyên liệu</b>
            </h2>
            <div>
                <h1>Tên nguyên liệu</h1>
                <input type={"text"} placeholder={"Tên nguyên liệu"} defaultValue={ingredient.name} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="add">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./Ingredients">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditIngredient
