import About from "./Pages/About";
import Detail from "./Pages/Detail";
import DetailBlogs from "./Pages/DetailBlogs";
import Home from "./Pages/Home";

const { default: Blogs } = require("./Pages/Blogs");
const { default: Contact } = require("./Pages/Contact");
const { default: Projects } = require("./Pages/Projects");
const { default: Skills } = require("./Pages/Skills");

 export const routes=[
    {path:'/skills',element:<Skills/>},
    {path:'/',element:<Home/>},
    {path:'/projects',element:<Projects/>},
    {path:'/blogs',element:<Blogs/>},
    {path:'/contact',element:<Contact/>},
    {path:'/about',element:<About/>},
    {path:'/single/:id',element:<Detail/>},
    {path:'/singleBlog/:idBlog',element:<DetailBlogs/>},

]