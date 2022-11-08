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
                <div>
                    <TextInput
                        placeholder={'Mã sản phẩm'}
                        type="text"
                        defaultValue={rate.productid}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Mã user'}
                        type="text"
                        defaultValue={rate.usertid}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Điểm'}
                        type="text"
                        defaultValue={rate.point}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Nội dung'}
                        type="text"
                        defaultValue={rate.content}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div>
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
