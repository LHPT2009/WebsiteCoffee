import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import TextInput from '../../../components/Input/TextInput';

const DeleteUser = () => {
    const [user, setUser] = useState([]);

    const { id } = useParams();

    const navigate = useNavigate();

    axios.get(`http://localhost:8000/user/${id}`).then((res) => {
        setUser(res.data);
    });

    const deleteUser = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/user/${id}`);
        if (del) {
            navigate("/admin/users");
        } else {
            alert("Xoa khong thanh cong!")
        }
    }

    return (
        <div className="font-googleSansRegular">
            <form onSubmit={deleteUser}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Xóa tài khoản</b>
                </h2>
                <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn xóa tài khoản này không?</h1>
                <div>
                    <div className="inline-block w-[200px] mr-3">Username</div>
                    <TextInput
                        placeholder={'Username'}
                        type="text"
                        defaultValue={user.username}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Email</div>
                    <TextInput
                        placeholder={'Email'}
                        type="text"
                        defaultValue={user.email}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Tên</div>
                    <TextInput
                        placeholder={'Tên'}
                        type="text"
                        defaultValue={user.lastname + " " + user.firstname}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Số điện thoại</div>
                    <TextInput
                        placeholder={'Số điện thoại'}
                        type="text"
                        defaultValue={user.numberphone}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Role</div>
                    <TextInput
                        placeholder={'Role'}
                        type="text"
                        defaultValue={user.role}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div className="mt-5">
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete" onClick={deleteUser} className="hover:text-white">
                            Xóa
                    </Button>
                    <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                        <a className="hover:text-white" href="../Users">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteUser
