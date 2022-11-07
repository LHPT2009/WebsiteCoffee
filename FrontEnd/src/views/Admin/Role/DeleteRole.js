import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeleteRole = () => {
    const [role, setRole] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/role/${id}`).then((res) => {
        setRole(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa loại tài khoản</b>
            </h2>
            <div>
                <h1>Tên loại</h1>
                <input
                    type={"text"}
                    value={role.rolename}
                /><br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./Roles">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeleteRole
