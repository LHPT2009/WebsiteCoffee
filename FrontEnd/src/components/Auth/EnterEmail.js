import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Swal from 'sweetalert2'

const EnterEmail = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const SendMailUser = async (e) => {
    e.preventDefault()
    try {
      const tokenreset = await axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/mail`, {
        email: email,
      }).catch(err => {
        navigate('/enteremail')
        Swal.fire({
          icon: 'error',
          title: 'Email không tồn tại!',
          text: 'Vui lòng nhập lại',
          confirmButtonColor: '#3d685e'
        })
      })
      localStorage.setItem('tokenreset', tokenreset.data)
      if (tokenreset) {
        navigate('/checkcode')
        Swal.fire({
          icon: 'success',
          title: 'Đã gừi mã tới mail của bạn!',
          text: 'Vui lòng kiểm tra mã trong mail.',
          confirmButtonColor: '#3d685e'
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="relative min-h-screen pb-24 text-center lg:pb-12">
      <Header />
      <div className="fixed top-[45%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <form onSubmit={SendMailUser}>
          <div>
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Nhập email"
              className={'w-[400px]'}
            />
          </div>
          <div className="flex justify-center">
            <Button
              onClick={SendMailUser}
              icon={'navigate_next'}
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
}

export default EnterEmail
