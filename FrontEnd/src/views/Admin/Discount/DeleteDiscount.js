import React, { useState, useEffect } from 'react'

import axios from 'axios'

import Button from '../../../components/Button/Button'

import { useParams } from 'react-router-dom'

import { useNavigate } from "react-router-dom";

import TextInput from '../../../components/Input/TextInput';

const DeleteDiscount = () => {
  const { id } = useParams();
  const [disCount, setDisCount] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/discount/${id}`).then((res) => setDisCount(res.data));
  }, []);

  const deleteDiscount = async (e) => {
    e.preventDefault();
    const del = await axios.delete(`http://localhost:8000/discount/${id}`);
    if (del) {
      navigate("/admin/discount");
    } else {
      alert("Xoa ko thanh cong!!!");
    }
  }
  return (
    <div className="font-googleSansRegular">
      <form onSubmit={deleteDiscount}>
        <h2 className="font-googleSansBold mb-10 uppercase text-primary text-[24px]">
          <b>Xóa mã giảm giá</b>
        </h2>
        <h1 className='font-googleSansBold mb-10'>Bạn có chắc chắn muốn xóa mã giảm giá này không?</h1>
        <div>
          <div className="inline-block w-[200px] mr-3">Tên mã</div>
            <TextInput
                placeholder={'Tên mã'}
                type="text"
                defaultValue={disCount.name}
                className="inline-block w-[400px]"
                disabled={'disabled'}
            /> <br />
          <div className="inline-block w-[200px] mr-3">Giá</div>
            <TextInput
                placeholder={'Giá'}
                type="text"
                defaultValue={disCount.price}
                className="inline-block w-[400px]"
                disabled={'disabled'}
            /> <br />
          <div className="inline-block w-[200px] mr-3">Ngày bắt đầu</div>
            <TextInput
                placeholder={'Ngày bắt đầu'}
                type="date"
                defaultValue={disCount.startdate}
                className="inline-block w-[400px]"
                disabled={'disabled'}
            /> <br />
          <div className="inline-block w-[200px] mr-3">Ngày kết thúc</div>
            <TextInput
                placeholder={'Ngày kết thúc'}
                type="date"
                defaultValue={disCount.enddate}
                className="inline-block w-[400px]"
                disabled={'disabled'}
            /> <br />
        </div>
        <div className="mt-5">
          <Button type="button" btnCSS={'h-[44px] mr-2'} icon="edit" onClick={deleteDiscount} className="hover:text-white">
            Xóa
          </Button>
          <Button type="button" btnCSS={'h-[44px]'} icon="navigate_before">
            <a className="hover:text-white" href="../Discount">Quay về</a>
          </Button>
        </div>
      </form>
    </div>
  )
}

export default DeleteDiscount
