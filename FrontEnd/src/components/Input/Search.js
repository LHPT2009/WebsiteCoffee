import React from 'react'

const Search = ({ placeholder, value, onChange, className }) => {
  return (
    <input
      className={`${className} border-outline-var border-style: solid rounded-full text-l2 mb-[16px] pt-[13px] px-[16px] pb-[13px] 
      hover:border-primary hover:rounded-[32px] focus:border-primary focus:rounded-[16px] focus:text-on-primary-cont focus:bg-primary-cont transition-all ease-in duration-100`}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      value={value}
    />
  )
}

export default Search
