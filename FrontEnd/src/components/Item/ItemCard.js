import React from 'react'
import newLabel from '../../assets/images/newLabel.png'

const ItemCard = ({ title, price, image }) => {
  return (
    <div className="flex relative self-auto justify-between w-full h-full rounded-[32px] bg-s1 text-on-surface bg-no-repeat flex-col-reverse overflow-hidden hover:bg-s2 hover:shadow-3 transition ease-in active:shadow-1">
      <div className="flex flex-col items-start gap-[8px] self-stretch px-[32px] py-[24px]">
        <span className="text-t1">{title}</span>
        <span className="text-t2">
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(price)}
        </span>
      </div>

      <img
        className="bg-[url('https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg')] w-full flex relative items-center self-stretch justify-center rounded-[16px] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
        src={image}
        alt="image-product"
      />
    </div>
  )
}

export default ItemCard
