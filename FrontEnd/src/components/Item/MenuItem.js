import React from 'react'
import newLabel from '../../assets/images/newLabel.png'

const MenuItem = () => {
  return (
    // menu item
    <div className="rounded-3xl text-[14px] mx-[15px] mb-10 mt-[15px] basis-[calc(25%_-_30px)] min-h-[145px] bg-[#D6E7E1]">
      {/* menu item image */}
      <div className="relative">
        <a
          className="overflow-hidden block w-full pt-[100%] text-[#1F1F1F]"
          href="https://google.com"
          target="_blank"
        >
          <img
            className="rounded-3xl w-full top-0 left-0 absolute"
            src="https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg"
            alt="thumb"
          />
        </a>

        <ul className="absolute left-[14px] top-[12px] pl-0 flex">
          <img
            className="h-[30px] w-full mr-[6px] inline-block align-middle"
            src={newLabel}
          />
          <span className="hidden"></span>
        </ul>

        {/* <div className="">
          <div className="left-0 top-0 absolute h-16 w-16 overflow-hidden">
            <div className="left-4 top-4 absolute h-6 w-[5.656rem] origin-bottom-left rotate-[-45deg] translate-x-[-38px] translate-y-[-8px] bg-red-600 text-center"></div>
          </div>
        </div> */}
      </div>
      {/* menu item info */}
      <div className="m-4">
        <h3 className="font-semibold inline leading-[22px] hover:text-[#EA8025]">
          <a href="">Thùng Cà Phê Sữa Espresso</a>
        </h3>
        <div className="leading-5 text-[14px] text-[#1F1F1F] mb-[10px]">
          336.000 đ
        </div>
      </div>
    </div>
  )
}

export default MenuItem
