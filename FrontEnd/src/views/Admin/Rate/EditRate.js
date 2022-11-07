import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [rate, setRate] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/rate/${id}`).then((res) => {
        setRate(res.data);
    });

    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa đánh giá</b>
            </h2>
            <div>
                <h1>Mã sản phẩm</h1>
                <input
                    type={"text"}
                    onChange={""}
                    defaultValue={rate.productid}
                /><br />
                <h1>Mã User</h1>
                <input
                    type={"text"}
                    onChange={""}
                    defaultValue={rate.usertid}
                /><br />
                <h1>Điểm</h1>
                <input
                    type={"text"}
                    onChange={""}
                    defaultValue={rate.point}
                /><br />
                <h1>Nội dung</h1>
                <input
                    type={"text"}
                    defaultValue={rate.content}
                    onChange={"(e) => setPrice(e.target.value)"}
                />
                <br />
            </div>
            <div>
                <Button type="button">
                    <a onClick={""}>
                        Sửa
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

export default EditProduct
