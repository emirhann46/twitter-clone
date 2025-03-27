import { createBrowserRouter } from "react-router-dom";
import HomePage from "~/pages/home";
// import Home from "../pages/Home";
// import Profile from "../pages/Profile";
// import Explore from "../pages/Explore";
// import Notifications from "../pages/Notifications";
// import Messages from "../pages/Messages";
// import NotFound from "../pages/NotFound";
// import Layout from "../components/Layout";

// Import your page components here
// Create and export the router
const routes = createBrowserRouter([
  {
    path: "/",
    element:  <HomePage />,
  },
  {
    path: "/profile",
    element: <div>Profile</div>,
  },
  {
    path: "/explore",
    element: <div>Explore</div>,
  },
  {
    path: "/notifications",
    element: <div>Notifications</div>,
  },
]);

export default routes;