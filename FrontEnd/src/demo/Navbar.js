import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
    const Logout = () => {
        const user = localStorage.getItem("token");
        if(user){
            localStorage.removeItem("token");
            navigate("/user"); 
        }else{
            navigate("/login");
        }
    };
    return (
        <div>
            <form onSubmit={Logout}>
                <Link to={"/"}>Home</Link>
                <Link to={"/login"}>login</Link>
                <Link to={"/register"}>register</Link>
                <button type="submit">Logout</button>
            </form>
        </div>
    );
};

export default Navbar;
