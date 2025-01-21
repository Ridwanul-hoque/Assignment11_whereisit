import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Items from "../pages/Items/Items";
import ItemsDetail from "../ItemsDetail/ItemsDetail";
import AddItems from "../pages/AddItems/AddItems";
import MyItems from "../pages/Myitems/MyItems";
import RecoveredItems from "../pages/RecoveredItems/RecoveredItems";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/non-recovered/:id',
        element: <PrivateRoute><ItemsDetail></ItemsDetail></PrivateRoute>,
        loader: ({ params }) => fetch(`https://whereisit-server-side.vercel.app/non-recovered/${params.id}`)
      },
      {
        path: 'addItems',
        element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
      },
      {
        path: 'recoverItems',
        element: <PrivateRoute><RecoveredItems></RecoveredItems></PrivateRoute>
      },
      {
        path: 'myItems',
        element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
      },
      {
        path: 'seemore',
        element: <PrivateRoute><Items></Items></PrivateRoute>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'logIn',
        element: <Login></Login>
      }
    ]

  },
]);

export default router