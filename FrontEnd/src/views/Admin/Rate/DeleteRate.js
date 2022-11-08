import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteRate = () => {
    const [rate, setRate] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/rate/${id}`).then((res) => setRate(res.data));
    }, []);

    const deleteRate = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/rate/${id}`);
        if (del) {
            navigate("/admin/rate");
        } else {
            alert("Xoa khong thanh cong!")
        }
    }

    return (
        <div>
            <form onSubmit={deleteRate}>
                <h2 className="page-header">
                    <b>Xóa đánh Giá</b>
                </h2>
                <div>
                    <h1>Mã sản phẩm</h1>
                    <input type={"text"} placeholder={"Tên sản phẩm"} value={rate.productid} /> <br />
                    <h1>Mã User</h1>
                    <input type={"text"} placeholder={"Giá"} value={rate.usertid} /> <br />
                    <h1>Điểm</h1>
                    <input type={"text"} placeholder={"Tên sản phẩm"} value={rate.point} /> <br />
                    <h1>Nôi dung</h1>
                    <input type={"text"} placeholder={"Giá"} value={rate.content} /> <br />
                </div>
                <div>
                    <Button type="button" onClick={deleteRate}>
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

export default DeleteRate
