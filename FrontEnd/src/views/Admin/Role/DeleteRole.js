import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import TextInput from '../../../components/Input/TextInput';

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
        <div className="font-googleSansRegular">
            <form onSubmit={deleteRole}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Xóa loại tài khoản</b>
                </h2>
                <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn loại tài khoản này không?</h1>
                <div>
                    <div className="inline-block w-[200px] mr-3">Tên loại</div>
                    <TextInput
                        placeholder={'Tên loại'}
                        type="text"
                        defaultValue={role.rolename}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div className="mt-5">
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete" onClick={deleteRole} className="hover:text-white">
                            Xóa
                    </Button>
                    <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                        <a className="hover:text-white" href="../Roles">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteRole
