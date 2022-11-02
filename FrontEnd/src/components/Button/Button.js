import React from 'react'
import './button.css'

const STYLES = ['btn--primary--fill', 'btn--primary--outline']

const Button = ({
  children,
  type,
  icon,
  onClick,
  buttonStyle,
  buttonSize,
  buttonCSS,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const onlyIcon = <ion-icon name={`${icon}`}></ion-icon>

  const iconText = (
    <div className="flex">
      <span className="mr-2">
        <ion-icon name={`${icon}`}></ion-icon>
      </span>
      <span>{children}</span>
    </div>
  )

  return (
    <button
      className={`btn ${checkButtonStyle} ${buttonCSS} transition-all font-googleSansRegular`}
      onClick={onClick}
      type={type}
    >
      {children === '' ? onlyIcon : iconText}
    </button>
  )
}

export default Button