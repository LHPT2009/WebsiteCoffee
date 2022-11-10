import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { Link } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [categoryproductid, setCategoryProductId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [describe, setDescribe] = useState("");
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();

  const addProduct = async (e) => {
    e.preventDefault();
    const add = await axios.post(`http://localhost:8000/product`, { categoryproductid, name, price, image, describe, status });
    if (add) {
      navigate("/admin/products");
    } else {
      alert(`them ko thanh cong!!!`);
    }
  }

  return (
    <div className="font-googleSansRegular">
      <form onSubmit={addProduct}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Thêm sản phẩm
        </h1>
        <div>
          <TextInput
            placeholder={'Tên sản phẩm'}
            type="text"
            required={'required'}
            onChange={(e) => setCategoryProductId(e.target.value)}
            className="block w-[400px]"
          />
          <TextInput
            placeholder={'Tên sản phẩm'}
            type="text"
            required={'required'}
            onChange={(e) => setName(e.target.value)}
            className="block w-[400px]"
          />
          <TextInput
            placeholder={'Giá'}
            type="number"
            required={'required'}
            onChange={(e) => setPrice(e.target.value)}
            className="block w-[400px]"
          />
          <div className="mt-5">
            <h1>Hình ảnh</h1>
            {image && (
              <div>
                <img
                  alt="Không tìm thấy"
                  width={'250px'}
                  src={URL.createObjectURL(image)}
                />
                <br />
                <Button onClick={() => setImage(null)}>Xóa hình</Button>
              </div>
            )}
            <input
              type="file"
              name="myImage"
              required
              onChange={(e) => {
                console.log(e.target.files[0].value)
                setImage(e.target.files[0].value)
              }}
            />
          </div>
          <TextInput
            placeholder={'Noi Dung'}
            type="text"
            required={'required'}
            onChange={(e) => setDescribe(e.target.value)}
            className="block w-[400px]"
          />
          <TextInput
            placeholder={'Trang thai'}
            type="boolean"
            required={'required'}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-[400px]"
          />
        </div>
        <div className="mt-10">
          <Button
            type="button"
            onClick={addProduct}
            btnCSS={'h-[44px] mr-2'}
            icon="add"
            className="hover:text-white"
          >
            Thêm
          </Button>
          <Button type="button" btnCSS="h-11" icon="navigate_before">
            <Link className="hover:text-white" to="../products">
              Quay về
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
