import React, {useState, useEffect} from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Recipes = () => {
    const [id,setId] = useState("");
    const [recipe, setRecipe] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/sizeproduct').then((res) => {
        setRecipe(res.data)
      })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Công thức
            </h2>
            <Button type="button">
                <a href="./AddRecipe">
                Thêm công thức
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                        <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Tên nguyên liệu</th>
                                <th>Số lượng</th>
                                <th>Đơn vị</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipe.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.productid}</td>
                                    <td>{item.ingredientid}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.unit}</td>
                                    <td style={{ minWidth: 100 }}>
                                        <Button><Link to={'/admin/EditRecipe/'}>Sửa</Link></Button>|
                                        <Button><Link to={'/admin/DeleteRecipe/'}>Xóa</Link></Button>|
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

export default Recipes
