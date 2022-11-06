import React, { useState, useEffect } from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Ingredients = () => {
    const [id, setId] = useState("");
    const [ingredient, setIngredient] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/ingredient').then((res) => {
            setIngredient(res.data)
        })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Nguyên liệu
            </h2>
            <Button type="button">
                <a href="./AddIngredient">
                    Thêm nguyên liệu
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <table className='table table-striped table-hover table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Mã nguyên liệu</th>
                                        <th>Tên nguyên liệu</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ingredient.map((item) =>
                                        <tr key={item._id}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td style={{ minWidth: 100 }}>
                                                <Button><Link to={`/admin/editingredient/${item._id}`}>Sửa</Link></Button>|
                                                <Button><Link to={`/admin/deleteingredient/${item._id}`}>Xóa</Link></Button>|
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ingredients
