import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import TextInput from '../../../components/Input/TextInput';

import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [disCount, setDisCount] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/discount/${id}`).then((res) => {
        setDisCount(res.data);
    });

    return (
        <div>
            <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                <b>Chỉnh sửa mã giảm giá</b>
            </h2>
            <div>
            <TextInput
                placeholder={'Tên mã'}
                type="text"
                required={'required'}
                onChange={""}
                defaultValue={disCount.name}
                className="block w-[400px]"
            /> <br />

            <TextInput
                placeholder={'Giá'}
                type="text"
                required={'required'}
                onChange={""}
                defaultValue={disCount.price}
                className="block w-[400px]"
            />  <br />

            <TextInput
                placeholder={'Ngày bắt đầu'}
                type="text"
                required={'required'}
                onChange={""}
                defaultValue={disCount.startdate}
                className="block w-[400px]"
            />  <br />

            <TextInput
                placeholder={'Ngày kết thúc'}
                type="text"
                required={'required'}
                onChange={""}
                defaultValue={disCount.enddate}
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
                    <a className="hover:text-white" href="../Discount">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default EditProduct
