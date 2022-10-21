import { useState , createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
const Login = () => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const LoginUser = async (e) => {
        e.preventDefault();
        try {
            const Auth = await axios.post("http://localhost:8000/auth/login", { username, password });
            localStorage.setItem("token",Auth.data.accessToken);
            if(Auth.data.role.rolename == "Admin"){
                navigate("/admin");
            }
            else{
                navigate("/user");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <Navbar/>
            <div className="text-center">
                <form onSubmit={LoginUser}>
                    <div>
                        <input
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            placeholder="Username"
                            className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
                        />
                    </div>

                    <div>
                        <input
                            name="password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            className="inline w-[400px] border-[2px] border-[#dddddd] border-style: solid rounded-full text-[18px] leading-[24px] mb-[10px] pt-[13px] px-[12px] pb-[13px] 
                hover:border-[#FB98AD] hover:duration-200 hover:rounded-[10px]
                focus:border-[#F8567B] focus:rounded-[10px] focus:duration-300"
                        />
                    </div>
                </form>
            </div>

            <div className="text-center items-center">
                <button
                    onClick={LoginUser}
                    className="bg-[#F8567B] rounded-full inline-flex justify-center mb-[20px] py-[10px] px-[12px] font-[700] text-white shadow-lg hover:bg-[#FB98AD] hover:rounded-[10px] hover:border-[2px] hover:border-style:solid hover:border-[#dddddd] w-[400px] transition-all active:border-black"
                >
                    <p>Đăng nhập</p>
                </button>
            </div>
        </div>
    )
};

export default Login;
