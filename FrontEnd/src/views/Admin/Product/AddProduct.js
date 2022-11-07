import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  const [name, setName] = useState('')
  // const [amount, setAmount] = useState("");
  const [price, setPrice] = useState('')
  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'http://localhost:8000/product'
    const Credentials = { name, price, image }
    axios
      .post(url, Credentials)
      .then((res) => {
        const result = res.data
        const { status, message } = result
        if (status !== 'SUCCESS') {
          alert(message, status)
        } else {
          alert(message)
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="font-googleSansRegular">
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Thêm sản phẩm
      </h1>
      <div>
        <TextInput
          placeholder={'Tên sản phẩm'}
          type="text"
          required={'required'}
          onChange={(e) => setName(e.target.value)}
          className="block w-[400px]"
        />
        <TextInput
          placeholder={'Giá'}
          type="text"
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
      </div>
      <div className="mt-10">
        <Button
          type="button"
          onClick={handleSubmit}
          btnCSS="h-11 mr-2"
          icon="add"
        >
          Thêm
        </Button>
        <Button type="button" btnCSS="h-11" icon="navigate_before">
          <Link className="hover:text-white" to="../products">
            Quay về
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default AddProduct
