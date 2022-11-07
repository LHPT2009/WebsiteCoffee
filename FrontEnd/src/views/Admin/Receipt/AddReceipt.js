import React, { useState, useEffect } from 'react'

import axios from 'axios'

import TextInput from '../../../components/Input/TextInput'

import Button from '../../../components/Button/Button'

const AddReceipt = () => {
    return (
        <div className="font-googleSansRegular">
            <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                <b>Thêm hóa đơn</b>
            </h2>
            <div>
            <TextInput
                placeholder={'Mã tài khoản'}
                type="text"
                required={'required'}
                onChange={""}
                className="block w-[400px]"
                />
            <TextInput
                placeholder={'Tổng tiền'}
                type="text"
                required={'required'}
                onChange={""}
                className="block w-[400px]"
            />
            </div>
            <div>
            <Button
                type="button"
                onClick={""}
                btnCSS={'h-[44px] mr-2'}
                icon="add"
                className="hover:text-white"
                >
                <a className="hover:text-white">
                Thêm
                </a>
            </Button>
            <Button type="button" btnCSS="h-11" icon="navigate_before">
                <a className="hover:text-white" href="./Receipts">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddReceipt
