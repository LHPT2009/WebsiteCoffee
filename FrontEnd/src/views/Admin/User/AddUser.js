import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddUser = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm tài khoản</b>
            </h2>
            <div>
                <h1>Username</h1>
                <input type={"text"} placeholder={"Username"}/> <br/>
                <h1>Email</h1>
                <input type={"text"} placeholder={"Email"}/> <br/>
                <h1>Tên</h1>
                <input type={"text"} placeholder={"Tên"}/> <br/>
                <h1>Số điện thoại</h1>
                <input type={"text"} placeholder={"Số điện thoại"}/> <br/>
                <h1>Role</h1>
                <input type={"text"} placeholder={"Role"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button">
                <a href="./Users">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddUser