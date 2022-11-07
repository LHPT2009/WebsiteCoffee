import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from "react-router-dom";

const EditProduct = () => {
    const [Product, setProduct] = useState([]);

    const { id } = useParams();

    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
        setProduct(res.data);
    });

    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa sản phẩm</b>
            </h2>
            <div>
                <h1>Tên sản phẩm</h1>
                <input
                    type={"text"}
                    onChange={""}
                    defaultValue={Product.name}
                /><br />
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
                    defaultValue={Product.price}
                    onChange={"(e) => setPrice(e.target.value)"}
                />
                <br />
            </div>
            <div>
                <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                    <a onClick={""}>
                        Sửa
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

export default EditProduct
