import { createBrowserRouter } from "react-router-dom";
// import Home from "../pages/Home";
// import Profile from "../pages/Profile";
// import Explore from "../pages/Explore";
// import Notifications from "../pages/Notifications";
// import Messages from "../pages/Messages";
// import NotFound from "../pages/NotFound";
// import Layout from "../components/Layout";

// Import your page components here
// Create and export the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "profile/:username",
        element: <Profile />
      },
      {
        path: "explore",
        element: <Explore />
      },
      {
        path: "notifications",
        element: <Notifications />
      },
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;