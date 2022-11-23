import React, { useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import TextInput from '../components/Input/TextInput'
import Button from '../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import profile from '../assets/images/Profile.png'

const Profile = () => {
  const navigate = useNavigate()
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/')
  }

  const [currUser, setCurrUser] = useState([])

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

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
      Toast.fire({
            icon: 'success',
            title: 'Lưu thông tin thành công!'
          })
      navigate('/profile')
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Lưu thông tin thất bại!',
        text: 'Vui lòng thử lại.',
        confirmButtonColor: '#3d685e'
      })
    }
  }

  useEffect(() => {
    document.title = `Tài khoản - Coffee Bug Ổn`
  }, [])

  return (
    <div className="relative items-center text-center min-h-screen pb-24 lg:pb-12 bg-s3 sm:bg-background">
      <Header />
      {/* new account detail */}
      <div className="mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px] bg-s3 sm:bg-background ">
        <div className="flex flex-col gap-10 text-center">
          {/* col-2-2 - wrapper */}
          <div className="grid grid-cols-12 gap-6 h-full lg:h-full">
            {/* col-tilte - image */}
            <div className="hidden lg:flex lg:flex-col col-span-12 lg:col-span-6 justify-center text-left items-start gap-4">
              <h2 className="text-h2 text-primary">Tài khoản</h2>
              <div className='grow items-center'>
              <img
                className="w-[80%] h-auto py-4"
                src={profile}
              />
              </div>
              
            </div>
            {/* col-account info */}
            <div className="grid grid-cols-2 items-center mx-0 sm:mx-20 !py-20 lg:mx-0 !px-4 sm:!px-14 bg-s3 col-span-12 lg:col-span-6 rounded-[24px] text-body text-black gap-1">
            <h1 className='text-h2 text-on-secondary-cont col-span-2 text-left'>Thông tin tài khoản</h1>
                <div className='flex flex-col items-start col-span-2'>
                  <h3 className='text-outline top-[-10px] bg-s3 ml-2 px-1 text-caption'>Tên đăng nhập</h3>
                  <TextInput
                    className={'w-[100%]'}
                    disabled={'disabled'}
                    defaultValue={currUser.username}
                  />
                </div>
                <div className='flex flex-col items-start col-span-2'>
                  <h3 className='text-outline top-[-10px] bg-s3 ml-2 px-1 text-caption'>Email</h3>
                  <TextInput
                    className={'w-[100%]'}
                    onChange={(e) => setEmail(e.target.value)}
                    defaultValue={currUser.email}
                  />
                </div>
                <div className='flex flex-col items-start col-span-2'>
                  <h3 className='text-outline top-[-10px] bg-s3 ml-2 px-1 text-caption'>Họ</h3>
                  <TextInput
                    className={'w-[100%]'}
                    onChange={(e) => setLastname(e.target.value)}
                    defaultValue={currUser.lastname}
                  />
                </div>
                <div className='flex flex-col items-start col-span-2'>
                  <h3 className='text-outline top-[-10px] bg-s3 ml-2 px-1 text-caption'>Tên</h3>
                  <TextInput
                    className={'w-[100%]'}
                    onChange={(e) => setFirstname(e.target.value)}
                    defaultValue={currUser.firstname}
                  />
                </div>
                <div className='flex flex-col items-start col-span-2'>
                  <h3 className='text-outline top-[-10px] bg-s3 ml-2 px-1 text-caption'>Số điện thoại</h3>
                  <TextInput
                    className={'w-[100%]'}
                    onChange={(e) => setNumberphone(e.target.value)}
                    defaultValue={currUser.numberphone}
                  />
                </div>
                <div className='flex flex-col items-start col-span-2'>
                  <h3 className='text-outline top-[-10px] bg-s3 ml-2 px-1 text-caption'>Địa chỉ</h3>
                  <TextInput
                    className={'w-[100%]'}
                    onChange={(e) => setAddress(e.target.value)}
                    defaultValue={currUser.address}
                  />
                </div>

              <div className="flex justify-center col-span-2">
                <Button
                  type="button"
                  btnStyle="btn-fill"
                  btnCSS={'w-full'}
                  icon="login"
                  onClick={editUser}
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
