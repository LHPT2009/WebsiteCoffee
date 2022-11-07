import React, { useEffect, useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import './sidebar.css'

import logo from '../../../assets/images/logo.png'

import sidebarNav from './sidebarNav'

import SubMenu from './subMenu'

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const location = useLocation()

  useEffect(() => {
    const curPath = window.location.pathname.split('/')[1]
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath)

    setActiveIndex(curPath.length === 0 ? 0 : activeItem)
  }, [location])

  return (
    <div className="sidebar">
      <Link to={'/'}>
        <div className="sidebar__logo">
          <img src={logo} alt="cafe bug on" />
        </div>
      </Link>
      <div className="sidebar__item">
        {sidebarNav.map((nav, index) => {
          return <SubMenu item={nav} key={`nav-${index}`} />
        })}
      </div>
    </div>
  )
}

export default Sidebar
