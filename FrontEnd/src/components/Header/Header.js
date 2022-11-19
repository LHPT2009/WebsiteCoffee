import React, { useContext, useEffect, useState } from 'react'
import './header.css'

import logo2 from '../../assets/images/logo_2.png'
import { Link, useNavigate } from 'react-router-dom'
import { ListProductContext } from '../../context/ListProductContext'
import Button from '../Button/Button'
import jwt_decode from 'jwt-decode'

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
    navigate('/')
  }

  const [openSearch, setOpenSearch] = useState(false)
  const handleOpenSearch = () => {
    setOpenSearch(true)
  }
  const handleCloseSearch = () => {
    setOpenSearch(false)
  }

  return (
    <header className="flex justify-center items-start bg-s1 sticky top-0 left-0 w-full shadow-1 z-[999] text-l2">
      <div className="flex justify-between items-start mx-10 md:mx-[50px] lg:mx-[100px] xl:mx-[150px] py-[12px] md:py-[8px] bg-s1 w-full">
        <div className="flex flex-row items-start gap-[24px] md:gap-[60px]">
          <Link to="/">
            <img
              className="flex h-[48px] pt-[5px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]]"
              src={logo2}
              alt="logo-coffee-bug-on"
            />
          </Link>
          <div className="flex flex-col items-start">
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-row justify-between items-center p-[12] m-[12px] w-[48] cursor-pointer md:hidden"
            >
              <span class="material-symbols-outlined">
                {open ? 'close' : 'menu'}
              </span>
            </div>

            <ul
              className={`md:flex flex-col md:flex-row absolute md:static md:items-center p-[24px] md:p-0 md:z-auto z-[-100] left-0 w-full md:w-auto gap-[8px] md:gap-[48px] bg-s1 transition-all duration-500 ease-in ${
                open ? 'top-[64px]' : 'top-[-420px]'
              } `}
            >
              <button
                className={`flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] w-screen md:w-auto h-[56px] text-black hover:text-primary`}
                onClick={() => {
                  navigate('/product')
                }}
              >
                Menu
              </button>
              <button
                className={`flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] w-screen md:w-auto h-[56px] text-black hover:text-primary`}
                onClick={() => {
                  navigate('/career')
                }}
              >
                Tuyển dụng
              </button>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px] h-[56px] justify-center">
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
                  <div className="w-[40px] h-[24px] bg-tertiary-cont text-on-tertiary-cont rounded-[12px] pt-[2px] font-googleSansBold">
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
                <button className="h-[48px] px-4 items-center">
                  Chào{' '}
                  <span className="font-semibold">
                    {jwt_decode(localStorage.getItem('token')).name}
                  </span>
                </button>
                <ul className="absolute hidden pt-2 text-black dropdown-menu">
                  <div className="bg-s5 rounded-2xl w-[148px] p-5 text-body shadow-md">
                    <li>
                      <Link
                        className="flex items-center justify-between whitespace-no-wrap"
                        to="/profile"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          person
                        </span>
                        Tài khoản
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center justify-between py-3 pr-1 whitespace-no-wrap"
                        to="/purchase"
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          receipt
                        </span>
                        Đơn mua
                      </Link>
                    </li>
                    <li>
                      <button
                        className="flex items-center justify-between text-black whitespace-no-wrap hover:text-primary"
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
          {/* <div className="hover:bg-s5 rounded-[16px]">
            {localStorage.getItem('token') ? (
              <button
                onClick={() => {
                  navigate('/profile')
                }}
                className="h-[48px] px-4 items-center"
              >
                Chào{' '}
                <span className="font-semibold">
                  {' '}
                  {jwt_decode(localStorage.getItem('token')).name}
                </span>
                
              </button>
            ) : (
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
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
