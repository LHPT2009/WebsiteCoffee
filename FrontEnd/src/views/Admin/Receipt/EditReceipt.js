import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";

const EditReceipt = () => {
    const { id } = useParams();
    const [receipt, setReceipt] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/receipt/${id}`).then((res) => setReceipt(res.data));
    }, []);
    return (
        <div className="font-googleSansRegular">
            <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                <b>Chỉnh sửa hóa đơn</b>
            </h2>
            <div>
            <TextInput
                placeholder={'Mã tài khoản'}
                type="text"
                required={'required'}
                onChange={""}
                defaultValue={receipt.userid}
                className="block w-[400px]"
            />  <br />
            <TextInput
                placeholder={'Tổng tiền'}
                type="text"
                required={'required'}
                onChange={""}
                defaultValue={receipt.price}
                className="block w-[400px]"
            />  <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a className="hover:text-white">
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a className="hover:text-white" href="../Receipts">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditReceipt
