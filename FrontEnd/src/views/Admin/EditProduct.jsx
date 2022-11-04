import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    //const [image, setImage] = useState(null);
    const [dataProduct, setDataProduct] = useState([]);
    
    const {id} = useParams();
    
    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
        setDataProduct(res.data);
    });
    

    const handleEdit = (e) => {
        e.preventDefault();
            axios.put(`http://localhost:8000/product/${id}`,{name,price})
                .then(res => {
                    const result = res.data;
                    if (result) {
                        alert("sửa dữ liệu thành công!")
                    }
                    else {
                        alert("Dự liệu của bạn ko sửa dc!!!")
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
                <input 
                type={"text"} 
                onChange={(e) => setName(e.target.value)}
                defaultValue={dataProduct.name}
                /><br/>
                {/* <div>
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
                </div> */}

                <h1>Giá</h1>
                <input 
                type={"text"} 
                defaultValue={dataProduct.price}
                onChange={(e) => setPrice(e.target.value)}
                />
                <br/>
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
