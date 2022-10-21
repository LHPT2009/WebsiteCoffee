import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import authheader from "../header/auth-header";
const Admin = () => {
  const [loadUser,setLoadUser] = useState([]);
  //const navigate = useNavigate();
    useEffect (()=>{
    axios.get("http://localhost:8000/user",{headers: authheader()}).then((res) => {setLoadUser(res.data)})},[]);
      return (
        <div>
          <Navbar />
          <h1>Welcome to your Admin</h1>
        {loadUser.map(((item) => (
          <div key={item._id}>
            <p>{item.username}</p>
            <p>{item.password}</p>
          </div>
        )))}
    </div>
    );
};
export default Admin;