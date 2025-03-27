import { createBrowserRouter } from "react-router-dom";
import MainLayout from "~/layouts/main";
import ExplorePage from "~/pages/explore";
import HomePage from "~/pages/home";
import NotFound from "~/pages/not-found";
import NotificationsPage from "~/pages/notifications";

const routes = createBrowserRouter([
  {
    path: "/",
    element:  <MainLayout />,
    children: [    
      {
        path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "notifications",
        element: <NotificationsPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]

  },

  
]);

export default routes;