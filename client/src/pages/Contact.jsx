import React from "react";
import Layout from "../components/layout/Layout";
import { BiMailSend, BiPhone, BiSupport } from "react-icons/bi";
const Contact = () => {
   return (
      <Layout title={"Contact Us"}>
         <div className="row contactus-container">
            <div className="col-md-6">
               <img
                  src="/images/contactus.jpeg"
                  alt=""
                  style={{ width: "100%" }}
               />
            </div>
            <div className="col-md-4">
               <h1 className="bg-dark p-2 text-white text-center">
                  CONTACT US
               </h1>
               <p className="text-justify mt-2">
                  ask any query and information about product
               </p>
               <p className="mt-3">
                  <BiMailSend /> : www.help@watchit.com
               </p>
               <p className="mt-3">
                  <BiPhone /> : +91 9191919191
               </p>
               <p className="mt-3">
                  <BiSupport /> : 9100-0000-0000 (toll free)
               </p>
            </div>
         </div>
      </Layout>
   );
};

export default Contact;
