import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams();
    const [disCount, setDisCount] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/discount/${id}`).then((res) => setDisCount(res.data));
    }, []);

    const deleteProduct = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/discount/${id}`);
        if (del) {
            navigate("/admin/discount");
        } else {
            alert("Xoa ko thanh cong!!!");
        }
    }

    return (
        <div>
            <form onSubmit={deleteProduct}>
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
                    <Button type="button" onClick={deleteProduct}>
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
            </form>
        </div>
    )
}

export default DeleteProduct
