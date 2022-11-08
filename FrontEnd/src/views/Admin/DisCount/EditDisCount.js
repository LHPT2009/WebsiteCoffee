import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EditDisCount = () => {
    const [disCount, setDisCount] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate] = useState("");

    const navigate = useNavigate();

    const { id } = useParams();

    axios.get(`http://localhost:8000/discount/${id}`).then((res) => {
        setDisCount(res.data);
    });

    const editProduct = async (e) => {
        e.preventDefault();
        const edit = await axios.put(`http://localhost:8000/discount/${id}`, { name, price, startdate, enddate });
        if (edit) {
            navigate("/admin/discount");
        } else {
            alert("Sua ko thanh cong!!!");
        }
    }
    return (
        <div>
            <form onSubmit={editProduct}>
                <h2 className="page-header">
                    <b>Chỉnh sửa sản phẩm</b>
                </h2>
                <div>
                    <h1>Tên</h1>
                    <input
                        type={"text"}
                        onChange={(e) => setName(e.target.value)}
                        defaultValue={disCount.name}
                    /><br />


                    <h1>Giá</h1>
                    <input
                        type={"text"}
                        defaultValue={disCount.price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <br />
                    <h1>Ngày BD</h1>
                    <input
                        type={"date"}
                        onChange={(e) => setStartDate(e.target.value)}
                        defaultValue={disCount.startdate}
                    /><br />


                    <h1>Ngày KT</h1>
                    <input
                        type={"date"}
                        defaultValue={disCount.enddate}
                        onChange={(e) => setEndDate(e.target.value)}
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

export default EditDisCount
