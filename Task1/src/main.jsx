import { Children, lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App=lazy(()=>import('./App.jsx'));
const Home= lazy(()=>import('./components/Home.jsx')) ;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const About =lazy(()=>import('./components/pages/About.jsx')); 
const Contact =lazy(()=>import('./components/pages/Contact.jsx'));
const Blog =lazy(()=>import('./components/pages/Blog.jsx'));
const Faq =lazy(()=>import('./components/pages/Faq.jsx'));
const Portfolio =lazy(()=>import('./components/pages/Portfolio.jsx')) ;
const Services=lazy(()=>import('./components/pages/Services.jsx'));
const Team=lazy(()=>import('./components/pages/Team.jsx'));
const Work =lazy(()=>import('./components/pages/Work.jsx'));


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
    <Suspense fallback={"data is loading..."}>
   <RouterProvider router={router} />
    </Suspense>

)
