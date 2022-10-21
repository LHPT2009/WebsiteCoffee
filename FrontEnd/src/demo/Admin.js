import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

import { useEffect, useState , useContext  } from "react";
import { Navigate } from "react-router-dom";
import authheader from "../header/auth-header";
import jwtdecode from "../header/jwt-decode";
const Admin = () => {
  const [loadUser,setLoadUser] = useState([]);
    useEffect (()=>{
    axios.get("http://localhost:8000/user",{headers: authheader()}).then((res) => {setLoadUser(res.data)})},[]);
    if(localStorage.getItem("token")){
      if(jwtdecode().role == "Admin" || jwtdecode().role == "SuperAdmin"){  
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
      }else{
          return <Navigate to={"/user"}/>
      }
    }else{
      return <Navigate to={"/login"}/>
    }
};
export default Admin;