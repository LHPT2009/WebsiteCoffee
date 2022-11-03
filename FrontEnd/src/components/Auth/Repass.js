import React from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'

const Repass = () => {
  return (
    <div className="text-center">
      <div>
        <TextInput
          name="password"
          onChange={''}
          type="password"
          placeholder="Mật khẩu mới"
        />
      </div>
      <div>
        <TextInput
          name="re-password"
          onChange={''}
          type="password"
          placeholder="Xác nhận mật khẩu"
        />
      </div>
      <div>
        <Button icon={'navigate_next'} onClick={''}>
          Tiếp tục
        </Button>
      </div>
    </div>
  )
}

export default Repass
