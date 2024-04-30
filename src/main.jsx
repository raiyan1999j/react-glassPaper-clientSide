import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './ContextProvider/ContextProvider.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Authentication/Login/Login.jsx'
import Registration from './Authentication/Registration/Registration.jsx'
import Home from './Component/Home/Home.jsx';
import PrivetRoute from './PrivetRoute/PrivetRoute.jsx'
import AddItem from './Component/AddItem/AddItem.jsx'
import Details from './DetailsView/Details.jsx'
import MyItem from './Component/MyItem/MyItem.jsx'
import UpdatePage from './Component/UpdatePage/UpdatePage.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/registration',
        element:<Registration/>
      },
      {
        path:'/home',
        element:<Home/>,
      },
      {
        path:'/addItem',
        element:<PrivetRoute><AddItem/></PrivetRoute>
      },
      {
        path:'/details/:id',
        element:<PrivetRoute><Details/></PrivetRoute>,
        loader:async ({params})=>{
          const step1 = await fetch(`http://localhost:5000/getDetails/${params.id}`);

          const step2 = await step1.json();

          return step2;
        }
      },
      {
        path:'/myItem',
        element:<PrivetRoute><MyItem/></PrivetRoute>
      },
      {
        path:'/getSpecific/:id',
        element:<PrivetRoute><UpdatePage/></PrivetRoute>,
        loader:async ({params})=>{
          const step1 = await fetch(`http://localhost:5000/getSpecific/${params.id}`);

          const step2 = await step1.json();

          return step2;
        }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>,
)
