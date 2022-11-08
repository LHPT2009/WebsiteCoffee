import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteRole = () => {
    const [role, setRole] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    axios.get(`http://localhost:8000/role/${id}`).then((res) => {
        setRole(res.data);
    });

    const deleteRole = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/role/${id}`);
        if (del) {
            navigate("/admin/roles");
        } else {
            alert("them ko thanh cong!!!");
        }
    }
    return (
        <div>
            <form onSubmit={deleteRole}>
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
                    <Button type="button" onClick={deleteRole}>
                        <a>
                            Xóa
                        </a>
                    </Button>
                    <Button type="button">
                        <a href="./Roles">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteRole
