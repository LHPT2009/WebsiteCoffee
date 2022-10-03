import React from "react";

const Button = (props) => {
  return (
    <div className="text-center items-center">
      <button className="bg-[#F8567B] rounded-full inline-flex justify-center mb-[20px] py-[10px] px-[12px] font-[700] text-white shadow-lg hover:bg-[#FB98AD] hover:rounded-[10px] hover:border-[2px] hover:border-style:solid hover:border-[#F8567B] w-[400px]">
        <p>{props.nameButton}</p>
      </button>
    </div>
  );
};

export default Button;
