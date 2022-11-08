import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'

import { useNavigate } from "react-router-dom";

const AddProductCategory = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const addProductCategory = async (e) => {
    e.preventDefault();
    const add = await axios.post(`http://localhost:8000/category`, { name });
    if (add) {
      navigate("/admin/productcategories");
    } else {
      alert(`them ko thanh cong!!!`);
    }
  }
  return (
    <div className="font-googleSansRegular">
      <form onSubmit={addProductCategory}>
        <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          Thêm loại
        </h1>
        <TextInput
          type={'text'}
          className={'w-[400px]'}
          placeholder={'Tên loại'}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-10">
          <Button type="button" btnCSS="h-11 mr-2" icon="add" onClick={addProductCategory}>
            Thêm
          </Button>
          <Button type="button" btnCSS="h-11" icon="navigate_before">
            <Link className="hover:text-white" to="../productcategories">
              Quay về
            </Link>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddProductCategory