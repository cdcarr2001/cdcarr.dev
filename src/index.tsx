import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@pages/home/Home.tsx'
import About from '@pages/about/About.tsx'
import Contact from '@pages/contact/Contact.tsx'
import Projects from '@pages/projects/Projects.tsx'
import MainLayout from '@layouts/main/MainLayout'
import NotFound from '@pages/not_found/NotFound'
import Project from '@pages/projects/components/Project'

import './index.css'

/** Router for browser pages */
const router = createBrowserRouter([
    {
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/projects/:projectName",
                element: <Project/>
            },
            {
                path: "/contact",
                element: <Contact/>
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound/>
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);