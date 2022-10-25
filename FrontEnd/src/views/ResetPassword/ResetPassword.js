import React, { useState } from 'react'
import jwt_decode from 'jwt-decode'
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';

const ResetPassword = () => {
    const [password,setPassword] = useState("");
    const [rePassword,setrePassword] = useState("");
    const navigate = useNavigate();

    const ResetPass = async (e) => {
        e.preventDefault();
            const rstoken = localStorage.getItem("tokenreset");
            const email = jwt_decode(rstoken).email;
            if(password == rePassword){
                const updateUser = await axios.post("http://localhost:8000/mail/reset", { email: email ,password: password});
                if(updateUser){
                    localStorage.removeItem("checksuccess");
                    localStorage.removeItem("tokenreset");
                    navigate("/login");
                }
                else{
                    navigate("/reset");
                }
            }else{
                navigate("/reset");
            }
    };

    if(localStorage.getItem("checksuccess")){
        return (
            <div className="text-center">
              <div className="text-center">
                  <form onSubmit={ResetPass}>
                      <div>
                          <input
                              name="password"
                              onChange={(e) => setPassword(e.target.value)}
                              type="password"
                              placeholder="Password mới của bạn"
                              className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                      hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                      focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
                          />
                        </div>
                        <div>
                          <input
                              name="password"
                              onChange={(e) => setrePassword(e.target.value)}
                              type="password"
                              placeholder="Nhập lại Password của bạn"
                              className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                      hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                      focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
                          />
                        </div>
                  </form>
              </div>
              <div className="text-center items-center">
                  <button
                  onClick={ResetPass}
                  className="bg-[#F8567B] rounded-full inline-flex justify-center mb-[20px] py-[10px] px-[12px] font-[700] text-white shadow-lg hover:bg-[#FB98AD] hover:rounded-[10px] hover:border-[2px] hover:border-style:solid hover:border-[#dddddd] w-[400px] transition-all active:border-black"
                  >
                  <p>Gửi</p>
                  </button>
              </div>
            </div>
        )
    }else{
        return <Navigate to={"/checkcode"}/>
    }
}

export default ResetPassword
