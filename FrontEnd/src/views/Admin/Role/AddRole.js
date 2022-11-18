import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from 'react-router-dom'

import TextInput from '../../../components/Input/TextInput'

import Topnav from '../../../components/Admin/topnav/TopNav'

const AddRole = () => {
  const [rolename, setRoleName] = useState('')
  const navigate = useNavigate()

  const addRole = async (e) => {
    e.preventDefault()
    const add = await axios.post(`http://localhost:8000/role`, { rolename })
    if (add) {
      navigate('/admin/roles')
    } else {
      alert('them ko thanh cong!!!')
    }
  }
  return (
    <div>
      <Topnav />
      <form onSubmit={addRole}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Thêm loại tài khoản</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên loại</div>
          <TextInput
            placeholder={'Tên loại'}
            type="text"
            required={'required'}
            onChange={(e) => setRoleName(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            type="button"
            icon="add"
            onClick={addRole}
            className="hover:text-white"
          >
            Thêm
          </Button>
          <Button
            type="button"
            icon="navigate_before"
            onClick={() => {
              navigate('../Roles')
            }}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddRole
