import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'
import { Link } from 'react-router-dom'
import TextInput from '../../../components/Input/TextInput'

const AddProductCategory = () => {
  return (
    <div className="font-googleSansRegular">
      <h1 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
        Thêm loại
      </h1>
      <TextInput
        type={'text'}
        className={'w-[400px]'}
        placeholder={'Tên loại'}
      />
      <div className="mt-10">
        <Button type="button" btnCSS="h-11 mr-2" icon="add">
          Thêm
        </Button>
        <Button type="button" btnCSS="h-11" icon="navigate_before">
          <Link className="hover:text-white" to="../productcategories">
            Quay về
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default AddProductCategory
