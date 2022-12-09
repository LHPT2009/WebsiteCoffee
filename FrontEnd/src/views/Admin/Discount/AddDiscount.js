import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import TextInput from '../../../components/Input/TextInput'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'
const AddDisCount = () => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [startdate, setStartDate] = useState('')
  const [enddate, setEndDate] = useState('')
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

  const addProduct = async (e) => {
    e.preventDefault()
    const add = await axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/discount`, {
      name,
      price,
      startdate,
      enddate,
    })
    if (add) {
      Toast.fire({
        icon: 'success',
        title: 'Thêm thành công!'
      })
    navigate('/admin/discount')
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
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Thêm mã giảm giá</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên mã</div>
          <TextInput
            placeholder={'Tên mã'}
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
          <div className="inline-block w-[200px] mx-3">đ</div>
          <br />
          <div className="inline-block w-[200px] mr-3">Ngày bắt đầu</div>
          <TextInput
            placeholder={'Ngày bắt đầu'}
            type="date"
            required={'required'}
            onChange={(e) => setStartDate(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Ngày kết thúc</div>
          <TextInput
            placeholder={'Ngày kết thúc'}
            type="date"
            required={'required'}
            onChange={(e) => setEndDate(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            icon="add"
            onClick={addProduct}
            className="hover:text-white"
          >
            Thêm
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../discount')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddDisCount
