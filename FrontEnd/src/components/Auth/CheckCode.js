import React from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

const CheckCode = () => {
  return (
    <div className="text-center">
      <div>
        <TextInput name="email" placeholder="Nhập mã xác thực" />
      </div>
      <div>
        <Button icon={'navigate_next'} onClick={''}>
          Tiếp tục
        </Button>
      </div>
    </div>
  )
}

export default CheckCode
