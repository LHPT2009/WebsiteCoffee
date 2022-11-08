import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import ItemCard from '../../components/Item/ItemCard'

function MenuHome() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])

  return (
    <section className="pb-8 relative">
      {/* container */}
      <div className="z-[1] relative mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {/* menu list */}
        <div className="grid gap-[32px] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {product.map((item) => (
            <Link to={'/product/' + item._id}>
              <ItemCard
                key={item._id}
                title={item.name}
                price={item.price}
                image={item.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHome
