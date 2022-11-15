import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [image, setImage] = useState();
    const [rolename, setRoleName] = useState();


    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`).then((res) => {
            setProduct(res.data);
            setImage(btoa(String.fromCharCode(...new Uint8Array(res.data.image.data.data))));
            setRoleName(res.data.categoryproductid.name);

        });
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
                <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn xóa sản phẩm này không?</h1>
                <div>
                    <div className="inline-block w-[200px] mr-3">Loại sản phẩm</div>
                    <TextInput
                        placeholder={'Tên sản phẩm'}
                        type="text"
                        defaultValue={rolename}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Tên sản phẩm</div>
                    <TextInput
                        placeholder={'Tên sản phẩm'}
                        type="text"
                        defaultValue={product.name}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Giá</div>
                    <TextInput
                        placeholder={'Giá'}
                        type="text"
                        defaultValue={product.price}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    />
                    <div className="inline-block w-[200px] mx-3">đ</div>
                    <br />
                    <div className="inline-block w-[200px] mr-3">Hình ảnh</div>
                    <img src={`data:image/png;base64,${image}`} height="250" width="250" />
                    <br />
                    <div className="inline-block w-[200px] mr-3">Nội dung</div>
                    <TextInput
                        placeholder={'Nội dung'}
                        type="text"
                        defaultValue={product.describe}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                    <div className="inline-block w-[200px] mr-3">Trạng thái</div>
                    <TextInput
                        placeholder={'Trạng thái'}
                        type="text"
                        defaultValue={product.status}
                        className="inline-block w-[400px]"
                        disabled={'disabled'}
                    /> <br />
                </div>
                <div className="mt-5">
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
