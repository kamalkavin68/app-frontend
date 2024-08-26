import {
    createBrowserRouter,
} from "react-router-dom";


import Register from "../pages/users/Register";
import App from "../App";
import Login from "../pages/users/Login";
import Logout from "../pages/users/Logout";
import ProfilePage from "../pages/users/ProfilePage";

 const router = createBrowserRouter([
    { path: "/register", element: <Register></Register>, },
    { path: "/login", element: <Login></Login>, },
    { path: "/logout", element: <Logout></Logout>, },
    { path: "/", element: <App></App>, children:[
        {path:"/profile", element: <ProfilePage></ProfilePage>}
    ]},
   
]);

export default router;