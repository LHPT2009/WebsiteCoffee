import React, { useContext, useEffect } from 'react'
import logoBugOn from '../../assets/images/logo.png'
import logo2 from '../../assets/images/logo_2.png'
import { Link } from 'react-router-dom'
import {ListProductContext} from '../../context/ListProductContext'

const Header = () => {
  const {products} = useContext(ListProductContext);
  return (
    <header className="flex h-[56px] bg-s1 text-[14px] leading-5 sticky top-0 left-0 w-full shadow-3 z-[999] font-googleSansRegular">
      <div className="px-[15px] mx-10 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        <div className="flex">
          <Link to="/">
            <img
              className="inline-block h-[48px] pt-[5px]"
              src={logo2}
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
            <a
              className="text-[#46270b] leading-[22px] text-left hover:text-[#f0bf4c]"
              href=""
            >
              Tuyển dụng
            </a>
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
