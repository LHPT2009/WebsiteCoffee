import React, { useContext, useEffect, useState } from 'react'

import logo2 from '../../assets/images/logo_2.png'
import { Link, useNavigate } from 'react-router-dom'
import { ListProductContext } from '../../context/ListProductContext'

import jwt_decode from 'jwt-decode';

const Header = () => {
  const { products } = useContext(ListProductContext)
  let [open, setOpen] = useState(false)
  const navigate = useNavigate();

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  }
  const activated = 'active:text-primary'


  return (
    <header className="flex justify-center items-start bg-s1 sticky top-0 left-0 w-full shadow-3 z-[999] text-l2">
      <div className="flex justify-between items-start px-[20] md:px-[60px] py-[8px] bg-s1 mx-10 w-full">
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
              <li className="flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] h-[56px]">
                <Link
                  className="block text-black hover:text-primary w-full"
                  to="/product"
                >
                  Cà phê
                </Link>
              </li>
              <li className="flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] h-[56px]">
                <Link
                  className="text-black text-left hover:text-primary w-full"
                  to="/"
                >
                  Trà
                </Link>
              </li>
              <li className="flex px-[16px] items-center text-l2 list-none hover:bg-s5 rounded-[16px] h-[56px]">
                <Link
                  className="text-black text-left hover:text-primary w-full"
                  to="/"
                >
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px] h-[56px] justify-center">
          <div className="hover:bg-s5 rounded-[16px]">
            <div className="flex flex-row justify-between items-center p-[12] m-[12px]">
              <Link
                className="flex flex-row text-black text-center hover:text-primary w-[48] gap-[8px]"
                to="/cart"
              >
                <span class="material-symbols-outlined">shopping_cart</span>
                {products.length > 0 && (
                  <div className="w-[40px] h-[24px] bg-tertiary-cont text-on-tertiary-cont rounded-[12px]">
                    {products.length}
                  </div>
                )}
              </Link>
            </div>
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

          <div className="hover:bg-s5 rounded-[16px]">
            <div className="flex flex-row justify-between items-center m-[12px]">
              <Link
                className="flex flex-row text-black text-center hover:text-primary"
                to="/signin"
              >
                <span class="material-symbols-outlined">person</span>
              </Link>
              {/* {localStorage.getItem('token') ? (
                <div>
                  <form onSubmit={logout}>
                    <p>Hello {jwt_decode(localStorage.getItem("token")).name} <button onClick={logout}> Đăng xuất !!!</button></p>
                  </form>
                </div>
              ) : (
                <Link
                  className="flex flex-row text-black text-center hover:text-primary"
                  to="/signin"
                >
                  <span class="material-symbols-outlined">person</span>
                </Link>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
