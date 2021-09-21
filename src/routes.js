import LoginPage from "views/Pages/LoginPage.js";
import RegisterPage from "views/Pages/RegisterPage.js";
import RecoverPassword from "views/Pages/RecoverPass.js";
import Dashboard from "views/Pages/Dashboard.js";
import ProjectDetail from "views/Pages/ProjectDetail.js";
import Landing from "views/Pages/Landing";

var dashRoutes = [
  {
    path: "/login",
    name: "Login Page",
    component: LoginPage,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register Page",
    component: RegisterPage,
    layout: "/auth"
  },
  {
    path: "/recoverpass",
    name: "Recover Password",
    component: RecoverPassword,
    layout: "/auth"
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/projectdetail",
    name: "Project Detail",
    component: ProjectDetail,
    layout: "/admin"
  },
];
export default dashRoutes;
