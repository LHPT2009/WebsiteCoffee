import React, { useContext, useEffect, useState } from 'react'

import logo2 from '../../assets/images/logo_2.png'
import { Link } from 'react-router-dom'
import { ListProductContext } from '../../context/ListProductContext'

const Header = () => {
  const { products } = useContext(ListProductContext)
  let [open, setOpen] = useState(false)
  return (
    <header className="flex justify-center items-start bg-s1 sticky top-0 left-0 w-full shadow-3 z-[999]">
      <div className="flex justify-between items-start px-[20] md:px-[60px] py-[8px] mx-10  w-full">
        <div className="flex flex-row items-start gap-[24px] md:gap-[60px]">
          <Link to="/">
            <img
              className="flex h-[48px] pt-[5px drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]]"
              src={logo2}
              alt="logo-coffee-bug-on"
            />
          </Link>8
          <div className="flex flex-col items-start">
            <div
              onClick={() => setOpen(!open)}
              className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48] cursor-pointer md:hidden"
            >
              <span class="material-symbols-outlined">
                {open ? 'close' : 'menu'}
              </span>
            </div>

            <ul
              className={`md:flex flex-col md:flex-row absolute md:static md:items-center p-[20px] md:p-0 md:z-auto z-[-100] left-0 w-full md:w-auto gap-[8px] md:gap-[48px] bg-s1 transition-all duration-500 ease-in ${
                open ? 'top-[64px]' : 'top-[-420px]'
              } `}
            >
              <li className="flex items-center px-[16px] h-full text-center text-l2 list-none hover:bg-s5 rounded-[16px]">
                <Link
                  className="text-black text-left hover:text-primary w-full"
                  to="/product"
                >
                  Homepage
                </Link>
              </li>
              <li className="flex items-center px-[16px] h-full text-center text-l2 list-none hover:bg-s5 rounded-[16px]">
                <a
                  className="text-black text-left hover:text-primary w-full"
                  href=""
                >
                  Product
                </a>
              </li>
              <li className="flex items-center px-[16px] h-full text-center text-l2 list-none hover:bg-s5 rounded-[16px]">
                <Link
                  className="text-black text-left hover:text-primary w-full"
                  to="/cart"
                >
                  Giỏ hàng {products.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-[16px] h-[48px]">
          <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">
            <Link
              className="text-black text-center hover:text-primary h-[48] w-[48]"
              to="/search"
            >
              <span class="material-symbols-outlined">shopping_cart</span>
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">
            <Link
              className="text-black text-center hover:text-primary h-[48] w-[48]"
              to="/search"
            >
              <span class="material-symbols-outlined">search</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
