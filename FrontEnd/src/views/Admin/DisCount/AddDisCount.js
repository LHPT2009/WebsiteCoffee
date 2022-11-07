import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/discount'
            const Credentials = { name, price, startDate, endDate }
            axios.post(url, Credentials)
                .then(res => {
                    const result = res.data;
                    const { status, message } = result;
                    if (status !== 'SUCCESS') {
                        alert(message, status)
                    }
                    else {
                        alert(message)
                        window.location.reload()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
    }
    
    return (
        <div>
            <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                <b>Thêm mã giảm giá</b>
            </h2>
            <div>
                <TextInput
                    placeholder={'Tên mã'}
                    type="text"
                    required={'required'}
                    onChange={(e) => setName(e.target.value)}
                    className="block w-[400px]"
                />  <br/>

                <TextInput
                    placeholder={'Giá'}
                    type="text"
                    required={'required'}
                    onChange={(e) => setPrice(e.target.value)}
                    className="block w-[400px]"
                />  <br/>

                <TextInput
                    placeholder={'Ngày bắt đầu'}
                    type="text"
                    required={'required'}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="block w-[400px]"
                />  <br/>

                <TextInput
                    placeholder={'Ngày kết thúc'}
                    type="text"
                    required={'required'}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="block w-[400px]"
                />  <br/>
            </div>
            <div>
            <Button
                type="button"
                onClick={handleSubmit}
                btnCSS={'h-[44px] mr-2'}
                icon="add"
                className="hover:text-white"
            >
                Thêm
            </Button>
            <Button type="button" btnCSS="h-11" icon="navigate_before">
                <a className="hover:text-white" href="./Discount">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddProduct
