import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useNavigate } from 'react-router-dom'

import TextInput from '../../../components/Input/TextInput'

import Topnav from '../../../components/Admin/topnav/TopNav'

import Swal from 'sweetalert2'

const AddRole = () => {
  const [rolename, setRoleName] = useState('')
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

  const addRole = async (e) => {
    e.preventDefault()
    const add = await axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/role`, { rolename })
    if (add) {
      Toast.fire({
        icon: 'success',
        title: 'Thêm thành công!'
      })
      navigate('/admin/roles')
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
