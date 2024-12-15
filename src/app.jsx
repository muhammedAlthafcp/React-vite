import React from "react";
import ReactDOM from "react-dom/client";
// import { Link, Route, Router } from "wouter"; // Importing Wouter
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import { createBrowserRouter,Route,RouterProvider ,Outlet} from "react-router-dom";

const Home = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);
function App() {
}

const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      } 
    ],
    errorElement:<Error/>
  },444
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={AppRouter}/>);