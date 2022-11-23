import React, { useEffect } from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import user_image from '../../../assets/images/icon.png'

import user_menu from '../../../assets/JsonData/user_menus.json'

import jwt_decode from 'jwt-decode'
import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import axios from 'axios'
const logout = (e) => {
  localStorage.removeItem('token')
}

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
)

const renderUserMenu = (item, index) => (
  <form onSubmit={logout}>
    <Link to="/" key={index} onClick={logout}>
      <div className="notification-item">
        <i className={item.icon}></i>
        <span>{item.content}</span>
      </div>
    </Link>
  </form>
)

const Topnav = () => {
  const [name, setName] = useState('')
  const [notifi, setNotifications] = useState([])
  const navigate = useNavigate();
  useEffect(() => {
    setName(
      localStorage.getItem('token')
        ? jwt_decode(localStorage.getItem('token')).name
        : ``
    )
    axios.get('http://localhost:8000/notification').then((res) => setNotifications(res.data))
  }, [])
  const curr_user = {
    display_name: name,
    image: user_image,
  }
  const renderNotificationItem = (item, index) => (
    <Link to={`/admin/editreceipt/${item.receiptid}`}>
      <div className="notification-item" key={index}>
        <span>Đơn hàng mới từ <br />{item.userid.lastname + " " + item.userid.firstname}</span>
        {item.status == false ? <p>Chưa xem</p> : <p>Đã xem</p>}
      </div >
    </Link >
  )
  return (
    <div className="mb-5 topnav">
      <div className="topnav__logo">
        <Link to="/">
          <img className="h-[48px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <Dropdown
            icon="bx bx-bell"
            badge={notifi.filter((noti) => noti.status == false).length}
            contentData={notifi}
            renderItems={(item, index) => renderNotificationItem(item, index)}
            renderFooter={() => <Link to="/admin/receipts">Xem tất cả</Link>}
          />
          {/* dropdown here */}
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  )
}

export default Topnav
