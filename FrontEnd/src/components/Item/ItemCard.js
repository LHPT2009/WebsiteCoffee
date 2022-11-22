import React from 'react'
import newLabel from '../../assets/images/newLabel.png'

const ItemCard = ({ title, price, image }) => {
  return (
    <div className="flex flex-col relative self-auto w-full h-full rounded-[24px] bg-s1 text-on-surface bg-no-repeat overflow-hidden hover:bg-secondary-cont hover:text-on-secondary-cont active:rounded-[40px] transition-all ease-in active:ease-in duration-150">
      <img
        className="bg-[url('https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg')] w-full flex relative items-center self-stretch justify-center rounded-[16px] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
        src={image}
        alt="image-product"
      />
      <div className="flex flex-col items-start gap-[8px] self-stretch px-6 py-4">
        <span className="text-l2 font-[700] sm:text-l1 text-left truncate">{title}</span>
        <span className="text-caption sm:text-l2 text-grey">
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(price)}
        </span>
      </div>
    </div>
  )
}

export default ItemCard
