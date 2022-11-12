import React, { useEffect, useState } from 'react'
import ItemCard from '../../components/Item/ItemCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Coffee = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])

  return (
    <div className="bg-background relative pb-24 lg:pb-12 min-h-screen">
      <Header />
      <div className="pt-10 pb-[50px]">
        <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
          <h3 className="text-[#000] text-[18px] font-semibold">
            <span className="float-none inline-block mb-6 pl-[15px] text-primary uppercase font-googleSansBold">
              Cà Phê
            </span>
          </h3>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {product.map((item) => (
              <Link to={'/product/' + item._id}>
                <ItemCard
                  key={item._id}
                  title={item.name}
                  price={item.price}
                  image={`data:image/png;base64,${btoa(String.fromCharCode(...new Uint8Array(item.image.data.data)))}`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Coffee
