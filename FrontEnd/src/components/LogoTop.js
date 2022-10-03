import React from "react";
import logoM from "../assets/images/logo.png";

export const LogoTop = () => {
  return (
    <div>
      <img
        className="mx-auto w-[250px] items-center leading-[22px] pt-[48px] pb-[40px]"
        src={logoM}
        alt="logo-cafe-bug-on"
      />
    </div>
  );
};
