import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

const AddPosition = () => {
    return (
        <div>
            <h2 className="page-header">
                <b>Thêm chức vụ</b>
            </h2>
            <div>
                <h1>Tên chức vụ</h1>
                <input type={"text"} placeholder={"Tên chức vụ"}/> <br/>
            </div>
            <div>
            <Button type="button" btnCSS={'h-[44px] mr-2'} icon="add">
                <a>
                Thêm
                </a>
            </Button>
            <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
                <a href="./Positions">
                Quay về
                </a>
            </Button>
            </div>
        </div>
    )
}

export default AddPosition
