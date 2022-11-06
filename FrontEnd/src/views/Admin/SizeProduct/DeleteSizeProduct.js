import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const DeleteSizeProduct = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa kích cỡ</b>
            </h2>
            <div>
                <h1>Tên kích cỡ</h1>
                <input type={"text"} placeholder={"Tên kích cỡ"}/> <br/>
                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Xóa
                </a>
            </Button>
            <Button type="button">
                <a href="./SizeProducts">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default DeleteSizeProduct
