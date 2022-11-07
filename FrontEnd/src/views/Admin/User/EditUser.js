import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditUser = () => {
    const [user, setUser] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/user/${id}`).then((res) => {
        setUser(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa tài khoản</b>
            </h2>
            <div>
                <h1>Username</h1>
                <input type={"text"} placeholder={"Username"} defaultValue={user.username} /> <br />
                <h1>Email</h1>
                <input type={"text"} placeholder={"Email"} defaultValue={user.email} /> <br />
                <h1>Họ</h1>
                <input type={"text"} placeholder={"Tên"} defaultValue={user.lastname} /> <br />
                <h1>Tên</h1>
                <input type={"text"} placeholder={"Tên"} defaultValue={user.firstname} /> <br />
                <h1>Số điện thoại</h1>
                <input type={"text"} placeholder={"Số điện thoại"} defaultValue={user.numberphone} /> <br />
                <h1>Role</h1>
                <input type={"text"} placeholder={"Role"} defaultValue={user.role} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="./Users">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditUser
