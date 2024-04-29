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
