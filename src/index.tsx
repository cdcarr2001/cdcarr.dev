import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router, Routes, Route } from 'react-router'
import Home from '@pages/home/Home.tsx'
import About from '@pages/about/About.tsx'
import Contact from '@pages/contact/Contact.tsx'
import Projects from '@pages/projects/Projects.tsx'
import MainLayout from '@layouts/main/MainLayout'
import NotFound from '@pages/not_found/NotFound'
import Project from '@pages/projects/components/Project'

import './index.css'
import '@layouts/layouts.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            <Routes>
                <Route element={<MainLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/:projectName" element={<Project/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Route>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </Router>
    </StrictMode>,
);