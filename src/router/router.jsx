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


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/non-recovered/:id',
        element: <ItemsDetail></ItemsDetail>,
        loader: ({ params }) => fetch(`http://localhost:5000/non-recovered/${params.id}`)
      },
      {
        path: 'addItems',
        element: <AddItems></AddItems>
      },
      {
        path: 'recoverItems',
        element: <RecoveredItems></RecoveredItems>
      },
      {
        path: 'myItems',
        element: <MyItems></MyItems>
      },
      {
        path: 'seemore',
        element: <Items></Items>
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