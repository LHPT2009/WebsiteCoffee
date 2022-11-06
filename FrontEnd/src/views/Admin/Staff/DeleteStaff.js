import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeleteStaff = () => {
    const [staff, setStaff] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/staff/${id}`).then((res) => {
        setStaff(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa nhân viên</b>
            </h2>
            <div>
                <h1>Họ và tên nhân viên</h1>
                <input type={"text"} placeholder={"Họ nhân viên"} value={staff.firstname + " " + staff.middlename + " " + staff.lastname} /> <br />
                <h1>Địa chỉ</h1>
                <input type={"text"} placeholder={"Địa chỉ"} value={staff.address} /> <br />
                <h1>Số điện thoại</h1>
                <input type={"text"} placeholder={"Số điện thoại"} value={staff.number} /> <br />
                <h1>Số CCCD</h1>
                <input type={"text"} placeholder={"Số CCCD"} value={staff.cardid} /> <br />
                <h1>Chức vụ</h1>
                <input type={"text"} placeholder={"Chức vụ"} value={staff.positionid} /> <br />
            </div>
            <div>
                <Button type="button">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button">
                    <a href="./Staffs">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeleteStaff
