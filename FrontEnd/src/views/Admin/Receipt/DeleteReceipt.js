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
                <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn xóa hóa đơn này không?</h1>
                <div>
                <div className="inline-block w-[200px] mr-3">Mã tài khoản</div>
                    <TextInput
                        placeholder={'Mã tài khoản'}
                        type="text"
                        defaultValue={receipt.userid}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                <div className="inline-block w-[200px] mr-3">Tổng tiền</div>
                    <TextInput
                        placeholder={'Tổng tiền'}
                        type="text"
                        defaultValue={receipt.price}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    />
                <div className="inline-block w-[200px] mx-3">đ</div>
                    <br />
                <div className="inline-block w-[200px] mr-3">Trạng thái thanh toán</div>
                    <select disabled
                        className='border-outline-var border-style: solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
                        hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-300'
                        placeholder={'Trạng thái thanh toán'}
                        value={receipt.statuspayment}>
                        <option value="true">Đã thanh toán</option>
                        <option value="false">Chưa thanh toán</option>
                    </select>
                    <br />
                <div className="inline-block w-[200px] mr-3">Trạng thái giao hàng</div>
                    <select disabled
                    className='border-outline-var border-style: solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
                    hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-300'
                        placeholder={'Trạng thái giao hàng'}
                        value={receipt.statusdelivery}
                    >
                        <option value="true">Đã giao</option>
                        <option value="false">Chưa giao</option>
                    </select>
                    <br />
                    <h1 className="font-googleSansBold uppercase text-primary text-[16px] mb-4">Chi tiết đặt hàng</h1>
                    {receiptdetail.map((item) => (
                        <ul>
                            <li className="font-googleSansRegular text-secondary mb-5 mx-5"><p>• {item.productid.name} - Số lượng: {item.amount}</p></li>
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
