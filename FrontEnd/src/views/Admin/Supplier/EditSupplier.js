import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const EditSupplier = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Chỉnh sửa nhà cung cấp</b>
            </h2>
            <div>
                <h1>Tên nhà cung cấp</h1>
                <input type={"text"} placeholder={"Tên nhà cung cấp"}/> <br/>
            </div>
            <div>
            <Button type="button">
                <a>
                Sửa
                </a>
            </Button>
            <Button type="button">
                <a href="./Suppliers">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default EditSupplier
