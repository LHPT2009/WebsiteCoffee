import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import TextInput from '../../../components/Input/TextInput';
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
    <div className="font-googleSansRegular">
      <form onSubmit={addProduct}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Thêm mã giảm giá</b>
        </h2>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên mã</div>
          <TextInput
            placeholder={'Tên mã'}
            type="text"
            required={'required'}
            onChange={(e) => setName(e.target.value)}
            className="inline-block w-[400px]"
          /><br/>
          <div className="inline-block w-[200px] mr-3">Giá</div>
          <TextInput
            placeholder={'Giá'}
            type="text"
            required={'required'}
            onChange={(e) => setPrice(e.target.value)}
            className="inline-block w-[400px]"
          />
          <div className="inline-block w-[200px] mx-3">đ</div>
          <br/>
          <div className="inline-block w-[200px] mr-3">Ngày bắt đầu</div>
          <TextInput
            placeholder={'Ngày bắt đầu'}
            type="date"
            required={'required'}
            onChange={(e) => setStartDate(e.target.value)}
            className="inline-block w-[400px]"
          /><br/>
          <div className="inline-block w-[200px] mr-3">Ngày kết thúc</div>
          <TextInput
            placeholder={'Ngày kết thúc'}
            type="date"
            required={'required'}
            onChange={(e) => setEndDate(e.target.value)}
            className="inline-block w-[400px]"
          /><br/>
        </div>
        <div className="mt-5">
          <Button type="button" btnCSS={'h-[44px] mr-2'} icon="add" onClick={addProduct} className="hover:text-white">
              Thêm
          </Button>
          <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
            <a className="hover:text-white" href="./Discount">
              Quay về
            </a>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default AddDisCount
