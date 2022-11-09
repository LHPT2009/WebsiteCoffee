import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`).then((res) => setProduct(res.data));
    }, []);

    const deleteProduct = async (e) => {
        e.preventDefault();
        const del = await axios.delete(`http://localhost:8000/product/${id}`);
        if (del) {
            navigate("/admin/products");
        } else {
            alert(`xoa ko thanh cong!`);
        }
    }

    return (
        <div className="font-googleSansRegular">
            <form onSubmit={deleteProduct}>
                <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
                    <b>Xóa sản phẩm</b>
                </h2>
                <div>
                    <TextInput
                        placeholder={'Tên sản phẩm'}
                        type="text"
                        defaultValue={product.name}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <h1>Hình ảnh</h1>
                    <input
                        type="file"
                        name="myImage"
                        value={product.image}
                        readOnly
                    />
                    <TextInput
                        placeholder={'Giá'}
                        type="text"
                        defaultValue={product.price}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Noi Dung'}
                        type="text"
                        defaultValue={product.describe}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <TextInput
                        placeholder={'Trang thai'}
                        type="text"
                        defaultValue={product.status}
                        className="block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div>
                    <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete" onClick={deleteProduct}>
                        <a className="hover:text-white">
                            Xóa
                        </a>
                    </Button>
                    <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                        <a className="hover:text-white" href="../Products">
                            Quay về
                        </a>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default DeleteProduct
