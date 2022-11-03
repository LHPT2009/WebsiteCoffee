import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../components/Button/Button'

const EditProduct = () => {
    const [RowData, SetRowData] = useState([])
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState(null);

    const handleEdit = (e) => {
        e.preventDefault();
        const url = 'http://localhost:8000/product/${id}'
            const Credentials = { name, price, image }
            axios.put(url, Credentials)
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
                <b>Chỉnh sửa sản phẩm</b>
            </h2>
            <div>
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"} onChange={(e) => setName(e.target.value)} defaultValue={RowData.name} /> <br/>
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
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setImage(event.target.files[0]);
                    }}
                    defaultValue={RowData.image}
                />
                </div>

                <h1>Giá</h1>
                <input type={"text"} placeholder={"Giá"} onChange={(e) => setPrice(e.target.value)} defaultValue={RowData.price}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a onClick={handleEdit}>
                Sửa
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

export default EditProduct
