import React from 'react'
import './button.css'

const STYLES = ['btn-fill', 'btn-outline']

const Button = ({ children, type, icon, onClick, btnStyle, btnCSS }) => {
  const checkbtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0]

  const onlyIcon = <span className="material-symbols-rounded">{icon}</span>

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
      className={`btn ${checkbtnStyle} ${btnCSS} hover:rounded-2xl active:rounded-2xl transition-all font-googleSansRegular pt-3 pb-[2.2rem] px-6`}
      onClick={onClick}
      type={type}
    >
      {children === '' ? onlyIcon : iconText}
    </button>
  )
}

export default Button
