import React from 'react'
import './button.css'

const STYLES = ['btn-fill', 'btn-outline']
const TYPE = ['button']

const Button = ({ children, type, icon, onClick, btnStyle, btnCSS }) => {
  const checkbtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]
  const checkType = TYPE.includes(type) ? type : TYPE[0]

  const onlyIcon = <span className="material-symbols-rounded">{icon}</span>

  const onlyText = <span>{children}</span>

  const iconText = (
    <div className="flex">
      <span className="mr-2">
        <span className="material-symbols-rounded">{icon}</span>
      </span>
      <span>{children}</span>
    </div>
  )

  return (
    <button
      className={`btn ${checkbtnStyle} ${btnCSS} transition-all font-googleSansRegular pt-3 pb-[2.2rem] px-6 hover:rounded-2xl`}
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
