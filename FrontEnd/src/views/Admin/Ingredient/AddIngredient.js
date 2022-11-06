import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddIngredient = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm nguyên liệu</b>
            </h2>
            <div>
                <h1>Tên nguyên liệu</h1>
                <input type={"text"} placeholder={"Tên nguyên liệu"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button">
                <a href="./Ingredients">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddIngredient
