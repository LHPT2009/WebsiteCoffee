import jwt_decode from "jwt-decode";
const jwtdecode = () => {
    const clientToken = localStorage.getItem("token");
    const decode = jwt_decode(clientToken);
      if (decode) {
        return decode;
      } else {
        return {};
      }
  }
  
  export default jwtdecode;