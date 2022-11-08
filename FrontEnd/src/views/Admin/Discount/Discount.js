import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { useNavigate } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Discount = () => {
  const navigate = useNavigate()
  const [disCount, setDisCount] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/discount').then((res) => {
      setDisCount(res.data)
    })
  }, [])
  return (
    <div>
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Giảm giá
      </h1>
      <Button
        btnStyle={'btn-outline'}
        btnCSS={'h-11 mb-10'}
        icon="add"
        onClick={() => {
          navigate('../adddiscount')
        }}
      >
        Thêm mới
      </Button>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <table className="table table-striped table-hover table-bordered">
                <thead>
                  <tr>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Bắt đầu</th>
                    <th>Kết thúc</th>
                  </tr>
                </thead>
                <tbody>
                  {disCount.map((item) => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.price} đ</td>
                      <td>{item.startdate} đ</td>
                      <td>{item.enddate} đ</td>
                      <td style={{ minWidth: 100 }}>
                        <Button
                          btnStyle={'btn-outline'}
                          onClick={() => {
                            navigate('../editdiscount/' + item._id)
                          }}
                          btnCSS={'h-11 mr-2'}
                          icon="edit"
                        >
                          Sửa
                        </Button>
                        <Button
                          btnStyle={'btn-outline'}
                          onClick={() => {
                            navigate('../deletediscount/' + item._id)
                          }}
                          btnCSS={'h-11'}
                          icon="delete"
                        >
                          Xóa
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
