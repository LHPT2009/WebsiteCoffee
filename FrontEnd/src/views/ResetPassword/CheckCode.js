import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from "react-router-dom";
const CheckCode = () => {
    const [Code,setCode] = useState("");
    const navigate = useNavigate();

    const CheckCodeUser = async (e) => {
        e.preventDefault();
            const rstoken = localStorage.getItem("tokenreset");
            const codeser = jwt_decode(rstoken).passcode;
            if(Code == codeser){
                localStorage.setItem("checksuccess", true);
                navigate("/reset");
            }else{
                navigate("/checkcode");
            }
    };

    if(localStorage.getItem("tokenreset")){
        return (
            <div className="text-center">
              <div className="text-center">
                  <form onSubmit={CheckCodeUser}>
                      <div>
                          <input
                              name="code"
                              onChange={(e) => setCode(e.target.value)}
                              type="text"
                              placeholder="Code đã được gửi đến Mail của bạn"
                              className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                      hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                      focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
                          />
                          </div>
                  </form>
              </div>
              <div className="text-center items-center">
                  <button
                  onClick={CheckCodeUser}
                  className="bg-[#F8567B] rounded-full inline-flex justify-center mb-[20px] py-[10px] px-[12px] font-[700] text-white shadow-lg hover:bg-[#FB98AD] hover:rounded-[10px] hover:border-[2px] hover:border-style:solid hover:border-[#dddddd] w-[400px] transition-all active:border-black"
                  >
                  <p>Kiểm tra</p>
                  </button>
              </div>
            </div>
          );
    }
    else{
        return <Navigate to={"/sendmail"}/>
    }
}

export default CheckCode
