import React from 'react'
import Header from '../../components/Header/Header'
import MenuItem from '../../components/Item/MenuItem'

const Coffee = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="pt-10 pb-[50px]">
          <div className="mx-[-15px] md:mx-[100px] lg:mx-[352px]">
            <h3 className="text-[#000] text-[18px] font-semibold">
              <span className="float-none inline-block mb-6 pl-[15px]">
                Cà Phê Tại Nhà
              </span>
            </h3>
            <div className="grid grid-cols-4">
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
              <MenuItem />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Coffee
