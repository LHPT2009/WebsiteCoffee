import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { Link, useParams } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'

const EditProduct = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  //const [image, setImage] = useState(null);
  const [dataProduct, setDataProduct] = useState([])

  const { id } = useParams()

  axios.get(`http://localhost:8000/product/${id}`).then((res) => {
    setDataProduct(res.data)
  })

  const handleEdit = (e) => {
    e.preventDefault()
    axios
      .put(`http://localhost:8000/product/${id}`, { name, price })
      .then((res) => {
        const result = res.data
        if (result) {
          alert('sửa dữ liệu thành công!')
        } else {
          alert('Dự liệu của bạn ko sửa dc!!!')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="font-googleSansRegular">
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Chỉnh sửa sản phẩm
      </h1>
      <div>
        <TextInput
          placeholder={'Tên sản phẩm'}
          type="text"
          required={'required'}
          onChange={(e) => setName(e.target.value)}
          className="block w-[400px]"
          defaultValue={dataProduct.name}
        />

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
        <TextInput
          placeholder={'Giá'}
          type="text"
          required={'required'}
          onChange={(e) => setPrice(e.target.value)}
          className="block w-[400px]"
          defaultValue={dataProduct.price}
        />
      </div>
      <div className="mt-10">
        <Button
          type="button"
          onClick={handleEdit}
          btnCSS="h-11 mr-2"
          icon="edit"
        >
          Chỉnh sửa
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

export default EditProduct
