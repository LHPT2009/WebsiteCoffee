import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import ItemCard from '../../components/Item/ItemCard'
import Search from '../../components/Input/Search'

const Coffee = () => {
  const [product, setProduct] = useState([])
  const [productCate, setProductCate] = useState([])
  const [noOfElement, setNoOfElement] = useState(4)
  const slice = product
    .filter((pro) => pro.status == true)
    .slice(0, noOfElement)
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

  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)
    const newFilter = slice.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilteredData(newFilter)
  }

  const renderPaging = (
    <>
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
    </>
  )

  const renderSearch = (
    <>
      {filteredData.map((item) => (
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
    </>
  )

  return (
    <div className="relative min-h-screen pb-24 bg-background lg:pb-12">
      <Header />
      <div className="pt-10 pb-[50px]">
        <div className="mx-[-15px] sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
          <div className="text-[18px] uppercase text-primary font-googleSansBold mb-5">
            Menu
          </div>
          {/* Filter - Search */}
          <div className="gap-3 mb-2 lg:flex lg:justify-between">
            <div className="flex gap-3 h-[50px]">
              <Button btnStyle="btn-outline" icon="" onClick={handleproduct}>
                Tất cả
              </Button>
              <div className="flex gap-3 h-[50px]">
                {productCate.map((item) => (
                  <Button
                    btnStyle="btn-outline"
                    icon=""
                    onClick={() => handleCategories(`${item._id}`)}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <Search
                onChange={handleFilter}
                placeholder={'Tìm kiếm....'}
                value={wordEntered}
              />
            </div>
          </div>
          {/* End Filter - Search */}
          <div className="grid gap-4 mb-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {wordEntered === '' ? renderPaging : renderSearch}
          </div>
          {product.length > noOfElement ? (
            <Button
              onClick={() => loadMore()}
              btnStyle={'btn-outline'}
              btnCSS={''}
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
