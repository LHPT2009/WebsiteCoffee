import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const EditPosition = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa chức vụ</b>
            </h2>
            <div>
                <h1>Tên chức vụ</h1>
                <input type={"text"} placeholder={"Tên chức vụ"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Sửa
                </a>
            </Button>
            <Button type="button">
                <a href="./Positions">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default EditPosition
