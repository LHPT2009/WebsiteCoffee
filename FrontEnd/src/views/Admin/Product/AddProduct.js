import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'

const AddProduct = () => {
  const [categoryproduct, setCategoryProduct] = useState([])
  const [categoryproductid, setCategoryProductId] = useState(
    '6370b175c7e4d05977ae9b7c'
  )
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState()
  const [describe, setDescribe] = useState('')
  const [status, setStatus] = useState('false')

  const navigate = useNavigate()

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/category`).then((res) => {
      setCategoryProduct(res.data)
    })
  }, [])

  const addProduct = async (e) => {
    e.preventDefault()
    const add = await axios.post(
      `${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/product`,
      { categoryproductid, name, price, image, describe, status },
      { headers: { 'content-type': 'multipart/form-data' } }
    )
    if (add) {
      Toast.fire({
        icon: 'success',
        title: 'Thêm thành công!'
      })
      navigate('/admin/products')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Thêm thất bại!',
        text: 'Vui lòng thử lại.',
        confirmButtonColor: '#3d685e'
      })
    }
  }

  return (
    <div>
      <Topnav />
      <form onSubmit={addProduct}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Thêm sản phẩm
        </h1>
        <div>
          <div className="inline-block w-[200px] mr-3">Loại sản phẩm</div>
          <select
            className="w-[400px] border-outline-var border-[2px] border-solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-100"
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
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Giá</div>
          <TextInput
            placeholder={'Giá'}
            type="number"
            required={'required'}
            onChange={(e) => setPrice(e.target.value)}
            className="inline-block w-[400px]"
          />
          <div className="inline-block w-[200px] mx-3">đ</div>
          <br />
          <div className="flex items-center">
            <div className="inline-block w-[200px] mr-3">Hình ảnh</div>
            <div className="mt-2 mb-5">
              {image && (
                <div>
                  <img
                    className="rounded-3xl"
                    alt="Không tìm thấy"
                    width={'250px'}
                    src={URL.createObjectURL(image)}
                  />
                  <br />
                </div>
              )}
              <div className="flex">
                <label htmlFor="file">File</label>
                <input
                  type="file"
                  id="file"
                  accept=".png"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
          </div>
          <div className="inline-block w-[200px] mr-3">Nội dung</div>
          <TextInput
            placeholder={'Nội dung'}
            type="text"
            required={'required'}
            onChange={(e) => setDescribe(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Trạng thái</div>
          <select
            className="w-[400px] border-outline-var border-[2px] border-solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-100"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="true">Đang kinh doanh</option>
            <option value="false">Dừng kinh doanh</option>
          </select>
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            onClick={addProduct}
            icon="add"
            className="hover:text-white"
          >
            Thêm
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../products')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
