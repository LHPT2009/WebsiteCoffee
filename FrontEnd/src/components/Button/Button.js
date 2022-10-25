import React from 'react'
import './button.css'

const STYLES = ['btn--primary--fill', 'btn--primary--outline']

const ICON = ['btn--icon--false', 'btn--icon--true']

const SIZES = ['btn--medium', 'btn--large']

const Button = ({
  children,
  type,
  icon,
  onClick,
  buttonStyle,
  buttonIcon,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]

  const checkButtonIcon = ICON.includes(buttonIcon) ? buttonIcon : ICON[0]

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonIcon} ${checkButtonSize} transition-all font-googleSansRegular`}
      onClick={onClick}
      type={type}
    >
      <span className="mr-2">
        <ion-icon name={`${icon}`}></ion-icon>
      </span>
      {children}
    </button>
  )
}

export default Button
