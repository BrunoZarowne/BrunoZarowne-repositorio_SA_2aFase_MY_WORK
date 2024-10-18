import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import CadastroMyWork from "../pages/CadastroMyWork.jsx";
import Login from "../pages/Login.jsx";






const router = createBrowserRouter([
{path: "/",element:<LandingPage />},
{path:"cadastro",element:<CadastroMyWork />},
{path:"Login",element:<Login />}



])

export default router

