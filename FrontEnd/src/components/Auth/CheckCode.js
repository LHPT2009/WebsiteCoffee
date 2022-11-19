import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const CheckCode = () => {
  const [Code, setCode] = useState('')
  const navigate = useNavigate()

  const CheckCodeUser = async (e) => {
    e.preventDefault()
    const rstoken = localStorage.getItem('tokenreset')
    const codeser = jwt_decode(rstoken).passcode
    if (Code == codeser) {
      localStorage.setItem('checksuccess', true)
      navigate('/repass')
    } else {
      navigate('/checkcode')
    }
  }
  if (localStorage.getItem('tokenreset')) {
    return (
      <div className="relative min-h-screen pb-24 text-center lg:pb-12">
        <Header />
        <div className='fixed top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%]"'>
          <form onSubmit={CheckCodeUser}>
            <div>
              <TextInput
                onChange={(e) => setCode(e.target.value)}
                name="email"
                placeholder="Nhập mã xác thực"
                className={'w-[400px]'}
              />
            </div>
            <div>
              <Button
                icon={'navigate_next'}
                onClick={CheckCodeUser}
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
    return <Navigate to={'/enteremail'} />
  }
}
export default CheckCode
