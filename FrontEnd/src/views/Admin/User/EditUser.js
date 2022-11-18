import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import TextInput from '../../../components/Input/TextInput'

const EditUser = () => {
  const [user, setUser] = useState([])
  const [listrole, setListRole] = useState([])

  const { id } = useParams()
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState(user.password)
  const [confirmemail, setConfirmemail] = useState(user.confirmemail)
  const [role, setRole] = useState(user.role)
  const [firstname, setFirstname] = useState(user.firstname)
  const [lastname, setLastname] = useState(user.lastname)
  const [numberphone, setNumberphone] = useState(user.numberphone)

  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8000/user/${id}`).then((res) => {
      setUser(res.data)
      setRole(res.data.role)
    })
    axios.get(`http://localhost:8000/role`).then((res) => {
      setListRole(res.data)
    })
  }, [])

  const editUser = async (e) => {
    e.preventDefault()
    const edit = await axios.put(`http://localhost:8000/user/${id}`, {
      username,
      email,
      password,
      confirmemail,
      role,
      firstname,
      lastname,
      numberphone,
    })
    if (edit) {
      navigate('/admin/users')
    } else {
      alert('Sua ko thanh cong!!!')
    }
  }
  return (
    <div className="font-googleSansRegular">
      <form onSubmit={editUser}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Chỉnh sửa tài khoản</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Username</div>
          <TextInput
            placeholder={'Username'}
            type="text"
            required={'required'}
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={user.username}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Password</div>
          <TextInput
            placeholder={'Password'}
            type="text"
            required={'required'}
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={user.password}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Email</div>
          <TextInput
            placeholder={'Email'}
            type="text"
            required={'required'}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={user.email}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Xác nhận email</div>
          <TextInput
            placeholder={'Xác nhận email'}
            type="text"
            required={'required'}
            onChange={(e) => setConfirmemail(e.target.value)}
            defaultValue={user.confirmemail}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Họ</div>
          <TextInput
            placeholder={'Họ'}
            type="text"
            required={'required'}
            onChange={(e) => setLastname(e.target.value)}
            defaultValue={user.lastname}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Tên</div>
          <TextInput
            placeholder={'Tên'}
            type="text"
            required={'required'}
            onChange={(e) => setFirstname(e.target.value)}
            defaultValue={user.firstname}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Số điện thoại</div>
          <TextInput
            placeholder={'Số điện thoại'}
            type="text"
            required={'required'}
            onChange={(e) => setNumberphone(e.target.value)}
            defaultValue={user.numberphone}
            className="inline-block w-[400px]"
          />
          <br />
          <div className="inline-block w-[200px] mr-3">Role</div>
          {/* <input type={"text"} placeholder={"Role"} defaultValue={user.role} onChange={(e) => setRole(e.target.value)} /> <br /> */}
          <select
            className="border-outline-var border-style: solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
                    hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-300"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            {listrole.map((item) => (
              <option value={item._id}>{item.rolename}</option>
            ))}
          </select>
        </div>
        <div className="mt-5">
          <Button
            type="button"
            btnCSS={'h-[44px] mr-2'}
            icon="edit"
            onClick={editUser}
            className="hover:text-white"
          >
            Sửa
          </Button>
          <Button
            type="button"
            btnCSS={'h-[44px]'}
            icon="navigate_before"
            onClick={() => navigate('../Users')}
          >
            Quay về
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EditUser
