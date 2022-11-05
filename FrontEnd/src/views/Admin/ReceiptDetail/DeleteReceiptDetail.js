import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const DeleteReceiptDetail = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa chi tiết hóa đơn</b>
            </h2>
            <div>
                <h1>Mã hóa đơn</h1>
                <input type={"text"} placeholder={"Mã hóa đơn"}/> <br/>
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"}/> <br/>
                <h1>Số lượng</h1>
                <input type={"text"} placeholder={"Số lượng"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Xóa
                </a>
            </Button>
            <Button type="button">
                <a href="./ReceiptDetails">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default DeleteReceiptDetail
