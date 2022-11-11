import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const EditUser = () => {
    const [user, setUser] = useState([]);
    const [listrole, setListRole] = useState([]);

    const { id } = useParams();
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState(user.password);
    const [confirmemail, setConfirmemail] = useState(user.confirmemail);
    const [role, setRole] = useState(user.role);
    const [firstname, setFirstname] = useState(user.firstname);
    const [lastname, setLastname] = useState(user.lastname);
    const [numberphone, setNumberphone] = useState(user.numberphone);

    const navigate = useNavigate();
    axios.get(`http://localhost:8000/user/${id}`).then((res) => {
        setUser(res.data);
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/user/${id}`).then((res) => {
            setUser(res.data);
            setRole(res.data.role);
        });
    }, [])
    useEffect(() => {
        axios.get(`http://localhost:8000/role`).then((res) => {
            setListRole(res.data);
        })
    }, [])

    const editUser = async (e) => {
        e.preventDefault();
        const edit = await axios.put(`http://localhost:8000/user/${id}`, { username, email, password, confirmemail, role, firstname, lastname, numberphone });
        if (edit) {
            navigate("/admin/users");
        } else {
            alert("Sua ko thanh cong!!!");
        }
    }
    return (
        <div>
            <form onSubmit={editUser}>
                <h2 className="page-header">
                    <b>Chỉnh sửa tài khoản</b>
                </h2>
                <div>
                    <h1>username</h1>
                    <input type={"text"} placeholder={"Email"} defaultValue={user.username} onChange={(e) => setUsername(e.target.value)} /> <br />
                    <h1>password</h1>
                    <input type={"text"} placeholder={"Email"} defaultValue={user.password} onChange={(e) => setPassword(e.target.value)} /> <br />
                    <h1>Email</h1>
                    <input type={"text"} placeholder={"Email"} defaultValue={user.email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    <h1>Xac nhan email</h1>
                    <input type={"text"} placeholder={"Tên"} defaultValue={user.confirmemail} onChange={(e) => setConfirmemail(e.target.value)} /> <br />
                    <h1>Họ</h1>
                    <input type={"text"} placeholder={"Tên"} defaultValue={user.lastname} onChange={(e) => setLastname(e.target.value)} /> <br />
                    <h1>Tên</h1>
                    <input type={"text"} placeholder={"Tên"} defaultValue={user.firstname} onChange={(e) => setFirstname(e.target.value)} /> <br />
                    <h1>Số điện thoại</h1>
                    <input type={"text"} placeholder={"Số điện thoại"} defaultValue={user.numberphone} onChange={(e) => setNumberphone(e.target.value)} /> <br />
                    <h1>Role</h1>
                    {/* <input type={"text"} placeholder={"Role"} defaultValue={user.role} onChange={(e) => setRole(e.target.value)} /> <br /> */}
                    <select
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    >
                        {listrole.map((item) => <option value={item._id}>{item.rolename}</option>)}
                    </select>
                </div>
                <div>
                    <Button type="button" onClick={editUser}>
                        <a>
                            Sửa
                        </a>
                    </Button>
                    <Button type="button">
                        <a href="./Users">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default EditUser
