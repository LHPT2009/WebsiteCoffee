import Button from '../Button/Button';
import TextInput from '../Input/TextInput';

import React, { useState } from 'react';
import jwt_decode from 'jwt-decode';
import { Navigate, useNavigate } from "react-router-dom";

const CheckCode = () => {
  const [Code, setCode] = useState("");
  const navigate = useNavigate();

  const CheckCodeUser = async (e) => {
    e.preventDefault();
    const rstoken = localStorage.getItem("tokenreset");
    const codeser = jwt_decode(rstoken).passcode;
    if (Code == codeser) {
      localStorage.setItem("checksuccess", true);
      navigate("/repass");
    } else {
      navigate("/checkcode");
    }
  };
  if (localStorage.getItem("tokenreset")) {
    return (
      <div className="text-center">
        <form onSubmit={CheckCodeUser}>
          <div>
            <TextInput onChange={(e) => setCode(e.target.value)} name="email" placeholder="Nhập mã xác thực" />
          </div>
          <div>
            <Button icon={'navigate_next'} onClick={CheckCodeUser}>
              Tiếp tục
            </Button>
          </div>
        </form>
      </div >
    )
  }
  else {
    return <Navigate to={"/enteremail"} />
  }
}
export default CheckCode
