import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddReceipt = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm hóa đơn</b>
            </h2>
            <div>
                <h1>Mã tài khoản</h1>
                <input type={"text"} placeholder={"Mã tài khoản"}/> <br/>
                <h1>Tổng tiền</h1>
                <input type={"text"} placeholder={"Tổng tiền"}/> <br/>
            </div>
            <div>
            <Button type="button" btnCSS={'h-[44px] mr-2'} icon="add">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                <a href="./Receipts">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddReceipt
