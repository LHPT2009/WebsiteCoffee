import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddProductCategory = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm loại sản phẩm</b>
            </h2>
            <div>
                <h1>Tên loại</h1>
                <input 
                type={"text"} 
                /><br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button">
                <a href="./ProductCategories">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddProductCategory
