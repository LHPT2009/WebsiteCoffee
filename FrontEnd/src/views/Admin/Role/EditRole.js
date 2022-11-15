import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

import TextInput from '../../../components/Input/TextInput'

const EditRole = () => {
  const [role, setRole] = useState([])
  const [rolename, setRoleName] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()

  axios.get(`http://localhost:8000/role/${id}`).then((res) => {
    setRole(res.data)
  })

  const editRole = async (e) => {
    e.preventDefault()
    const edit = await axios.put(`http://localhost:8000/role/${id}`, {
      rolename,
    })
    if (edit) {
      navigate('/admin/roles')
    } else {
      alert('Sua ko thanh cong!!!')
    }
  }
  return (
    <div className="font-googleSansRegular">
      <form onSubmit={editRole}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Chỉnh sửa loại tài khoản</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên loại</div>
          <TextInput
            placeholder={'Tên loại'}
            type="text"
            required={'required'}
            defaultValue={role.rolename}
            onChange={(e) => setRoleName(e.target.value)}
            className="inline-block w-[400px]"
          />
          <br />
        </div>
        <div className="mt-5">
          <Button
            type="button"
            btnCSS={'h-[44px] mr-2'}
            icon="edit"
            onClick={editRole}
            className="hover:text-white"
          >
            Sửa
          </Button>
          <Button
            type="button"
            btnCSS={'h-[44px]'}
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

export default EditRole
