import jwtDecode from "jwt-decode";
const tokenKey="token"

function logout(){
    localStorage.removeItem(tokenKey)
}

function getCurrentUser(){
    try {
        const jwt = localStorage.getItem(tokenKey);
        console.log(jwtDecode(jwt),"jtt")
        return jwtDecode(jwt);
      } catch (ex) {
          return null
      } 
}

export const setAuthToken=(token)=>{
    localStorage.setItem("token",token)
}
// export function logout(){
//     localStorage.removeItem("token")
// }
export default{
    logout,getCurrentUser
}