import React, { useContext, useEffect, useState } from 'react'

import logo2 from '../../assets/images/logo_2.png'
import { Link, useNavigate } from 'react-router-dom'
import { ListProductContext } from '../../context/ListProductContext'

import jwt_decode from 'jwt-decode'

const Header = () => {
  const { products } = useContext(ListProductContext)
  let [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const logout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token')
    navigate('/')
  }
  const activated = 'active:text-primary'

  return (
    <header className="flex justify-center items-start bg-s1 sticky top-0 left-0 w-full shadow-3 z-[999] text-l2">
      <div className="flex justify-between items-start mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px] py-[8px] bg-s1 w-full">
        <div className="flex flex-row items-start gap-[24px] md:gap-[60px]">
          <Link to="/">
            <img
              className="flex h-[48px] pt-[5px drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]]"
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
              className={`md:flex flex-col md:flex-row absolute md:static md:items-center p-[20px] md:p-0 md:z-auto z-[-100] left-0 w-full md:w-auto gap-[8px] md:gap-[48px] bg-s1 transition-all duration-500 ease-in ${
                open ? 'top-[56px]' : 'top-[-420px]'
              } `}
            >
              <button
                className="flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] h-[56px] text-black hover:text-primary"
                onClick={() => {
                  navigate('/product')
                }}
              >
                Menu
              </button>
              <button
                className={`flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] h-[56px] text-black hover:text-primary`}
                onClick={() => {
                  navigate('/')
                }}
              >
                Tuyển dụng
              </button>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px] h-[56px] justify-center">
          <div className="hover:bg-s5 rounded-[16px]">
            <button
              onClick={() => {
                navigate('/cart')
              }}
              className="hover:bg-s5 rounded-[16px]"
            >
              <div className="justify-between items-center p-[12] m-[12px] flex flex-row text-black text-center hover:text-primary w-[48] gap-[8px]">
                <span class="material-symbols-outlined">shopping_cart</span>
                {products.length > 0 && (
                  <div className="w-[40px] h-[24px] bg-tertiary-cont text-on-tertiary-cont rounded-[12px] pt-[2px] font-googleSansBold">
                    {products.length}
                  </div>
                )}
              </div>
            </button>
          </div>

          <div className="hover:bg-s5 rounded-[16px]">
            <div className="flex flex-row justify-between items-center m-[12px]">
              <Link
                className="flex flex-row text-black text-center hover:text-primary"
                to="/search"
              >
                <span class="material-symbols-outlined">search</span>
              </Link>
            </div>
          </div>

          <button
            className="hover:bg-s5 rounded-[16px]"
            onClick={() => {
              navigate('/signin')
            }}
          >
            <div className="flex flex-row justify-between items-center m-[12px]">
              {localStorage.getItem('token') ? (
                <div>
                  <form onSubmit={logout}>
                    <p>
                      Chào {jwt_decode(localStorage.getItem('token')).name}{' '}
                      <button onClick={logout}> Đăng xuất</button>
                    </p>
                  </form>
                </div>
              ) : (
                <div className="flex flex-row text-black text-center hover:text-primary">
                  <span class="material-symbols-outlined">person</span>
                </div>
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
