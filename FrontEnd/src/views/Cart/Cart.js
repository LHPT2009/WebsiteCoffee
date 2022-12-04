import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import TextInput from '../../components/Input/TextInput'
import { ListProductContext } from '../../context/ListProductContext'
import './cart.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import moment from 'moment'
import Swal from 'sweetalert2'
import Empty from '../../assets/images/Empty.png'

const Cart = () => {
  const { products, delProduct, upAmount, downAmount, clearCart } =
    useContext(ListProductContext)
  const navigate = useNavigate()
  const [price, setPrice] = useState(0)
  const [userid, setUserId] = useState('')
  const [namediscount, setNameDisCount] = useState('')
  const [discountid, setDisCountId] = useState('')
  const [discountprice, setDiscountPrice] = useState(0)
  const [statuspayment, setStatusPayment] = useState(false)
  const [statusdelivery, setStatusDelivery] = useState(false)
  const [numberphone, setNumberphone] = useState('')
  const [address, setAddress] = useState('')

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    },
  })

  useEffect(() => {
    setUserId(
      localStorage.getItem('token')
        ? jwt_decode(localStorage.getItem('token')).id
        : ``
    )
    setDiscountPrice(
      localStorage.getItem('discount')
        ? JSON.parse(localStorage.getItem('discount')).price
        : 0
    )
    setDisCountId(
      localStorage.getItem('discount')
        ? JSON.parse(localStorage.getItem('discount'))._id
        : ``
    )
    setNameDisCount(
      localStorage.getItem('discount')
        ? JSON.parse(localStorage.getItem('discount')).name
        : ``
    )
  }, [])
  useEffect(() => {
    let ans = 0
    products.map((item) => (ans += item.amount * item.price))
    setPrice(ans - discountprice)
  })

  const searchdiscount = (e) => {
    e.preventDefault()
    axios
      .post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/discount/one`, { name: namediscount })
      .then((res) => {
        var today = moment().format('DD-MM-YYYY')
        var startday = moment(res.data.startdate).format('DD-MM-YYYY')
        var endday = moment(res.data.enddate).format('DD-MM-YYYY')

        if (startday <= today && today <= endday) {
          localStorage.setItem('discount', JSON.stringify(res.data))
          setNameDisCount(res.data.name)
          setDisCountId(res.data._id)
          setDiscountPrice(res.data.price)
          Toast.fire({
            icon: 'success',
            title: 'Giảm giá thành công!',
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Mã giảm giá hết hạn!',
            text: 'Vui lòng nhập mã giảm giá khác.',
            confirmButtonColor: '#3d685e',
          })
        }
      })
  }

  const addOrder = async () => {
    if (!localStorage.getItem('token')) {
      Swal.fire({
        icon: 'error',
        title: 'Chưa đăng nhập tài khoản!',
        text: 'Vui lòng đăng nhập để thanh toán.',
        confirmButtonColor: '#3d685e',
      })
      return navigate('/signin')
    }
    if (localStorage.getItem('token')) {
      const infoUser = await axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/user/${userid}`)
      if (infoUser.data) {
        if (infoUser.data.numberphone == '' && infoUser.data.address == '') {
          Swal.fire({
            icon: 'warning',
            title: 'Vui lòng cập nhật SĐT và địa chỉ đầy đủ!',
            confirmButtonColor: '#3d685e',
          })
          navigate('/profile')
        } else {
          const rec = await axios.post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt`, {
            userid,
            price,
            products,
            discountid,
            discountprice,
            statuspayment,
            statusdelivery
          })
          setNameDisCount('')
          setDiscountPrice(0)
          setDisCountId('')
          if (rec) {
            Toast.fire({
              icon: 'success',
              title: 'Thanh toán thành công!',
            })
            clearCart()
            navigate('/paymentsuccess')
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Thanh toán thất bại',
              text: 'Vui lòng thử lại sau.',
              confirmButtonColor: '#3d685e',
            })
            navigate('/')
          }
        }
      }
    }
  }

  const addOrderMoMo = async () => {
    if (!localStorage.getItem('token')) {
      Swal.fire({
        icon: 'error',
        title: 'Chưa đăng nhập tài khoản!',
        text: 'Vui lòng đăng nhập để thanh toán.',
        confirmButtonColor: '#3d685e',
      })
      return navigate('/signin')
    }
    if (localStorage.getItem('token')) {
      const infoUser = await axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/user/${userid}`)
      if (infoUser.data) {
        if (infoUser.data.numberphone == '' && infoUser.data.address == '') {
          alert('mời bạn cập nhật thêm SDT và địa chỉ đầy đủ!')
          navigate('/profile')
        } else {
          const rec = await axios
            .post(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/momo`, {
              amount: price,
              orderInfo: 'Thanh toán hóa đơn',
            })
            .then((res) => window.location.replace(res.data))
        }
      }
    }
  }

  const orderList = products.map((n) => (
    <tr key={n.id} className="text-l2 bg-background hover:bg-s1">
      <td>{n.name}</td>
      {/* <td>size: {n.size}</td> */}
      <td>
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(n.price)}
      </td>
      <td>
        <div className="flex">
          <Button
            onClick={() => downAmount(n.id, n.name)}
            btnStyle="btn-tonal"
            icon="remove"
            type="button"
            children=""
          />
          <input
            className="w-20 h-10 mx-2 text-center bg-transparent rounded-full"
            type="text"
            value={n.amount}
          />
          <Button
            onClick={() => upAmount(n.id, n.name)}
            btnStyle="btn-tonal"
            icon="add"
            type="button"
            children=""
          />
        </div>
      </td>
      <td className="lowercase">
        {new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(n.price * n.amount)}
      </td>
      <td>
        <Button
          onClick={() => delProduct(n.name)}
          btnStyle="btn-danger"
          icon="delete"
          type="button"
          children=""
        />
      </td>
    </tr>
  ))
  const formorderList = (
    <div>
      <div className="border-s5 border-[2px] rounded-[24px] border-collapse overflow-hidden">
        <table>
          <thead className="text-l2 sm:text-l1 text-on-surface bg-s5">
            <tr>
              <th>Sản phẩm</th>
              <th>Giá bán</th>
              <th>Số lượng</th>
              <th>Tổng tiền (1 sản phẩm)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{orderList}</tbody>
        </table>
      </div>
      <div></div>
      {/* Discount - Payment */}
      <div className="flex justify-between mt-6">
        <div className="flex">
          <div>
            <TextInput
              // defaultValue={namediscount}
              placeholder="Mã giảm giá (nếu có)"
              onChange={(e) => setNameDisCount(e.target.value)}
              className="mr-3"
            />
          </div>
          <div>
            <Button
              btnStyle="btn-tonal"
              btnCSS={'h-[50px]'}
              icon={''}
              onClick={searchdiscount}
            >
              Áp dụng
            </Button>
            {/* <Button
              btnStyle="btn-danger"
              btnCSS={'h-[50px]'}
              icon={''}
              onClick={() => {
                setNameDisCount('')
                setDiscountPrice(0)
                setDisCountId('')
              }}
            >
              Xóa mã
            </Button> */}
          </div>
        </div>
      </div>
      {/* Card total - discount */}
      <div className="p-6 my-6 rounded-3xl bg-s5 text-on-surface border-outline-var">
        {/* Thêm mã giảm giá thì mới render cái này */}
        {discountprice > 0 && (
          <div className="mb-2 text-l2">
            Giảm giá:{' '}
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(discountprice)}
          </div>
        )}
        <div className="flex items-center justify-between">
          <div className="text-t1">
            Tồng tiền:{' '}
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
            }).format(price)}
          </div>
          <div className="flex flex-col gap-2">
            <Button
              btnStyle=""
              btnCSS={'shadow-5'}
              icon="payments"
              onClick={addOrder}
            >
              Thanh toán
            </Button>
            <Button
              btnStyle=""
              btnCSS={'!bg-[#d41f8d] shadow-5'}
              icon="wallet"
              onClick={addOrderMoMo}
            >
              Momo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  // Cart empty state
  const cartEmpty = (
    <div className="flex flex-col gap-4 items-center mx-2 sm:mx-8 lg:mx-auto lg:px-24 my-[64px] max-w-[1440px]">
      <img
        className="w-[260px] sm:w-[320px] h-auto py-4"
        src={Empty}
      />
      <div className="text-center text-black text-h2 sm:text-d2">Bạn chưa có sản phẩm nào😓</div>
      <Button
        type="button"
        btnStyle="btn-fill"
        btnCSS={''}
        icon="shopping_bag"
        onClick={() => {
          navigate('/product')
        }}
      >Bắt đầu mua hàng
      </Button>
    </div>
  )

  useEffect(() => {
    document.title = `Giỏ hàng - Coffee Bug Ổn`
  }, [])

  return (
    <div className="relative items-center text-center min-h-screen pb-24 lg:pb-12 bg-background">
      <Header />
      <div className="mt-5 mx-0 sm:mx-5 md:mx-[50px] lg:mx-[100px] xl:mx-[150px]">
        {products.length != 0 ? formorderList : cartEmpty}
      </div>
      <Footer />
    </div>
  )
}

export default Cart
