import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import TextInput from '../../../components/Input/TextInput';

const DeleteSizeProduct = () => {
    const { id } = useParams();
    const [sizeProduct, setSizeProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/sizeproduct/${id}`).then((res) => setSizeProduct(res.data));
    }, []);

    const deleteSizeProduct = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/sizeproduct/${id}`);
        if (del) {
            navigate("/admin/sizeproducts");
        } else {
            alert("Xoa khong thanh cong!")
        }
    }
    return (
        <div>
            <form onSubmit={deleteSizeProduct}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Xóa kích cỡ</b>
                </h2>
                <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn xóa kích cỡ này không?</h1>
                <div>
                    <div className="inline-block w-[200px] mr-3">Tên kích cỡ</div>
                    <TextInput
                        placeholder={'Tên kích cỡ'}
                        type="text"
                        defaultValue={sizeProduct.name}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Giá</div>
                    <TextInput
                        placeholder={'Giá'}
                        type="text"
                        defaultValue={sizeProduct.price}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div className="mt-5">
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete" onClick={deleteSizeProduct}>
                        <a>
                            Xóa
                        </a>
                    </Button>
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="navigate_before">
                        <a className="hover:text-white" href="../SizeProducts">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteSizeProduct
