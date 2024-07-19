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

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<PrivateRoute />}>
               <Route path="" element={<Dashboard />} />
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
