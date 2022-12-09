import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import TextInput from '../../../components/Input/TextInput'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'

const EditDisCount = () => {
  const [disCount, setDisCount] = useState([])

  const [name, setName] = useState(disCount.name)
  const [price, setPrice] = useState(disCount.price)
  const [startdate, setStartDate] = useState(disCount.startdate)
  const [enddate, setEndDate] = useState(disCount.enddate)

  const navigate = useNavigate()

  const { id } = useParams()

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
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/discount/${id}`).then((res) => {
      setDisCount(res.data)
    })
  }, [])

  const editProduct = async (e) => {
    e.preventDefault()
    const edit = await axios.put(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/discount/${id}`, {
      name,
      price,
      startdate,
      enddate,
    })
    if (edit) {
      Toast.fire({
        icon: 'success',
        title: 'Chỉnh sửa thành công!'
      })
      navigate('/admin/discount')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Chỉnh sửa thất bại!',
        text: 'Vui lòng thử lại.',
        confirmButtonColor: '#3d685e'
      })
    }
  }
  return (
    <div>
      <Topnav />
      <form onSubmit={editProduct}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Chỉnh sửa mã giảm giá</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên mã</div>
          <TextInput
            placeholder={'Tên mã'}
            type="text"
            required={'required'}
            defaultValue={disCount.name}
            onChange={(e) => setName(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Giá</div>
          <TextInput
            placeholder={'Giá'}
            type="text"
            required={'required'}
            defaultValue={disCount.price}
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
            defaultValue={disCount.startdate}
            onChange={(e) => setStartDate(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Ngày kết thúc</div>
          <TextInput
            placeholder={'Ngày kết thúc'}
            type="date"
            required={'required'}
            defaultValue={disCount.enddate}
            onChange={(e) => setEndDate(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            icon="edit"
            onClick={editProduct}
            className="hover:text-white"
          >
            Sửa
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../Discount')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditDisCount
