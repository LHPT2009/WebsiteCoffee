import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating'
import Button from '../Button/Button'
import logo from '../../assets/images/logo_2.png'
import axios from 'axios'
import Dialog from '@mui/material/Dialog'

const RatingProduct = ({ receiptid, isOpen }) => {
  const [rate, setRate] = useState([])
  const [point, setPoint] = useState(0)
  const [content, setContent] = useState('')
  const [recid, setReceiptId] = useState('')
  const [userid, setUserId] = useState('')
  const [productid, setProductId] = useState('')
  const [check, setCheck] = useState(0)
  const [showRate, setShowRate] = useState(false)

  const addrate = (id) => {
    if (localStorage.getItem('check')) {
      const put = axios.put(`http://localhost:8000/rate/receiptrate/${id}`, {
        productid,
        receiptid: recid,
        userid,
        point,
        content,
      })
      if (put) {
        alert('Cảm ơn bạn đã đánh giá')
        localStorage.removeItem('check')
        axios
          .post('http://localhost:8000/rate/receiptid', {
            receiptid: receiptid,
          })
          .then((res) => {
            setRate(res.data)
            setProductId(res.data.productid)
            setUserId(res.data.userid)
            setReceiptId(res.data.receiptid)
            setPoint(res.data.point)
            setContent(res.data.content)
          })
      }
    }
  }
  useEffect(() => {
    axios
      .post('http://localhost:8000/rate/receiptid', { receiptid: receiptid })
      .then((res) => {
        setRate(res.data)
        setProductId(res.data.productid)
        setUserId(res.data.userid)
        setReceiptId(res.data.receiptid)
        setPoint(res.data.point)
        setContent(res.data.content)
      })
  }, [])
  return (
    <div className="relative p-4 text-on-surface ">
      {rate.map((item) => (
        <form onSubmit={addrate(item._id)}>
          <div className="flex items-center gap-3 mt-3 mb-5">
            <img src={logo} alt="" width={60} />
            <div>{item.productid.name}</div>
            {item.statusrate === false && (
              <Button
                icon={''}
                btnStyle={'btn-outline'}
                btnCSS="h-[40px]"
                onClick={() => setShowRate(!showRate)}
              >
                Đánh giá
              </Button>
            )}
            {item.statusrate === true && (
              <div className="flex items-center px-4 py-2 text-black rounded-full text-[16px] font-semibold bg-tertiary-cont">
                Đã đánh giá
              </div>
            )}
          </div>
          {item.statusrate == true ? (
            ''
          ) : (
            <>
              {showRate === true && (
                <>
                  {/* Star */}
                  <div className="flex items-center gap-2 mb-3">
                    <span>Chất lượng sản phẩm</span>
                    <Rating
                      size="large"
                      name="simple-controlled"
                      onChange={(event, newValue) => {
                        setPoint(newValue)
                      }}
                    />
                  </div>
                  {/* Content */}
                  <div className="">
                    <textarea
                      name="content"
                      placeholder="Nội dung"
                      className="border-[2px] bg-background border-outline-var rounded-[24px] text-l2 mb-3 p-4 hover:border-outline focus:border-primary focus:rounded-[16px] focus-visible:border-primaryt transition-all w-full min-h-[56px] max-h-[150px]"
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button
                      icon={''}
                      btnStyle={'btn-fill'}
                      onClick={() => {
                        localStorage.setItem('check', true)
                        addrate(item._id)
                      }}
                    >
                      Hoàn thành
                    </Button>
                  </div>
                </>
              )}
            </>
          )}
        </form>
      ))}
    </div>
  )
}

export default RatingProduct
