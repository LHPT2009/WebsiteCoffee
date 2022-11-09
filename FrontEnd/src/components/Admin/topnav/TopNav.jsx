import React, { useEffect } from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../../assets/JsonData/notification.json'

import user_image from '../../../assets/images/icon.png'

import user_menu from '../../../assets/JsonData/user_menus.json'

import jwt_decode from 'jwt-decode'
import { useState } from 'react'

const logout = (e) => {
    localStorage.removeItem("token");
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <form onSubmit={logout}>
        <Link to='/' key={index} onClick={logout}>
            <div className="notification-item">
                <i className={item.icon}></i>
                <span>{item.content}</span>
            </div>
        </Link>
    </form>
)

const Topnav = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        setName(localStorage.getItem("token") ? (jwt_decode(localStorage.getItem("token")).name) : (``))
    }, []);
    const curr_user = {
        display_name: name,
        image: user_image
    }
    return (
        <div className='topnav'>
            <div className="topnav__search">
                <input type="text" placeholder='Tìm kiếm...' />
                <i className='bx bx-search'></i>
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
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>Xem tất cả</Link>}
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
