import React, { useState } from 'react'
import './topnav.css'

const SearchAdmin = ({ placeholder, onChange, value }) => {
  return (
    <div className="topnav__search">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <i className="bx bx-search"></i>
    </div>
  )
}

export default SearchAdmin
