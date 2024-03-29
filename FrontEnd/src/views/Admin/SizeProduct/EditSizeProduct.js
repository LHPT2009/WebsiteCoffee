import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'
import Topnav from '../../../components/Admin/topnav/TopNav'
import Swal from 'sweetalert2'

const EditSizeProduct = () => {
  const [sizeProduct, setSizeProduct] = useState([])
  const [name, setName] = useState(sizeProduct.name)
  const [price, setPrice] = useState(sizeProduct.price)
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

  axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/sizeproduct/${id}`).then((res) => {
    setSizeProduct(res.data)
  })

  const editSizeProduct = async (e) => {
    e.preventDefault()
    const edit = await axios.patch(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/sizeproduct/${id}`, {
      name: name,
      price: price,
    })
    if (edit) {
      Toast.fire({
        icon: 'success',
        title: 'Chỉnh sửa thành công!'
      })
      navigate('/admin/sizeproducts')
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
      <form onSubmit={editSizeProduct}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Chỉnh sửa kích cỡ</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên kích cỡ</div>
          <TextInput
            placeholder={'Tên kích cỡ'}
            type="text"
            required={'required'}
            defaultValue={sizeProduct.name}
            onChange={(e) => setName(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Giá</div>
          <TextInput
            placeholder={'Giá'}
            type="text"
            required={'required'}
            defaultValue={sizeProduct.price}
            onChange={(e) => setPrice(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            icon="edit"
            onClick={editSizeProduct}
            className="hover:text-white"
          >
            Sửa
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../SizeProducts')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditSizeProduct
