import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditSizeProduct = () => {
    const [sizeProduct, setSizeProduct] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/sizeproduct/${id}`).then((res) => {
        setSizeProduct(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa kích cỡ</b>
            </h2>
            <div>
                <h1>Tên kích cỡ</h1>
                <input type={"text"} placeholder={"Tên kích cỡ"} defaultValue={sizeProduct.name} /> <br />
                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"} defaultValue={sizeProduct.price} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./SizeProducts">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditSizeProduct
