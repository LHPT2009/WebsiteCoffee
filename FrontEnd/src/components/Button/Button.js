import React from 'react'
import './button.css'

const STYLES = ['btn-fill', 'btn-outline', 'btn-text', 'btn-elevate', 'btn-tonal', 'btn-danger']
const TYPE = ['button']

const Button = ({ children, type, icon, onClick, btnStyle, btnCSS }) => {
  const checkbtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
  const checkType = TYPE.includes(type) ? type : TYPE[0]

  const onlyIcon = <span className="material-symbols-rounded flex items-center p-3">{icon}</span>

  const onlyText = <span className='px-6 py-3'>{children}</span>

  const iconText = (
    <div className="flex items-center px-6 py-3 gap-2">
      <span className="">
        <span className="material-symbols-rounded flex items-center">{icon}</span>
      </span>
      <span>{children}</span>
    </div>
  )

  return (
    <button
      className={`btn ${checkbtnStyle} ${btnCSS} transition-all ease-in-out duration-300`}
      onClick={onClick}
      type={`${checkType}`}
    >
      {children === '' && onlyIcon}
      {icon === '' && onlyText}
      {children != '' && icon != '' && iconText}
    </button>
  )
}

export default Button
