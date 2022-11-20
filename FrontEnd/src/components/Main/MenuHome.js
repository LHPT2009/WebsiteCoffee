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
    <section className="relative pb-8">
      {/* container */}
      <div className="z-[1]">
        {/* <div className="z-[1] relative mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]"> */}
        {/* menu list */}
        <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:w-[1500px] mx-auto xs:grid-cols-2">
          {product
            .filter((pro) => pro.status == true)
            .map((item) => (
              <Link to={'/product/' + item._id}>
                <ItemCard
                  key={item._id}
                  title={item.name}
                  price={item.price}
                  image={`data:image/png;base64,${btoa(
                    String.fromCharCode(...new Uint8Array(item.image.data.data))
                  )}`}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHome
