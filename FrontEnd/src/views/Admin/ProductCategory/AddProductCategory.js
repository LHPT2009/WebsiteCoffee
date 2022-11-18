import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../../components/Button/Button'
import TextInput from '../../../components/Input/TextInput'
import { useNavigate } from 'react-router-dom'
import Topnav from '../../../components/Admin/topnav/TopNav'

const AddProductCategory = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  const addProductCategory = async (e) => {
    e.preventDefault()
    const add = await axios.post(`http://localhost:8000/category`, { name })
    if (add) {
      navigate('/admin/productcategories')
    } else {
      alert(`them ko thanh cong!!!`)
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
