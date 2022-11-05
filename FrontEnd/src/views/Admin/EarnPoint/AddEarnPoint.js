import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddEarnPoint = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm tích điểm</b>
            </h2>
            <div>
                <h1>Mã người dùng</h1>
                <input type={"text"} placeholder={"Mã người dùng"}/> <br/>
                <h1>Điểm tích lũy</h1>
                <input type={"text"} placeholder={"Điểm tích lũy"}/> <br/>
                <h1>Ngày bắt đầu</h1>
                <input type={"date"} placeholder={"Ngày bắt đầu"}/> <br/>
                <h1>Ngày kết thúc</h1>
                <input type={"date"} placeholder={"Ngày kết thúc"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button">
                <a href="./EarnPoints">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddEarnPoint
