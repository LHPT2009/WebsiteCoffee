import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'

const AddSizeProduct = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)

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

  const addSizeProduct = async (e) => {
    e.preventDefault()
    const add = await axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/sizeproduct`, {
      name,
      price,
    })
    if (add) {
      Toast.fire({
        icon: 'success',
        title: 'Thêm thành công!'
      })
      navigate('/admin/sizeproducts')
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
      <form onSubmit={addSizeProduct}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Thêm kích cỡ</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên kích cỡ</div>
          <TextInput
            placeholder={'Tên kích cỡ'}
            type="text"
            required={'required'}
            onChange={(e) => setName(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Giá</div>
          <TextInput
            placeholder={'Giá'}
            type="text"
            required={'required'}
            onChange={(e) => setPrice(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            icon="add"
            onClick={addSizeProduct}
            className="hover:text-white"
          >
            Thêm
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            className="hover:text-white"
            onClick={() => {
              navigate('../sizeproducts')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddSizeProduct
