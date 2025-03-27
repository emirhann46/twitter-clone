import { createBrowserRouter } from "react-router-dom";
import ExplorePage from "~/pages/explore";
import HomePage from "~/pages/home";
import NotFound from "~/pages/not-found";
import NotificationsPage from "~/pages/notifications";

const routes = createBrowserRouter([
  {
    path: "/",
    element:  <HomePage />,
  },

  {
    path: "/explore",
    element: <ExplorePage />,
  },
  {
    path: "/notifications",
    element: <NotificationsPage />,
  },
  {
    path: "*",
    element: <NotFound />, // 404 page 
  }
]);

export default routes;