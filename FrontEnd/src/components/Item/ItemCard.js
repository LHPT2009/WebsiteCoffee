import React from 'react'
import newLabel from '../../assets/images/newLabel.png'

const ItemCard = ({ title, price, image }) => {
  return (
    <div className="inline-flex relative items-center justify-between w-full h-full p-0 rounded-[1.5rem] bg-secondary-cont text-black no-underline bg-cover bg-no-repeat flex-col-reverse overflow-hidden hover:bg-tertiary-cont hover:text-black active:rounded-[2rem] transition-all">
      <div className="grid relative self-start gap-2 m-3">
        <span className="font-googleSansMedium">{title}</span>
        <span className="font-googleSansLight">{price} đ</span>
      </div>

      <img
        className="active:rounded-t-[2rem] bg-[url('https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg')] w-full h-[200px] flex relative items-center justify-center min-w-[200px] rounded-[1.5rem] z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"
        src={image}
        alt="image-product"
      />
      {/* <div className="active:rounded-t-3xl bg-[url('https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg')] w-full h-[200px] flex relative items-center justify-center min-w-[200px] rounded-2xl z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"></div> */}
    </div>
  )
}

export default ItemCard
