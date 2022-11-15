import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from "react-router-dom";

import TextInput from '../../../components/Input/TextInput';

const AddSizeProduct = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);


    const addSizeProduct = async (e) => {
        e.preventDefault();
        const add = await axios.post(`http://localhost:8000/sizeproduct`, { name, price });
        if (add) {
            navigate("/admin/sizeproducts");
        } else {
            alert(`them ko thanh cong!!!`);
        }
    }

    return (
        <div>
            <form onSubmit={addSizeProduct}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Thêm kích cỡ</b>
                </h2>
                <div>
                <div className="inline-block w-[200px] mr-3">Tên kích cỡ</div>
                <TextInput
                    placeholder={'Tên kích cỡ'}
                    type="text"
                    required={'required'}
                    onChange={(e) => setName(e.target.value)}
                    className="inline-block w-[400px]"
                /><br/>
                <div className="inline-block w-[200px] mr-3">Giá</div>
                <TextInput
                    placeholder={'Giá'}
                    type="text"
                    required={'required'}
                    onChange={(e) => setPrice(e.target.value)}
                    className="inline-block w-[400px]"
                /><br/>
                </div>
                <div className="mt-5">
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="add" onClick={addSizeProduct} className="hover:text-white">
                            Thêm
                    </Button>
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="navigate_before" className="hover:text-white">
                        <a className="hover:text-white" href="./SizeProducts">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddSizeProduct
