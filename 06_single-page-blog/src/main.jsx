import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import App from "./App";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/post" element={<NewPost />} />
      <Route path="/post/:id" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<Missing />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
