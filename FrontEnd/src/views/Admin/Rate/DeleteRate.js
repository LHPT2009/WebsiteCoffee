import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
    const [rate, setRate] = useState([]);

    const navigate = useNavigate();

    const { id } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8000/rate/${id}`).then((res) => setRate(res.data));
    }, []);

    const deleteRate = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/rate/${id}`);
        if (del) {
            navigate("/admin/rate");
        } else {
            alert("Xoa khong thanh cong!")
        }
    }

    return (
        <div>
            <form onSubmit={deleteRate}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Xóa đánh giá</b>
                </h2>
                <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn xóa đánh giá này không?</h1>
                <div>
                    <div className="inline-block w-[200px] mr-3">Mã sản phẩm</div>
                    <TextInput
                        placeholder={'Mã sản phẩm'}
                        type="text"
                        defaultValue={rate.productid}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Mã user</div>
                    <TextInput
                        placeholder={'Mã user'}
                        type="text"
                        defaultValue={rate.usertid}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Điểm</div>
                    <TextInput
                        placeholder={'Điểm'}
                        type="text"
                        defaultValue={rate.point}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Nội dung</div>
                    <TextInput
                        placeholder={'Nội dung'}
                        type="text"
                        defaultValue={rate.content}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div className="mt-5">
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete" onClick={deleteRate}>
                        <a className="hover:text-white">
                            Xóa
                        </a>
                    </Button>
                    <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                        <a className="hover:text-white" href="../Rate">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteProduct
