import React, {useState, useEffect} from 'react'

import axios from 'axios'

import logo from '../../../assets/images/icon.png'

import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'

const Positions = () => {
    const [id,setId] = useState("");
    const [position, setPosition] = useState([])
    useEffect(() => {
      axios.get('http://localhost:8000/position').then((res) => {
        setPosition(res.data)
      })
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Chức vụ
            </h2>
            <Button type="button">
                <a href="./AddPosition">
                Thêm chức vụ
                </a>
            </Button>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                        <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Mã chức vụ</th>
                                <th>Tên chức vụ</th>
                            </tr>
                        </thead>
                        <tbody>
                            {position.map((item) =>
                                <tr key={item._id}>
                                    <td>{item._id}</td>
                                    <td>{item.name}</td>
                                    <td style={{ minWidth: 100 }}>
                                        <Button><Link to={'/admin/EditPosition/'}>Sửa</Link></Button>|
                                        <Button><Link to={'/admin/DeletePosition/'}>Xóa</Link></Button>|
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

export default Positions
