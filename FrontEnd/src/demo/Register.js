import React from "react";
import Navbar from "./Navbar";

const Register = () => {
    return (
        <div>
            <Navbar />
            <h1>Register</h1>
            <input type={"text"} placeholder={"Tài khoản"} />
            <input type={"password"} placeholder={"mật khẩu"} />
            <input type={"password"} placeholder={"mật khẩu"} />
            <input type={"password"} placeholder={"mật khẩu"} />
            <input type={"password"} placeholder={"mật khẩu"} />
        </div>
    );
};

export default Register;
