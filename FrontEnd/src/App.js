import Login from "./demo/Login";
import Register from "./demo/Register";
import Home from "./demo/Home";
import Admin from "./demo/Admin";
import User from "./demo/User";
import Role from "./demo/role";
import DetailRole from "./demo/detailRole";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="font-roboto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/role" element={<Role />} />
        <Route path="/role/:id" element={<DetailRole />}/>
      </Routes>
    </div>
  );
}

export default App;
