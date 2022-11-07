import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams();
    const [disCount, setDisCount] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/discount/${id}`).then((res) => setDisCount(res.data));
    }, []);

    return (
        <div>
            <h2 className="page-header">
                <b>Xóa sản phẩm</b>
            </h2>
            <div>
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"} value={disCount.name} /> <br />
                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"} value={disCount.price} /> <br />
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"} value={disCount.startdate} /> <br />
                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"} value={disCount.enddate} /> <br />
            </div>
            <div>
                <Button type="button">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button">
                    <a href="../Products">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeleteProduct
