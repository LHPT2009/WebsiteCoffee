import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditSupplier = () => {
    const [supplier, setSupplier] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/supplier/${id}`).then((res) => {
        setSupplier(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa nhà cung cấp</b>
            </h2>
            <div>
                <h1>Tên nhà cung cấp</h1>
                <input type={"text"} placeholder={"Tên nhà cung cấp"} defaultValue={supplier.name} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./Suppliers">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditSupplier
