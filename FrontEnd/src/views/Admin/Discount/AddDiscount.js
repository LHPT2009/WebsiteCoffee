import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
const AddDisCount = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [startdate, setStartDate] = useState("")
  const [enddate, setEndDate] = useState("")
  const navigate = useNavigate();
  const addProduct = async (e) => {
    e.preventDefault();
    const add = await axios.post(`http://localhost:8000/discount`, { name, price, startdate, enddate });
    if (add) {
      navigate("/admin/discount");
    } else {
      alert("them ko thanh cong!!!");
    }
  }
  return (
    <div>
      <form onSubmit={addProduct}>
        <h2 className="page-header">
          <b>Thêm sản phẩm</b>
        </h2>
        <div>
          <h1>Tên sản phẩm</h1>
          <input type={"text"} onChange={(e) => setName(e.target.value)} /> <br />
          <h1>Giá</h1>
          <input type={"text"} onChange={(e) => setPrice(e.target.value)} /> <br />
          <h1>Ngay bat dau</h1>
          <input type={"date"} onChange={(e) => setStartDate(e.target.value)} /> <br />
          <h1>Ngay key thuc</h1>
          <input type={"date"} onChange={(e) => setEndDate(e.target.value)} /> <br />
        </div>
        <div>
          <Button type="button" onClick={addProduct}>
            <a>
              Thêm
            </a>
          </Button>
          <Button type="button">
            <a href="./Products">
              Quay về
            </a>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddDisCount
