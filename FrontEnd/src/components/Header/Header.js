import React, { useContext, useEffect } from 'react'
import logoBugOn from '../../assets/images/logo.png'
import logo2 from '../../assets/images/logo_2.png'
import { Link } from 'react-router-dom'
import { ListProductContext } from '../../context/ListProductContext'

const Header = () => {
  const { products } = useContext(ListProductContext);
  return (
    <header className="flex h-[56px] justify-center flex-row items-center bg-s1 leading-5 sticky top-0 left-0 w-full shadow-3 z-[999] font-googleSansRegular">
      <div className="flex flex-row justify-between items-center px-[120px] py-[0px] mx-10  h-[48px] w-full">
        <div className="flex flex-row items-center gap-[60px] h-[48px]">
          <Link to="/">
            <img
              className="inline-block h-[48px] pt-[5px]"
              src={logo2}
              alt="logo-coffee-bug-on"
            />
          </Link>
          <div className="flex flex-row justify-center items-center p-0 gap-[48px] h-[48px]">
            <li className="flex items-center px-0 py-[10px] h-[48px] text-center text-l2 list-none">
              <Link
                className="text-black text-center hover:text-primary"
                to="/product"
              >
                Homepage
              </Link>
            </li>
            <li className="flex items-center px-0 py-[10px] h-[48px] text-center list-none">
              <a
                className="text-black text-center hover:text-primary"
                href=""
              >
                Product
              </a>
            </li>
            <li className="flex items-center px-0 py-[10px] h-[48px] text-center list-none">
              <Link
                className="text-black text-center hover:text-primary"
                to="/cart"
              >
                Giỏ hàng {products.length}
              </Link>
            </li>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-[16px] h-[48px]">
          <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">
            <Link
              className="text-black text-center hover:text-primary h-[48] w-[48]"
              to="/search"
            >
              <span class="material-symbols-outlined">
                shopping_cart
              </span>
            </Link>
          </div>

          <div className="flex flex-row justify-between items-center p-[12] m-[12px] h-[48] w-[48]">

            <Link
              className="text-black text-center hover:text-primary h-[48] w-[48]"
              to="/search"
            >
              <span class="material-symbols-outlined">
                search
              </span>
            </Link>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
