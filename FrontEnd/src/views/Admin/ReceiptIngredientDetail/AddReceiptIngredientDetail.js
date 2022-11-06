import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddReceiptIngredientDetail = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm chi tiết phiếu nhập nguyên liệu</b>
            </h2>
            <div>
             <h1>Mã phiếu</h1>
                <input type={"text"} placeholder={"Mã phiếu"}/> <br/>
                <h1>Mã nhà cung cấp</h1>
                <input type={"text"} placeholder={"Mã nhà cung cấp"}/> <br/>
                <h1>Số lượng</h1>
                <input type={"text"} placeholder={"Số lượng"}/> <br/>
                <h1>Đơn vị</h1>
                <input type={"text"} placeholder={"Đơn vị"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button">
                <a href="./ReceiptIngredientDetails">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddReceiptIngredientDetail
