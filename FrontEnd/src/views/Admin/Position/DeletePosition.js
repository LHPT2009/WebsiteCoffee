import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeletePosition = () => {
    const [position, setPosition] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/position/${id}`).then((res) => {
        setPosition(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa chức vụ</b>
            </h2>
            <div>
                <h1>Tên chức vụ</h1>
                <input type={"text"} placeholder={"Tên chức vụ"} value={position.name} /> <br />
            </div>
            <div>
                <Button type="button">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button">
                    <a href="./Positions">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeletePosition
