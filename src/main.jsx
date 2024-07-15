import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "@fontsource/outfit";
import "@fontsource/roboto";

import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Resume } from "./Components/Resume/Resume";
import { Projects } from "./Components/Projects/Projects";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/projects",
        element: <Projects />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);