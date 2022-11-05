import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const EditStaff = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa nhân viên</b>
            </h2>
            <div>
                <h1>Họ nhân viên</h1>
                <input type={"text"} placeholder={"Họ nhân viên"}/> <br/>
                <h1>Tên lót nhân viên</h1>
                <input type={"text"} placeholder={"Tên lót nhân viên"}/> <br/>
                <h1>Địa chỉ</h1>
                <input type={"text"} placeholder={"Địa chỉ"}/> <br/>
                <h1>Số điện thoại</h1>
                <input type={"text"} placeholder={"Số điện thoại"}/> <br/>
                <h1>Số CCCD</h1>
                <input type={"text"} placeholder={"Số CCCD"}/> <br/>
                <h1>Chức vụ</h1>
                <input type={"text"} placeholder={"Chức vụ"}/> <br/>
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
