import React, { useContext, useState } from 'react'
import './header.css'

import logo2 from '../../assets/images/logo_2.png'
import { Link, useNavigate } from 'react-router-dom'
import { ListProductContext } from '../../context/ListProductContext'
import jwt_decode from 'jwt-decode'

import Swal from 'sweetalert2'

const Header = () => {
  const { products } = useContext(ListProductContext)
  let [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const numCart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart')).length
    : 0
  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
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
    
    Toast.fire({
      icon: 'success',
      title: 'Đăng xuất thành công!'
    })
    navigate('/')
  }

  return (
    <header className="flex justify-center items-start bg-s1 sticky top-0 left-0 w-full shadow-1 z-[999] text-l2">
      <div className="flex items-start justify-between max-w-[1440px] w-full py-2 px-4 sm:px-6 md:py-2 bg-s1">
        <div className="flex flex-row items-center xs:gap-2 md:gap-3 xl:gap-4">
          <Link to="/">
            <img
              className="flex w-[52px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]]"
              src={logo2}
              alt="logo-coffee-bug-on"
            />
          </Link>
          <div className="flex flex-col items-start">
            <div
              onClick={() => setOpen(!open)}
              className="justify-between items-center p-[15px] flex flex-row text-black text-center hover:text-primary cursor-pointer md:hidden"
              // className="flex flex-row justify-between items-center p-[12px] h-[50px] cursor-pointer md:hidden"
            >
              <span className="material-symbols-outlined">
                {open ? 'close' : 'menu'}
              </span>
            </div>

            <ul
              className={`md:flex flex-col md:flex-row absolute md:static md:items-center p-[24px] md:p-0 md:z-auto z-[-100] left-0 w-full md:w-auto gap-[8px] md:gap-4 xl:gap-7 bg-s1 transition-all duration-200 ease-in ${
                open ? 'top-[64px]' : 'top-[-420px]'
              } `}
            >
              <button
                className={`flex px-[16px] items-center text-l2 hover:bg-s5 rounded-[16px] md:w-auto h-[56px] text-black hover:text-primary xs:w-full`}
                onClick={() => {
                  navigate('/product')
                }}
              >
                Thức uống
              </button>
              <button
                className={`flex px-[16px] items-center text-l2 hover:bg-s5 rounded-[16px] md:w-auto h-[56px] text-black hover:text-primary xs:w-full`}
                onClick={() => {
                  navigate('/career')
                }}
              >
                Tuyển dụng
              </button>
              <button
                className={`flex px-[16px] items-center text-l2 hover:bg-s5 rounded-[16px] md:w-auto h-[56px] text-black hover:text-primary xs:w-full`}
                onClick={() => {
                  navigate('/aboutus')
                }}
              >
                Về chúng tôi
              </button>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-1 h-[56px] justify-center">
          {/* Cart button */}
          <div className="hover:bg-s5 rounded-[16px]">
            <button
              onClick={() => {
                navigate('/cart')
              }}
              className="hover:bg-s5 rounded-[16px]"
            >
              <div className="justify-between items-center p-[12] m-[12px] flex flex-row text-black text-center hover:text-primary w-[48] gap-[8px]">
                <span className="material-symbols-outlined">shopping_cart</span>
                {numCart > 0 && (
                  <div className="w-[40px] h-[24px] bg-tertiary-cont text-on-tertiary-cont rounded-[12px] pt-[2px] text-l2 font-[700]">
                    {numCart}
                  </div>
                )}
              </div>
            </button>
          </div>
          {/* User / Sign in */}
          <div className="hover:bg-s5 rounded-[16px]">
            {localStorage.getItem('token') ? (
              // Dropdown
              <div className="relative inline-block dropdown">
                <button className="h-[48px] px-4 items-center text-black">
                  Chào{' '}
                  <span className="text-l2 font-[700]">
                    {jwt_decode(localStorage.getItem('token')).name}
                  </span>
                </button>
                <ul className="absolute hidden pt-1 dropdown-menu">
                  <div className="bg-s1 text-on-secondary-cont rounded-[16px] w-full p-5 text-body shadow-4">
                    <li>
                      <Link
                        className="flex items-center justify-between whitespace-nowrap"
                        to="/profile"
                      >
                        <span className="material-symbols-outlined">
                          person
                        </span>
                        Tài khoản
                      </Link>
                    </li>
                    {jwt_decode(localStorage.getItem('token')).role.rolename ===
                      'Admin' && (
                      <li>
                        <Link
                          className="flex items-center justify-between whitespace-nowrap"
                          to="/profile"
                        >
                          <span className="material-symbols-outlined">
                            panel
                          </span>
                          Bảng quản trị
                        </Link>
                      </li>
                    )}
                    <li>
                      <Link
                        className="flex items-center justify-between py-3 pr-1 whitespace-nowrap"
                        to="/purchase"
                      >
                        <span className="material-symbols-outlined">
                          receipt
                        </span>
                        Đơn mua
                      </Link>
                    </li>
                    <li>
                      <button
                        className="flex items-center justify-between text-black whitespace-nowrap hover:text-primary"
                        onClick={logout}
                      >
                        <span className="mr-[15px] material-symbols-outlined text-[20px]">
                          logout
                        </span>
                        Đăng xuất
                      </button>
                    </li>
                  </div>
                </ul>
              </div>
            ) : (
              // End dropdown
              <div className="hover:bg-s5 rounded-[16px]">
                <button
                  onClick={() => {
                    navigate('/signin')
                  }}
                  className="hover:bg-s5 rounded-[16px]"
                >
                  <div className="justify-between items-center p-[12] m-[12px] flex flex-row text-black text-center w-[48] gap-[8px] hover:text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
