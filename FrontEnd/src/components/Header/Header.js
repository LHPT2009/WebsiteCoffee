import React, { useContext, useEffect } from 'react'
import logoBugOn from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import {ListProductContext} from '../../context/ListProductContext'

const Header = () => {
  const {products} = useContext(ListProductContext);
  return (
    <header className="bg-outline-var text-[14px] leading-5 sticky top-0 left-0 h-[60px] w-full z-[999] font-googleSansBold">
      <div className="px-[15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <div className="flex">
          <Link to="/">
            <img
              className="inline-block h-[55px] pt-[5px]"
              src={logoBugOn}
              alt="logo-coffee-bug-on"
            />
          </Link>
          <li className="px-4 py-[19px] text-left list-none">
            <Link
              className="text-[#46270b] text-left hover:text-[#f0bf4c]"
              to="/product"
            >
              Cà phê
            </Link>
          </li>
          <li className="px-4 py-[19px] text-left list-none">
            <Link
              className="text-[#46270b] text-left hover:text-[#f0bf4c]"
              to=""
            >
              Tuyển dụng
            </Link>
          </li>
          <li className="px-4 py-[19px] text-left list-none">
            <Link
              className="text-[#46270b] text-left hover:text-[#f0bf4c]"
              to="/cart"
            >
              Giỏ hàng {products.length}
            </Link>
          </li>
        </div>
      </div>
    </header>
  )
}

export default Header
