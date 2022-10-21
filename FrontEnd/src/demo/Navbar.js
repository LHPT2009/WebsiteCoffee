import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>login</Link>
            <Link to={"/register"}>register</Link>
            <button
            onChange={localStorage.removeItem("role")}
            >userLogout</button>
        </div>
    );
};

export default Navbar;
