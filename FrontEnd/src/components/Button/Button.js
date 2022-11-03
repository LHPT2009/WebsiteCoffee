import React from 'react'
import './button.css'

const STYLES = ['btn--primary--fill', 'btn--primary--outline']

const Button = ({ children, type, icon, onClick, buttonStyle, buttonCSS }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const onlyIcon = <span className="material-symbols-rounded">{icon}</span>

  const iconText = (
    <div className="flex">
      <span className="mr-2">
        <span class="material-symbols-rounded">{icon}</span>
      </span>
      <span>{children}</span>
    </div>
  )

  return (
    <button
      className={`btn ${checkButtonStyle} ${buttonCSS} hover:rounded-2xl active:rounded-2xl transition-all font-googleSansRegular pt-3 pb-[2.2rem] px-6`}
      onClick={onClick}
      type={type}
    >
      {children === '' ? onlyIcon : iconText}
    </button>
  )
}

export default Button
