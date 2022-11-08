import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'

import Chart from 'react-apexcharts'

import { useSelector } from 'react-redux'

import StatusCard from '../../components/Admin/status-card/StatusCard'

import Table from '../../components/Admin/table/Table'

import Badge from '../../components/Admin/badge/Badge'

import statusCards from '../../assets/JsonData/status-card-data.json'

import { Navigate } from "react-router-dom";

import jwtdecode from "../../header/jwt-decode";

const chartOptions = {
  series: [
    {
      name: 'Online',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60, 50, 10, 95],
    },
    {
      name: 'Trực tiếp',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 62, 22, 78],
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
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    legend: {
      position: 'top',
    },
    grid: {
      show: false,
    },
  },
}

const topCustomers = {
  head: ['user', 'total orders', 'total spending'],
  body: [
    {
      username: 'john doe',
      order: '490',
      price: '$15,870',
    },
    {
      username: 'frank iva',
      order: '250',
      price: '$12,251',
    },
    {
      username: 'anthony baker',
      order: '120',
      price: '$10,840',
    },
    {
      username: 'frank iva',
      order: '110',
      price: '$9,251',
    },
    {
      username: 'anthony baker',
      order: '80',
      price: '$8,840',
    },
  ],
}

const renderCusomerHead = (item, index) => <th key={index}>{item}</th>

const renderCusomerBody = (item, index) => (
  <tr key={index}>
    <td>{item.username}</td>
    <td>{item.order}</td>
    <td>{item.price}</td>
  </tr>
)

const latestOrders = {
  header: ['order id', 'user', 'total price', 'date', 'status'],
  body: [
    {
      id: '#OD1711',
      user: 'john doe',
      date: '17 Jun 2021',
      price: '$900',
      status: 'shipping',
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid',
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'pending',
    },
    {
      id: '#OD1712',
      user: 'frank iva',
      date: '1 Jun 2021',
      price: '$400',
      status: 'paid',
    },
    {
      id: '#OD1713',
      user: 'anthony baker',
      date: '27 Jun 2021',
      price: '$200',
      status: 'refund',
    },
  ],
}

const orderStatus = {
  shipping: 'primary',
  pending: 'warning',
  paid: 'success',
  refund: 'danger',
}

const renderOrderHead = (item, index) => <th key={index}>{item}</th>

const renderOrderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.user}</td>
    <td>{item.price}</td>
    <td>{item.date}</td>
    <td>
      <Badge type={orderStatus[item.status]} content={item.status} />
    </td>
  </tr>
)

const Dashboard = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer.mode)
  if (localStorage.getItem("token")) {
    if (jwtdecode().role == "Admin" || jwtdecode().role == "SuperAdmin") {
      return (
        <div>
          <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
            Trang chủ
          </h1>
          <div className="row">
            <div className="col-6">
              <div className="row">
                {statusCards.map((item, index) => (
                  <div className="col-6" key={index}>
                    <StatusCard
                      icon={item.icon}
                      count={item.count}
                      title={item.title}
                    />
                  </div>
                ))}
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

            <div className="col-12">
              <div className="card">
                <div className="card__header">
                  <h3>Đơn mới nhất</h3>
                </div>
                <div className="card__body">
                  <Table
                    headData={latestOrders.header}
                    renderHead={(item, index) => renderOrderHead(item, index)}
                    bodyData={latestOrders.body}
                    renderBody={(item, index) => renderOrderBody(item, index)}
                  />
                </div>
                <div className="card__footer">
                  <Link to="./Receipts">Xem tất cả</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Navigate to={"/"} />
    }
  } else {
    return <Navigate to={"/"} />
  }
}

export default Dashboard
