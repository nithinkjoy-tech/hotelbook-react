export const setAuthToken=(token)=>{
    localStorage.setItem("token",token)
}

export function logout(){
    localStorage.removeItem("token")
}

export default {logout};