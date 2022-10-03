import React, { useId, useRef, useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = inputs;

  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const addUser = () => {
    // e.preventDefault();
    //console.log(inputs);
    axios
      .post("http://localhost:8000/user", {
        ...inputs,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="text-center">
        <div>
          <input
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
            className="inline w-[400px] border-[2px] border-[#dddddd] border-style:solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
            type="text"
            placeholder="Username"
          />
        </div>
        {/* <div>
          <input
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            className="inline w-[400px] border-[2px] border-[#dddddd] border-style:solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
            type="text"
            placeholder="Email"
          />
        </div> */}
        <div>
          <input
            name="password"
            value={inputs.password || ""}
            onChange={handleChange}
            className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[20px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      {/* Phần báo lỗi sai email: chưa viết */}
      {/* <Button nameButton="Đăng ký" /> */}
      <div className="text-center items-center">
        <button
          onClick={addUser}
          className="bg-[#F8567B] rounded-full inline-flex justify-center mb-[20px] py-[10px] px-[12px] font-[700] text-white shadow-lg hover:bg-[#FB98AD] hover:rounded-[10px] hover:border-[2px] hover:border-style:solid hover:border-[#dddddd] w-[400px] transition-all active:border-black"
        >
          <p>Đăng nhập</p>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
