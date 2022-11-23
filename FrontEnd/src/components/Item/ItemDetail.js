import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Button from '../Button/Button'
import ItemCard from './ItemCard'
import { ListProductContext } from '../../context/ListProductContext'
import Footer from '../Footer/Footer'
import Rating from '@mui/material/Rating'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import Pagination from '../Admin/table/Pagination'
import Swal from 'sweetalert2'

const ItemDetail = () => {
  const { id } = useParams()
  const [point, setPoint] = React.useState(0)
  const [content, setContent] = useState('')
  const [info, setInfo] = useState([])
  const [ratelist, setRateList] = useState([])
  const [image, setImage] = useState()
  const [sizeproduct, setSizeProduct] = useState([])
  const [pricesize, setPriceSize] = useState(0)
  const [size, setSize] = useState('S')
  const navigate = useNavigate()
  const [category, setCategory] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [ratesPerPage] = useState(3)

  const indexOfLastItem = currentPage * ratesPerPage
  const indexOfFirstItem = indexOfLastItem - ratesPerPage
  const currentRates = ratelist
    .filter((rat) => rat.status == true)
    .slice(indexOfFirstItem, indexOfLastItem)
  const reverseRates = ratelist.reverse(ratelist.createdAt)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: false,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  useEffect(() => {
    axios.get(`http://localhost:8000/rate/${id}`).then((res) => {
      setRateList(res.data)
    })
    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
      setInfo(res.data)
      setImage(
        `data:image/png;base64,${btoa(
          String.fromCharCode(...new Uint8Array(res.data.image.data.data))
        )}`
      )
      setCategory(res.data.categoryproductid._id)
    })
  }, [id])
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/product').then((res) => {
      setProduct(res.data)
    })
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8000/sizeproduct').then((res) => {
      setSizeProduct(res.data)
    })
  }, [])

  const { addProduct } = useContext(ListProductContext)

  const add = (e) => {
    e.preventDefault()
    if (category == '6370b341e976458830064695') {
      const id = info._id
      const name = info.name
      const price = info.price
      const amount = 1
      const product = { id, name, price, amount }
      addProduct(product)
    } else {
      const id = info._id
      const name = info.name + ' (Size: ' + size + ')'
      const price = info.price + pricesize
      const amount = 1
      const product = { id, name, price, amount }
      addProduct(product)
    }
    Toast.fire({
      icon: 'success',
      title: 'Đã thêm vào đơn hàng'
    })
  }

  const addrate = (e) => {
    e.preventDefault()
    const addrate = axios.post(`http://localhost:8000/rate`, {
      productid: info._id,
      userid: jwt_decode(localStorage.getItem('token')).id,
      point: point,
      content: content,
    })
    if (addrate) {
      setPoint(0)
      setContent('')
      alert('Cảm ơn bạn đã đánh giá sản phẩm này!')
      axios.get(`http://localhost:8000/rate/${id}`).then((res) => {
        setRateList(res.data)
      })
    } else {
    }
  }

  useEffect(() => {
    document.title = `${info.name} - Coffee Bug Ổn`
  }, [info._id])

  return (
    <div className="relative min-h-screen pb-24 lg:pb-12 bg-background">
      <Header />
      <div className="h-20"></div>
      <div className="sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px] font-googleSansRegular">
        <div className="grid grid-cols-2 md:gap-10 sm:gap-8">
          <img
            className="rounded-[1.5rem] hover:rounded-[2rem] transition-all"
            src={image}
            alt="product-thumbnail"
            width={570}
          />
          <div className="pt-5">
            <p className="text-h2 text-black font-[700]">{info.name}</p>
            <div className="">
              <span className="text-h2 text-primary font-[700]">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(info.price + pricesize)}
              </span>
            </div>

            {/* Pick size */}
            {category == "6370b341e976458830064695" ? (
              ""
            ) : (
              <>
                <h2 className="mt-6 text-black text-l2">
                  Chọn size (mặc định size S)
                </h2>
                <div className="flex flex-wrap gap-4 mt-3">
                  {sizeproduct.map((ele) => (
                    <label className="cursor-pointer">
                      <input
                        id="default-radio-1"
                        type="radio"
                        name="default-radio"
                        class="peer sr-only"
                        onClick={() => {
                          setPriceSize(ele.price)
                          setSize(ele.name)
                        }}
                      ></input>
                      <div className="px-4 py-2.5 items-center text-center text-l2 bg-s4 text-grey border-[1.5px] border-outline-var rounded-full peer-checked:bg-secondary peer-checked:text-white">
                        {ele.name}
                      </div>
                    </label>
                  ))}
                </div>
              </>
            )}

            <div className="items-center mt-10">
              <Button
                type="button"
                btnStyle="btn-fill"
                icon="add_shopping_cart"
                onClick={add}
              >
                Thêm vào giỏ hàng
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h4 className="mb-2 text-t1">Mô tả sản phẩm</h4>
          <p className="text-body">{info.describe}</p>
        </div>
        {/* Rating */}
        <h4 className="mt-10 mb-5 text-t1">Đánh giá sản phẩm</h4>
        <div className="box-border flex flex-col gap-[16px] rounded-[32px] w-full">
          {currentRates.length != 0 ? (
            <>
              {currentRates
                .map((ele) => (
                  <div className="flex flex-col items-start p-6 transition-all ease-out rounded-3xl bg-secondary-cont text-on-secondary-cont border-outline-var hover:bg-secondary hover:text-white hover:rounded-2xl">
                    <span className="text-[14px] font-bold mb-1">
                      {ele.userid.lastname + ' ' + ele.userid.firstname}
                    </span>
                    <div className="flex items-start gap-2 mt-2 text-left text-l2">
                      <span>{moment(ele.createdAt).format('DD-MM-YYYY')}</span>
                    </div>
                    <Rating size="small" readOnly="true" value={ele.point} />
                    <div className="flex items-start gap-2 mt-2 text-left text-l2">
                      <span>{ele.content}</span>
                    </div>
                  </div>
                ))
                .sort(ratelist.createdAt)}
            </>
          ) : (
            <span className="text-center text-body">Chưa có đánh giá</span>
          )}
        </div>
        {/* Khi nào có đánh giá mới hiện Trang */}
        {ratelist != 0 && (
          <Pagination
            itemsPerPage={ratesPerPage}
            totalItems={ratelist.length}
            paginate={paginate}
          />
        )}

        {/* Relate */}
        <div className="my-16">
          <h4 className="mb-5 text-t1">Sản phẩm khác</h4>
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {product
              .filter((cate) => {
                return cate.categoryproductid._id == category
              })
              .map((item) => (
                <Link to={`/product/${item._id}`}>
                  <ItemCard
                    key={item._id}
                    title={item.name}
                    price={item.price}
                    image={`data:image/png;base64,${btoa(
                      String.fromCharCode(
                        ...new Uint8Array(item.image.data.data)
                      )
                    )}`}
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

export default ItemDetail
