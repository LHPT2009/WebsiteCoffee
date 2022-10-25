import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const SendMail = () => {
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    const SendMailUser = async (e) => {
        e.preventDefault();
        try {
            const tokenreset = await axios.post("http://localhost:8000/mail", { email: email });
            localStorage.setItem("tokenreset",tokenreset.data);
            if(tokenreset){
                navigate("/checkcode");
            }
            else{
                navigate("/sendmail");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
      <div className="text-center">
        <div className="text-center">
            <form onSubmit={SendMailUser}>
                <div>
                    <input
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Mail bạn đã đăng ký tài khoản đó!"
                        className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
                    />
                    </div>
            </form>
        </div>
        <div className="text-center items-center">
            <button
            onClick={SendMailUser}
            className="bg-[#F8567B] rounded-full inline-flex justify-center mb-[20px] py-[10px] px-[12px] font-[700] text-white shadow-lg hover:bg-[#FB98AD] hover:rounded-[10px] hover:border-[2px] hover:border-style:solid hover:border-[#dddddd] w-[400px] transition-all active:border-black"
            >
            <p>Gửi</p>
            </button>
        </div>
      </div>
    )
}

export default SendMail
