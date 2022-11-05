import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const DeleteReceiptIngredient = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa phiếu nhập nguyên liệu</b>
            </h2>
            <div>
                <h1>Ngày nhập</h1>
                <input type={"text"} placeholder={"Ngày nhập"}/> <br/>
                <h1>Mã nhân viên</h1>
                <input type={"text"} placeholder={"Mã nhân viên"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Xóa
                </a>
            </Button>
            <Button type="button">
                <a href="./ReceiptIngredients">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default DeleteReceiptIngredient
