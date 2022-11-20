import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import Button from '../Button/Button'
import logo from '../../assets/images/logo_2.png'

const RatingProduct = () => {
  const [point, setPoint] = useState(0)
  return (
    <div className="relative pb-12 my-8 text-on-surface ">
      <h4 className="my-3 text-t1">Đánh giá sản phẩm</h4>
      <form onSubmit={''}>
        <div className="flex items-center gap-3 mb-3">
          <img src={logo} alt="" width={60} />
          <div>Tên sản phẩm</div>
        </div>
        {/* Star */}
        <div className="flex items-center gap-2 mb-3">
          <span>Chất lượng sản phẩm</span>
          <Rating
            size="large"
            name="simple-controlled"
            value={point}
            onChange={(event, newValue) => {
              setPoint(newValue)
            }}
          />
        </div>
        {/* Content */}
        <div className="">
          <textarea
            name="content"
            placeholder="Nội dung"
            value={''}
            className="border-[2px] bg-background border-outline-var rounded-[24px] text-l2 mb-3 px-6 py-4 hover:border-outline focus:border-primary focus:rounded-[16px] focus-visible:border-primaryt transition-all w-full min-h-[56px] max-h-[150px]"
            onChange={''}
          />
        </div>
        <div className="flex justify-end gap-2">
          <Button btnStyle={'btn-outline'} icon="" onClick={''}>
            Quay lại
          </Button>
          <Button btnStyle={'btn-fill'} icon="" onClick={''}>
            Hoàn thành
          </Button>
        </div>
        {/* End Content */}
      </form>
    </div>
  )
}

export default RatingProduct
