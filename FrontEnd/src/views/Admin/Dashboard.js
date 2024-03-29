import React, { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import StatusCard from '../../components/Admin/status-card/StatusCard'
import { Navigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode'
import axios from 'axios'
import Topnav from '../../components/Admin/topnav/TopNav'
import moment from'moment'
const Dashboard = () => {
  const [receipt, setReceipt] = useState([])
  const [user, setUser] = useState([])
  const [rate, setRate] = useState([])
  useEffect(() => {
    document.title = `Bảng quản trị - Coffee Bug Ổn`
  }, [])
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/receipt`)
      .then((res) => setReceipt(res.data))
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/user`).then((res) => setUser(res.data))
    axios.get(`${process.env.REACT_APP_URL ? `${process.env.REACT_APP_URL}` : `http://localhost:8000`}/rate`).then((res) => setRate(res.data))
  }, [])

  const chartOptions = {
    series: [
      {
        name: 'Doanh thu',
        data: 
        receipt.map(ele => ele.price),
      },
    ],
    options: {
      color: ['#6ab04c', '#2980b9'],
      chart: {
        background: 'transparent',
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        categories: receipt.map(ele => moment(ele.createdAt).format('DD/MM HH:mm:ss')),
      },
      legend: {
        position: 'top',
      },
      grid: {
        show: false,
      },
    },
  }
  const themeReducer = useSelector((state) => state.ThemeReducer.mode)
  if (localStorage.getItem('token')) {
    if (
      jwt_decode(localStorage.getItem('token')).role == 'Admin' ||
      jwt_decode(localStorage.getItem('token')).role == 'SuperAdmin'
    ) {
      return (
        <div>
          <Topnav />
          <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
            Trang chủ
          </h1>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <StatusCard
                    icon={'bx bx-user'}
                    count={user.length}
                    title={'Người dùng'}
                  />
                </div>
                <div className="col-6">
                  <StatusCard
                    icon={'bx bx-star'}
                    count={rate.filter((rec) => rec.statusrate == true).length}
                    title={'Đánh giá'}
                  />
                </div>
                <div className="col-6">
                  <StatusCard
                    icon={'bx bx-money'}
                    count={receipt
                      .filter((rec) => rec.statuspayment == true)
                      .reduce((a, v) => (a = a + v.price), 0)}
                    title={'Doanh thu (đ)'}
                  />
                </div>
                <div className="col-6">
                  <StatusCard
                    icon={'bx bx-receipt'}
                    count={receipt.length}
                    title={'Đơn hàng'}
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card full-height">
                {/* chart */}
                <Chart
                  options={
                    themeReducer === 'theme-mode-dark'
                      ? {
                        ...chartOptions.options,
                        theme: { mode: 'dark' },
                      }
                      : {
                        ...chartOptions.options,
                        theme: { mode: 'light' },
                      }
                  }
                  series={chartOptions.series}
                  type="line"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return <Navigate to={'/'} />
    }
  } else {
    return <Navigate to={'/'} />
  }
}

export default Dashboard
