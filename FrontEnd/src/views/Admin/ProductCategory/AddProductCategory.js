import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'

const AddProductCategory = () => {
  const [name, setName] = useState('')
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
  const addProductCategory = async (e) => {
    e.preventDefault()
    const add = await axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/category`, { name })
    if (add) {
      Toast.fire({
        icon: 'success',
        title: 'Thêm thành công!'
      })
      navigate('/admin/productcategories')
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
      <form onSubmit={addProductCategory}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Thêm loại sản phẩm
        </h1>
        <div className="inline-block w-[200px] mr-3">Tên loại</div>
        <TextInput
          type={'text'}
          className={'inline-block w-[400px]'}
          placeholder={'Tên loại'}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex gap-3 mt-5">
          <Button type="button" icon="add" onClick={addProductCategory}>
            Thêm
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => navigate('../productcategories')}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddProductCategory
