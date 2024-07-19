import React from "react";
import Layout from "../components/layout/Layout";

const Policy = () => {
   return (
      <Layout title={"Policy"}>
         <div className="row contactus-container ">
            <div className="col-md-6 ">
               <img
                  src="/images/contactus.jpeg"
                  alt="contactus"
                  style={{ width: "100%" }}
               />
            </div>
            <div className="col-md-4">
               <h1 className="bg-dark p-2 text-white text-center">POLICIES</h1>
               <p>add privacy policy</p>
               <p>add privacy policy</p>
               <p>add privacy policy</p>
               <p>add privacy policy</p>
               <p>add privacy policy</p>
               <p>add privacy policy</p>
               <p>add privacy policy</p>
            </div>
         </div>
      </Layout>
   );
};

export default Policy;
