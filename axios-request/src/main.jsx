import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style/index.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

//pages
import Home from './routes/Home';
import NewPost from './routes/NewPost';


const router = createBrowserRouter([
  {
    element: <App />, //i am showing which is the main element (is the container of my all application)
    children: 
    [
      {
        path: "/", //after, this create a NEW post.
        element:<Home />
      },      
      {
        path: "/new", //load all posts
        element: <NewPost />,
      },
    ],
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
