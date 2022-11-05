import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const EditIngredient = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa nguyên liệu</b>
            </h2>
            <div>
                <h1>Tên nguyên liệu</h1>
                <input type={"text"} placeholder={"Tên nguyên liệu"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Sửa
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

export default EditIngredient
