import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import TextInput from '../../components/Input/TextInput'

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
    <div>
      <h2 className="page-header">
        <b>Thêm sản phẩm</b>
      </h2>
      <div>
        <TextInput
          type={'text'}
          placeholder={'Tên sản phẩm'}
          required="required"
          onChange={(e) => setName(e.target.value)}
          className={'w-[512px]'}
        />
        <br />
        <div>
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
        <h1>Giá</h1>
        <input
          type={'text'}
          placeholder={'Giá'}
          required
          onChange={(e) => setPrice(e.target.value)}
        />{' '}
        <br />
      </div>
      <div>
        <Button
          onClick={handleSubmit}
          type="button"
          btnCSS={'h-[44px] mr-2'}
          icon="add"
        >
          Thêm
        </Button>
        <Link to="../products">
          <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
            Quay về
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default AddProduct
