import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../../components/Admin/topnav/TopNav'

const EditProductCategory = () => {
  const [category, setCategory] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()
  const [name, setName] = useState(category.name)

  axios.get(`http://localhost:8000/category/${id}`).then((res) => {
    setCategory(res.data)
  })

  const editProductCategory = async (e) => {
    e.preventDefault()
    const edit = await axios.put(`http://localhost:8000/category/${id}`, {
      name,
    })
    if (edit) {
      navigate('/admin/productcategories')
    } else {
      alert(`Sửa ko thanh cong!!!`)
    }
  }

  return (
    <div>
      <Topnav />
      <form onSubmit={editProductCategory}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Chỉnh sửa loại sản phẩm</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên loại</div>
          <TextInput
            placeholder={'Tên loại sản phẩm'}
            type="text"
            required={'required'}
            onChange={(e) => setName(e.target.value)}
            defaultValue={category.name}
            className="inline-block w-[400px]"
          />{' '}
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button type="button" icon="edit" onClick={editProductCategory}>
            Sửa
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../ProductCategories')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditProductCategory
