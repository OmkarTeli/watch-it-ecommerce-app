import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/Private";
import ForgotPasssword from "./pages/Auth/ForgotPassword";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import Users from "./pages/Admin/Users";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
               <Route path="user" element={<Dashboard />} />
            </Route>
            <Route path="/dashboard" element={<AdminRoute />}>
               <Route path="admin" element={<AdminDashboard />} />
               <Route
                  path="admin/create-category"
                  element={<CreateCategory />}
               />
               <Route path="admin/create-product" element={<CreateProduct />} />
               <Route path="admin/users" element={<Users />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPasssword />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
      </>
   );
}

export default App;
