import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default Router;
