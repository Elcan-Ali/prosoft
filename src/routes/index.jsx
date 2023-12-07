import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "../layout";
import Home from "../pages/Home";
import Project from "../pages/Project";
import Blogs from "../pages/Blogs";
import Contact from "../pages/Contact";
import Service from "../pages/Service";
import About from "../pages/About";
import VacancyDetail from "../pages/VacancyDetail";
import ProjectDetail from "../pages/ProjectDetail";
import ErrorPage from "../pages/ErrorPage";
import BlogDetail from "../pages/BlogDetail";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Project />} />
        <Route path="project/:catId/:projectName" element={<ProjectDetail />} />
        <Route path="blog/:blogId" element={<BlogDetail />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Service />} />
        <Route path="vacancy/:vacancyDetail" element={<VacancyDetail />} />
        <Route path="*" element={<ErrorPage />} />
    </Route>
))