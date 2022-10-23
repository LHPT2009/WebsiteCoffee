import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useEffect, useState   } from "react";
import { Link } from "react-router-dom";
const Role = () => {
  const [loadRole,setLoadRole] = useState([]);
    useEffect (()=>{
    axios.get("http://localhost:8000/role").then((res) => {setLoadRole(res.data)})},[]);
        return (
            <div>
              <Navbar />
              <h1>Welcome to list Role</h1>
                {loadRole.map(((item) => (
                  <div key={item._id}>
                    <Link to={"/role/"+item._id}>{item.rolename}</Link>
                  </div>
                )))}
        </div>
        );
};
export default Role;