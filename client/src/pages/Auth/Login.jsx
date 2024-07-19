import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [auth, setAuth] = useAuth();

   const navigate = useNavigate();
   const location = useLocation();

   //FORM FUNCTION
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post(
            `${process.env.REACT_APP_API}/api/v1/auth/login`,
            { email, password }
         );
         if (res && res.data.success) {
            // toast.success(res.data && res.data.message);
            alert(`${res.data && res.data.message}`);
            setAuth({
               ...auth,
               user: res.data.user,
               token: res.data.token,
            });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navigate(location.state || "/");
         } else {
            alert(res.data.message);
         }
      } catch (error) {
         console.log(error);
         alert("something went wrong!");
      }
   };

   return (
      <Layout title="Login">
         <div className="register">
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                  <input
                     type="email"
                     value={email}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                     className="form-control"
                     id="exampleInputEmail"
                     placeholder="Enter Email"
                     required
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="password"
                     value={password}
                     onChange={(e) => {
                        setPassword(e.target.value);
                     }}
                     className="form-control"
                     id="exampleInputPassword"
                     placeholder="Enter Password"
                     required
                  />
               </div>
               <div className="mb-3">
                  <button
                     type="button"
                     className="btn btn-primary"
                     onClick={() => {
                        navigate("/forgot-password");
                     }}
                  >
                     Forgot Password
                  </button>
               </div>

               <button type="submit" className="btn btn-primary">
                  Sign In
               </button>
            </form>
         </div>
      </Layout>
   );
};

export default Login;
