import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
const Logout = () => {

    const navigate  = useNavigate()

    useEffect(()=>{
        localStorage.removeItem("loggedInUser")
        navigate("/auth/login")
    })

    return <></>
}

export default Logout