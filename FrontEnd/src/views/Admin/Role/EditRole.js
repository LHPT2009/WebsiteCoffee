import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const EditRole = () => {
    const [role, setRole] = useState([]);
    const [rolename, setRoleName] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();


    axios.get(`http://localhost:8000/role/${id}`).then((res) => {
        setRole(res.data);
    });

    const editRole = async (e) => {
        e.preventDefault();
        const edit = await axios.put(`http://localhost:8000/role/${id}`, { rolename });
        if (edit) {
            navigate("/admin/roles");
        } else {
            alert("Sua ko thanh cong!!!");
        }
    }
    return (
        <div>
            <form onSubmit={editRole}>
                <h2 className="page-header">
                    <b>Chỉnh sửa loại tài khoản</b>
                </h2>
                <div>
                    <h1>Tên loại</h1>
                    <input
                        type={"text"}
                        defaultValue={role.rolename}
                        onChange={(e) => setRoleName(e.target.value)}
                    /><br />
                </div>
                <div>
                    <Button type="button" onClick={editRole}>
                        <a>
                            Sửa
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

export default EditRole
