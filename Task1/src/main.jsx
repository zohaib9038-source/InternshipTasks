import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Blog from './components/pages/Blog.jsx';
import Faq from './components/pages/Faq.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Services from './components/pages/Services.jsx';
import Team from './components/pages/Team.jsx';
import Work from './components/pages/Work.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"about",
            element:<About />
        },
        {
            path:"contact",
            element:<Contact />
        },
        {
            path:"blog",
            element:<Blog />
        },
        {
            path:"faq",
            element:<Faq />
        },
        {
            path:"portfolio",
            element:<Portfolio />
        },
        {
            path:"services",
            element:<Services />
        },
        {
            path:"team",
            element:<Team />
        },
        {
            path:"work",
            element:<Work />
        }
    ]
  },
]);

let root=createRoot(document.getElementById('root'))
root.render(
   <RouterProvider router={router} />
)
