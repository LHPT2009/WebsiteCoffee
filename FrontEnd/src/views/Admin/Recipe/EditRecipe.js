import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const EditRecipe = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa công thức</b>
            </h2>
            <div>
                <h1>Tên sản phẩm</h1>
                <input type={"text"} placeholder={"Tên sản phẩm"}/> <br/>
                <h1>Tên nguyên liệu</h1>
                <input type={"text"} placeholder={"Tên nguyên liệu"}/> <br/>
                <h1>Số lượng</h1>
                <input type={"text"} placeholder={"Số lượng"}/> <br/>
                <h1>Đơn vị</h1>
                <input type={"text"} placeholder={"Đơn vị"}/> <br/>
            </div>
            <div>
            <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit">
                <a>
                Sửa
                </a>
            </Button>
            <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                <a href="./Recipes">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default EditRecipe
