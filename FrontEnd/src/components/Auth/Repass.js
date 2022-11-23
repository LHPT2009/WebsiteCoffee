import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Swal from 'sweetalert2'

const Repass = () => {
  const [password, setPassword] = useState('')
  const [rePassword, setrePassword] = useState('')
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

  const ResetPass = async (e) => {
    e.preventDefault()
    const rstoken = localStorage.getItem('tokenreset')
    const email = jwt_decode(rstoken).email
    if (password == rePassword) {
      const updateUser = await axios.post('http://localhost:8000/mail/reset', {
        email: email,
        password: password,
      })
      if (updateUser) {
        localStorage.removeItem('checksuccess')
        localStorage.removeItem('tokenreset')
        Toast.fire({
          icon: 'success',
          title: 'Thay đổi mật khẩu thành công!',
          text: 'Vui lòng đăng nhập lại.',
          // text: 'Tự động chuyển về trang đăng nhập...',
          showConfirmButton: false,
        })
        setTimeout(() => {
          navigate('/signin')
        }, 5000);
      }
    } else {
      navigate('/repass')
      Swal.fire({
        icon: 'error',
        title: 'Mật khẩu xác nhận không đúng!',
        text: 'Vui lòng nhập lại',
        confirmButtonColor: '#3d685e'
      })
    }
  }
  if (localStorage.getItem('checksuccess')) {
    return (
      <div className="relative min-h-screen pb-24 text-center lg:pb-12">
        <Header />
        <div className='fixed top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]"'>
          <form onSubmit={ResetPass}>
            <div>
              <TextInput
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Mật khẩu mới"
                className={'w-[400px]'}
              />
            </div>
            <div>
              <TextInput
                name="re-password"
                onChange={(e) => setrePassword(e.target.value)}
                type="password"
                placeholder="Xác nhận mật khẩu"
                className={'w-[400px]'}
              />
            </div>
            <div>
              <Button
                icon={'navigate_next'}
                onClick={ResetPass}
                btnCSS={'w-[400px]'}
              >
                Tiếp tục
              </Button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    )
  } else {
    return <Navigate to={'/checkcode'} />
  }
}

export default Repass
