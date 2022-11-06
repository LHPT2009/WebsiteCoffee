import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditStaff = () => {
    const [staff, setStaff] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/staff/${id}`).then((res) => {
        setStaff(res.data);
    });
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa nhân viên</b>
            </h2>
            <div>
                <h1>Họ nhân viên</h1>
                <input type={"text"} placeholder={"Họ nhân viên"} defaultValue={staff.firstname} /> <br />
                <h1>Tên lót nhân viên</h1>
                <input type={"text"} placeholder={"Tên lót nhân viên"} defaultValue={staff.middlename} /> <br />
                <h1>Tên nhân viên</h1>
                <input type={"text"} placeholder={"Tên nhân viên"} defaultValue={staff.lastname} /> <br />
                <h1>Địa chỉ</h1>
                <input type={"text"} placeholder={"Địa chỉ"} defaultValue={staff.address} /> <br />
                <h1>Số điện thoại</h1>
                <input type={"text"} placeholder={"Số điện thoại"} defaultValue={staff.number} /> <br />
                <h1>Số CCCD</h1>
                <input type={"text"} placeholder={"Số CCCD"} defaultValue={staff.cardid} /> <br />
                <h1>Chức vụ</h1>
                <input type={"text"} placeholder={"Chức vụ"} defaultValue={staff.positionid} /> <br />
            </div>
            <div>
                <Button type="button">
                    <a>
                        Sửa
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

export default EditStaff
