import React from "react";
import axios from "axios";

const SignIn = () => {
  return (
    <div>
      <div className="text-center">
        <div>
          <input
            className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
            type="text"
            placeholder="Username"
          />
        </div>
        <div>
          <input
            className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[20px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="text-center items-center">
        {/* Phần báo lỗi sai email: chưa viết */}
        <button
          className="w-[400px] bg-[#F8567B] rounded-full inline-flex justify-center 
                mt-0 mx-0 mb-[20px] pt-[11px] px-[12px] pb-[10px] text-[700] text-white shadow-lg	
                hover:bg-[#FB98AD]
                active:border-[2px] active:border-style: solid active:border-black active:bg-clip-content active:bg-[#FB98AD] active:p-[2px] active:h-[45px]"
        >
          <p>Đăng nhập</p>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
