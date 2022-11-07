import React from 'react'

const TextInput = ({
  name,
  placeholder,
  onChange,
  type,
  className,
  required,
  defaultValue,
  disabled,
}) => {
  return (
    <input
      className={`${className} border-[1px] border-outline-var border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
      hover:border-outline focus:border-[1px] hover:rounded-2xl focus:border-outline focus:rounded-2xl transition-all`}
      onChange={onChange}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      defaultValue={defaultValue}
      disabled={disabled}
    ></input>
  )
}

export default TextInput
