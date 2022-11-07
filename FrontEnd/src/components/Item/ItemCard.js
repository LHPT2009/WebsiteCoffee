import React from 'react'
import newLabel from '../../assets/images/newLabel.png'

const ItemCard = ({ title, price, image }) => {
  return (
    <div className="inline-flex relative items-center justify-between w-full h-full p-0 rounded-[1.5rem] bg-secondary-cont text-black no-underline bg-cover bg-no-repeat flex-col-reverse overflow-hidden hover:bg-tertiary-cont hover:text-black hover:rounded-[2rem] transition-all">
      <div className="grid relative self-start gap-2 m-3">
        <span className="font-googleSansMedium">{title}</span>
        <span className="font-googleSansLight">
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(price)}
        </span>
      </div>

      <img
        className="active:rounded-t-[2rem] bg-[url('https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg')] w-full h-[200px] flex relative items-center justify-center min-w-[200px] rounded-[1.5rem] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
        src={image}
        alt="image-product"
      />
    </div>
  )
}

export default ItemCard
