import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Register = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [phone, setPhone] = useState("");
   const [address, setAddress] = useState("");
   const [answer, setAnswer] = useState("");

   const navigate = useNavigate();

   //FORM FUNCTION
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const res = await axios.post(
            `${process.env.REACT_APP_API}/api/v1/auth/register`,
            { name, email, password, phone, address, answer }
         );
         if (res && res.data.success) {
            alert(res.data && res.data.message);
            navigate("/login");
         } else {
            alert(res.data.message);
         }
      } catch (error) {
         console.log(error);
         alert("something went wrong!");
      }
   };

   return (
      <Layout title="Register">
         <div className="register">
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
               <div className="mb-3">
                  <input
                     type="text"
                     value={name}
                     onChange={(e) => {
                        setName(e.target.value);
                     }}
                     className="form-control"
                     id="exampleInputName"
                     placeholder="Enter Name"
                     required
                  />
               </div>
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
                  <input
                     type="text"
                     value={phone}
                     onChange={(e) => {
                        setPhone(e.target.value);
                     }}
                     className="form-control"
                     id="exampleInputPhone"
                     placeholder="Enter Phone"
                     required
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="text"
                     value={address}
                     onChange={(e) => {
                        setAddress(e.target.value);
                     }}
                     className="form-control"
                     id="exampleInputAddress"
                     placeholder="Enter Address"
                     required
                  />
               </div>
               <div className="mb-3">
                  <input
                     type="text"
                     value={answer}
                     onChange={(e) => {
                        setAnswer(e.target.value);
                     }}
                     className="form-control"
                     id="exampleInputAddress"
                     placeholder="Your Favourite City?"
                     required
                  />
               </div>

               <button type="submit" className="btn btn-primary">
                  Sign Up
               </button>
            </form>
         </div>
      </Layout>
   );
};

export default Register;
