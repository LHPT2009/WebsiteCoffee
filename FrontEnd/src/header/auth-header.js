const authheader = () => {
    const clientToken = localStorage.getItem("token");
      if (clientToken) {
        return { "authtoken": "Breare "+clientToken };
      } else {
        return {};
      }
  }
  
  export default authheader;