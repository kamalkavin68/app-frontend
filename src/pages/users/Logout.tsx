import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {

    const navigate = useNavigate();
    
    useEffect(()=>{
        localStorage.removeItem("accessToken");
        navigate("/");
    }, [navigate])

    
    return(
        <h2>Logout</h2>
    )
}