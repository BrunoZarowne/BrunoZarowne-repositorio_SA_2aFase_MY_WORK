import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import CadastroMyWork from "../pages/CadastroMyWork.jsx";






const router = createBrowserRouter([
{path: "/",element:<LandingPage />},
{path:"cadastro",element:<CadastroMyWork />}



])

export default router

