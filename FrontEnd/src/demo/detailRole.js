import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailRole = () => {
        const {id} = useParams();
        const [role,setRole] = useState([]);
        useEffect(() => {
                axios.get(`http://localhost:8000/role/${id}`).then((res) =>setRole(res.data));
        },[]);
        return (
            <div>
              <h1>Detail Role</h1>
              <p>{role._id}</p>
              <p>{role.rolename}</p>
              <p>{role.createdAt}</p>
              <p>{role.updatedAt}</p>
        </div>
        );
};
export default DetailRole;