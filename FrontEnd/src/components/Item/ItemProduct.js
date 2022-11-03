import React from 'react'
import newLabel from '../../assets/images/newLabel.png'

const ItemProduct = ({ title, price, image }) => {
  return (
    <div>
      <div>
        <span className="font-googleSansMedium">{title}</span>
        <span className="font-googleSansLight">{price} đ</span>
      </div>

      <img
        className=""
        src={image}
        alt="image-product"
      />
      {/* <div className="active:rounded-t-3xl bg-[url('https://product.hstatic.net/1000075078/product/1639648297_ca-phe-rang-xay-original-1-250gr_bde6e24404144f659c16455331639837_large.jpg')] w-full h-[200px] flex relative items-center justify-center min-w-[200px] rounded-2xl z-[1] bg-cover bg-no-repeat overflow-hidden transition-all"></div> */}
    </div>
  )
}

export default ItemProduct
