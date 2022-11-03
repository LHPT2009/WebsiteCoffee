import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../components/Button/Button'

const DeleteProduct = () => {
    const [RowData, SetRowData] = useState([])
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const handleDelete = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/product/${id}'
            axios.delete(url)
                .then(res => {
                    const result = res.data;
                    const { status, message } = result;
                    if (status !== 'SUCCESS') {
                        alert(message, status)
                    }
                    else {
                        alert(message)
                        window.location.reload()
                    }
                })
                .catch(err => {
                    console.log(err)
                })
    }
    
    return (
        <div>
            <h2 className="page-header">
                <b>Xóa sản phẩm</b>
            </h2>
            <div>
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"} value={RowData.name} readOnly/> <br/>
                <div>
                <h1>Hình ảnh</h1>
                {image && (
                    <div>
                    <img alt="Không tìm thấy" width={"250px"} src={URL.createObjectURL(image)}/>
                    <br />
                    <Button onClick={()=>setImage(null)}>Xóa hình</Button>
                    </div>
                )}
                <input
                    type="file"
                    name="myImage"
                    value={RowData.image}
                    readOnly
                />
                </div>

                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"} value={RowData.price} readOnly /> <br/>
            </div>
            <div>
            <Button type="button">
                <a onClick={handleDelete}>
                Xóa
                </a>
            </Button>
            <Button type="button">
                <a href="../Products">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default DeleteProduct
