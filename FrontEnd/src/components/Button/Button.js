import React from 'react'
import './button.css'

const STYLES = [
  'btn--primary--solid',
  'btn--warning--solid',
  'btn--success--solid',
  'btn--danger--solid',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--success--outline',
  'btn--danger--outline',
]

const SIZES = ['btn--small', 'btn--medium']

const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {
  return (
    <button
      className={`btn ${setButtonStyle} ${setButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
