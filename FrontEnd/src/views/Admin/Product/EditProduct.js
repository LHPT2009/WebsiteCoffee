import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import { useParams } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../../components/Admin/topnav/TopNav'

const EditProduct = () => {
  const navigate = useNavigate()
  const [dataProduct, setDataProduct] = useState([])
  const [categoryproduct, setCategoryProduct] = useState([])

  const [categoryproductid, setCategoryProductId] = useState(
    dataProduct.categoryproductid
  )
  const [name, setName] = useState(dataProduct.name)
  const [price, setPrice] = useState(dataProduct.price)
  const [image, setImage] = useState(dataProduct.image)
  const [image2, setImage2] = useState()
  const [changpicture, setChangPicture] = useState(0)
  const [describe, setDescribe] = useState(dataProduct.describe)
  const [status, setStatus] = useState(dataProduct.status)

  const { id } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
      setDataProduct(res.data)
      setCategoryProductId(res.data.categoryproductid._id)
      setStatus(res.data.status)
      setImage(
        `data:image/png;base64,${btoa(
          String.fromCharCode(...new Uint8Array(res.data.image.data.data))
        )}`
      )
    })
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:8000/category`).then((res) => {
      setCategoryProduct(res.data)
    })
  }, [])

  const editProduct = async (e) => {
    e.preventDefault()
    const edit = await axios.put(
      `http://localhost:8000/product/${id}`,
      {
        categoryproductid: categoryproductid,
        name: name,
        price: price,
        image: image2,
        describe: describe,
        status: status,
        changpicture: changpicture,
      },
      { headers: { 'content-type': 'multipart/form-data' } }
    )
    if (edit) {
      navigate('/admin/products')
    } else {
      alert(`Sửa ko thanh cong!!!`)
    }
  }

  return (
    <div>
      <Topnav />
      <form onSubmit={editProduct}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Chỉnh sửa sản phẩm
        </h1>
        <div>
          <div className="inline-block w-[200px] mr-3">Loại sản phẩm</div>
          <select
            className="border-outline-var border-[2px] border-solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-100 w-[400px]"
            onChange={(e) => setCategoryProductId(e.target.value)}
            value={categoryproductid}
          >
            {categoryproduct.map((item) => (
              <option value={item._id}>{item.name}</option>
            ))}
          </select>
          <br />
          <div className="inline-block w-[200px] mr-3">Tên sản phẩm</div>
          <TextInput
            placeholder={'Tên sản phẩm'}
            type="text"
            required={'required'}
            onChange={(e) => setName(e.target.value)}
            defaultValue={dataProduct.name}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Giá</div>
          <TextInput
            placeholder={'Giá'}
            type="text"
            required={'required'}
            onChange={(e) => setPrice(e.target.value)}
            defaultValue={dataProduct.price}
            className="inline-block w-[400px]"
          />
          <div className="inline-block w-[200px] mx-3">đ</div>
          <br />
          <div className="flex">
            <div className="inline-block w-[200px] mr-3">Hình ảnh</div>
            <div className="my-3">
              {image2 ? (
                <div>
                  <img
                    className="rounded-3xl"
                    src={URL.createObjectURL(image2)}
                    width="250"
                  />
                  <br />
                </div>
              ) : (
                <div>
                  <img className="rounded-3xl" src={image} width="250" />
                  <br />
                </div>
              )}
              <input
                type="file"
                id="file"
                accept=".png"
                onChange={(e) => {
                  setImage2(e.target.files[0])
                  setChangPicture(1)
                }}
              />
            </div>
          </div>
          <br />
          <div className="inline-block w-[200px] mr-3">Nội dung</div>
          <TextInput
            placeholder={'Nội dung'}
            type="text"
            required={'required'}
            onChange={(e) => setDescribe(e.target.value)}
            defaultValue={dataProduct.describe}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Trạng thái</div>
          <select
            className="border-outline-var border-[2px] border-solid w-[400px] rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
          hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-300"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="true">Đang kinh doanh</option>
            <option value="false">Dừng kinh doanh</option>
          </select>
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            btnCSS={'h-[44px] mr-2'}
            icon="edit"
            onClick={editProduct}
          >
            Sửa
          </Button>
          <Button
            type="button"
            btnCSS={'h-[44px]'}
            icon="navigate_before"
            onClick={() => {
              navigate('../Products')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditProduct
