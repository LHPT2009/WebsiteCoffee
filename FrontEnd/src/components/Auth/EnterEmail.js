import React from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

const EnterEmail = () => {
  return (
    <div className="text-center">
      <div>
        <TextInput name="email" placeholder="Nhập email" />
      </div>
      <div>
        <Button icon={'navigate_next'} onClick={''}>
          Tiếp tục
        </Button>
      </div>
    </div>
  )
}

export default EnterEmail
