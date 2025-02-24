import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";
import { NetWorck } from "./pages/networck";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/admin',
    element: <Admin/>
  },
  {
    path:'/admin/social',
    element: <NetWorck/>
  }
])

export { router }