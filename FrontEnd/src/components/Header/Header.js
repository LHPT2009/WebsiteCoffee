import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#fffc] text-[14px] leading-5 sticky top-0 left-0 h-[60px] w-full z-[999]">
      <div className="px-[15px] md:mx-[100px] lg:mx-[350px]">
        <div className="flex">
          <img src="" alt="" />
          <li className="px-4 py-[19px] text-left list-none">
            <a
              className="text-[#46270b] font-semibold leading-[22px] text-left hover:text-[#f0bf4c]"
              href=""
            >
              Cà phê
            </a>
          </li>
          <li className="px-4 py-[19px] text-left list-none">
            <a
              className="text-[#46270b] font-semibold leading-[22px] text-left hover:text-[#f0bf4c]"
              href=""
            >
              Trà
            </a>
          </li>
          <li className="px-4 py-[19px] text-left list-none">
            <a
              className="text-[#46270b] font-semibold leading-[22px] text-left hover:text-[#f0bf4c]"
              href=""
            >
              Bánh
            </a>
          </li>
          <li className="px-4 py-[19px] text-left list-none">
            <a
              className="text-[#46270b] font-semibold leading-[22px] text-left hover:text-[#f0bf4c]"
              href=""
            >
              Quà
            </a>
          </li>
          <li className="px-4 py-[19px] text-left list-none">
            <a
              className="text-[#46270b] font-semibold leading-[22px] text-left hover:text-[#f0bf4c]"
              href=""
            >
              Tuyển dụng
            </a>
          </li>
        </div>
      </div>
    </header>
  )
}

export default Header
