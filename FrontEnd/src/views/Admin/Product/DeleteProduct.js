import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const DeleteProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`).then((res) => setProduct(res.data));
    }, []);

    return (
        <div>
            <h2 className="page-header">
                <b>Xóa sản phẩm</b>
            </h2>
            <div>
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"} value={product.name} /> <br />
                {/* <div>
                    <h1>Hình ảnh</h1>
                    {image && (
                        <div>
                            <img alt="Không tìm thấy" width={"250px"} />
                            <br />
                            <Button onClick={() => setImage(null)}>Xóa hình</Button>
                        </div>
                    )}
                    <input
                        type="file"
                        name="myImage"
                        value={product.image}
                        readOnly
                    />
                </div> */}
                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"} value={product.price} /> <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="delete">
                    <a>
                        Xóa
                    </a>
                </Button>
                <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                    <a href="../Products">
                        Quay về
                    </a>
                </Button>
            </div>
        </div>
    )
}

export default DeleteProduct
