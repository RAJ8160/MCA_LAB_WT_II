import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Faculty from "./components/Faculty/Faculty";
import Students from "./components/Students/Students";
import Products from "./components/Products/Products";
import StudentData from "./components/PropsDemo/StudentData";

 const route = createBrowserRouter([
  { path: "/faculties", element: <Faculty /> },
  { path: "/students", element: <Students /> },
  { path: "/demo", element: <StudentData /> },
  { path: "/products", element: <Products /> },
]);

export default route