import React, { useState } from 'react'
import Button from '../Button/Button'
import TextInput from '../Input/TextInput'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const EnterEmail = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const SendMailUser = async (e) => {
    e.preventDefault();
    try {
      const tokenreset = await axios.post("http://localhost:8000/mail", { email: email });
      localStorage.setItem("tokenreset", tokenreset.data);
      if (tokenreset) {
        navigate("/checkcode");
      }
      else {
        navigate("/enteremail");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="text-center">
      <form onSubmit={SendMailUser}>
        <div>
          <TextInput onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Nhập email" />
        </div>
        <div>
          <Button onClick={SendMailUser} icon={'navigate_next'}>
            Tiếp tục
          </Button>
        </div>
      </form>
    </div>
  )
}

export default EnterEmail
