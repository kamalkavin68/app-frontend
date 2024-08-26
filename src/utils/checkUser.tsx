import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function checkUser(navigate: ReturnType<typeof useNavigate>) {
    const url = "http://127.0.0.1:8000/api/v1/user/users/me/";
    const accessToken = localStorage.getItem("accessToken");
    const headers = {
      "accept": "application/json",
      "Authorization": `Bearer ${accessToken}`
    };
  
    axios.get(url, { headers })
      .then((response) => {
        console.log(response.data);
        // navigate(lastUrl)

      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  }