import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const DeleteReceipt = () => {
    const { id } = useParams();
    const [receipt, setReceipt] = useState([]);
    const [receiptdetail, setReceiptDetail] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/receipt/${id}`).then((res) => setReceipt(res.data));
    }, []);
    useEffect(() => {
        axios
            .get(`http://localhost:8000/receipt/detail/${id}`)
            .then((res) => setReceiptDetail(res.data))
    }, [])
    const deleteReceipt = async () => {
        const del = await axios.delete(`http://localhost:8000/receipt/${id}`);
        if (del) {
            navigate("/admin/receipts");
        } else {
            alert("Xoa thanh thanh cong!");
        }
    }

    return (
        <div className="font-googleSansRegular">
            <form onSubmit={deleteReceipt}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Xóa hóa đơn</b>
                </h2>
                <div>
                    <TextInput
                        placeholder={'Mã tài khoản'}
                        type="text"
                        defaultValue={receipt.userid}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Tổng tiền'}
                        type="text"
                        defaultValue={receipt.price}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Trạng thái thanh toán'}
                        type="text"
                        defaultValue={receipt.statuspayment}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Trạng thái giao hàng'}
                        type="text"
                        defaultValue={receipt.statusdelivery}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <h1>Chi tiết đặt hàng</h1>
                    {receiptdetail.map((item) => (
                        <ul>
                            <li><p>{item.productid.name}</p></li>
                            <li><p>{item.amount}</p></li>
                        </ul>
                    ))}
                    <br />
                </div>
                <div>
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete" onClick={deleteReceipt}>
                        <a className="hover:text-white">
                            Xóa
                        </a>
                    </Button>
                    <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                        <a className="hover:text-white" href="../Receipts">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteReceipt
