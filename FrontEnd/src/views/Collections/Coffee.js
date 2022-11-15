import React, { useEffect, useState } from 'react'
import ItemCard from '../../components/Item/ItemCard'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'

const Coffee = () => {
  const [product, setProduct] = useState([])
  const [productCate, setProductCate] = useState([])
  const [noOfElement, setNoOfElement] = useState(4)
  const slice = product.slice(0, noOfElement)
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement)
  }
  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:8000/category').then((res) => {
      setProductCate(res.data)
    })
  }, [])

  const handleCategories = (cateid) => {
    axios.get(`http://localhost:8000/loadproduct/${cateid}`).then((res) => {
      setProduct(res.data)
    })
  }

  const handleproduct = () => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }

  return (
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12">
      <Header />
      <div className="pt-10 pb-[50px]">
        <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
          <h3 className="text-[#000] text-[18px] font-semibold">
            <span className="inline-block float-none mb-6 uppercase text-primary font-googleSansBold">
              Menu
            </span>
          </h3>
          <div className="mb-10">
            <Button
              btnCSS={'h-[44px] mr-2 my-4'}
              btnStyle="btn-outline"
              icon=""
              onClick={handleproduct}
            >
              Tất cả
            </Button>
            {productCate.map((item) => (
              <Button
                btnCSS={'h-[44px] mr-2'}
                btnStyle="btn-outline"
                icon=""
                onClick={() => handleCategories(`${item._id}`)}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <div className="grid gap-4 mb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {slice.map((item) => (
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
          {product.length > noOfElement ? (
            <Button
              onClick={() => loadMore()}
              btnStyle={'btn-outline'}
              btnCSS={'mb-20 h-[44px]'}
              icon="expand_more"
            >
              Xem thêm
            </Button>
          ) : null}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Coffee
