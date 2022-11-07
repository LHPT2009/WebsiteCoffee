import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [rate, setRate] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/rate/${id}`).then((res) => {
        setRate(res.data);
    });

    return (
        <div>
            <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                <b>Chỉnh sửa đánh giá</b>
            </h2>
            <div>
                <TextInput
                    placeholder={'Mã sản phẩm'}
                    type="text"
                    required={'required'}
                    onChange={""}
                    defaultValue={rate.productid}
                    className="block w-[400px]"
                />  <br />
                <TextInput
                    placeholder={'Mã user'}
                    type="text"
                    required={'required'}
                    onChange={""}
                    defaultValue={rate.usertid}
                    className="block w-[400px]"
                />  <br />
                <TextInput
                    placeholder={'Điểm'}
                    type="text"
                    required={'required'}
                    onChange={""}
                    defaultValue={rate.point}
                    className="block w-[400px]"
                />  <br />
                <TextInput
                    placeholder={'Nội dung'}
                    type="text"
                    required={'required'}
                    onChange={""}
                    defaultValue={rate.content}
                    className="block w-[400px]"
                />  <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a className="hover:text-white" onClick={""}>
                        Sửa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a className="hover:text-white" href="../Rate">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditProduct
