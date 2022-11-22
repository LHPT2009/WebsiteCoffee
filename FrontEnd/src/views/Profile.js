import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TextInput from '../components/Input/TextInput'
import Button from '../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate()
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/')
  }

  const [currUser, setCurrUser] = useState([])
  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/user/${
          jwt_decode(localStorage.getItem('token')).id
        }`
      )
      .then((res) => {
        setCurrUser(res.data)
      })
  }, [])
  const [email, setEmail] = useState(currUser.email)
  const [firstname, setFirstname] = useState(currUser.firstname)
  const [lastname, setLastname] = useState(currUser.lastname)
  const [numberphone, setNumberphone] = useState(currUser.numberphone)
  const [address, setAddress] = useState(currUser.address)

  const editUser = async (e) => {
    e.preventDefault()
    const edit = await axios.put(
      `http://localhost:8000/user/${
        jwt_decode(localStorage.getItem('token')).id
      }`,
      {
        email,
        firstname,
        lastname,
        numberphone,
        address,
      }
    )
    if (edit) {
      alert('update du lieu thanh cong!!!')
      navigate('/profile')
    } else {
      alert('Sua ko thanh cong!!!')
    }
  }

  useEffect(() => {
    document.title = `Tài khoản - Coffee Bug Ổn`
  }, [])

  return (
    <div className="relative min-h-screen pb-24 lg:pb-12">
      <Header />
      <div className="text-center uppercase text-[32px] font-googleSansBold text-primary mt-20">
        Tài khoản của tôi
      </div>
      <div className="fixed top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px]">
        <div className="flex items-center justify-end">
          <div className="w-[20%] text-left overflow-hidden">Tên đăng nhập</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 !mb-0 hover:border-outline-var"
                disabled={'disabled'}
                defaultValue={currUser.username}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="w-[20%] text-left overflow-hidden">Email</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 !mb-0"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={currUser.email}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="w-[20%] text-left overflow-hidden">Họ</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 !mb-0"
                onChange={(e) => setLastname(e.target.value)}
                defaultValue={currUser.lastname}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="w-[20%] text-left overflow-hidden">Tên</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 !mb-0"
                onChange={(e) => setFirstname(e.target.value)}
                defaultValue={currUser.firstname}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="w-[20%] text-left overflow-hidden">Số điện thoại</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 !mb-0"
                onChange={(e) => setNumberphone(e.target.value)}
                defaultValue={currUser.numberphone}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end mt-4">
          <div className="w-[20%] text-left overflow-hidden">Địa chỉ</div>
          <div className="w-[80%] box-border pl-5">
            <div className="flex items-center box-border w-full h-[40%] overflow-hidden">
              <TextInput
                className="flex-1 !mb-0"
                onChange={(e) => setAddress(e.target.value)}
                defaultValue={currUser.address}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <Button icon="" onClick={editUser}>
            Lưu
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
