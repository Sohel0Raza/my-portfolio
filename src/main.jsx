import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
         <RouterProvider router={router} />
)
