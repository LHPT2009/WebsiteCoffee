import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from "react-router-dom";

const AddRole = () => {
    const [rolename, setRoleName] = useState("")
    const navigate = useNavigate();

    const addRole = async (e) => {
        e.preventDefault();
        const add = await axios.post(`http://localhost:8000/role`, { rolename });
        if (add) {
            navigate("/admin/roles");
        } else {
            alert("them ko thanh cong!!!");
        }
    }
    return (
        <div>
            <form onSubmit={addRole}>
                <h2 className="page-header">
                    <b>Thêm loại tài khoản</b>
                </h2>
                <div>
                    <h1>Tên loại</h1>
                    <input
                        type={"text"}
                        onChange={(e) => setRoleName(e.target.value)}
                    /><br />
                </div>
                <div>
                    <Button type="button" onClick={addRole}>
                        <a>
                            Thêm
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

export default AddRole
