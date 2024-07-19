import React from "react";
import Layout from "../components/layout/Layout";

const About = () => {
   return (
      <Layout title={"About Us"}>
         <div className="row contactus-container">
            <div className="col-md-6 ">
               <img
                  src="/images/about.jpeg"
                  alt="contactus"
                  style={{ width: "100%" }}
               />
            </div>
            <div className="col-md-4">
               <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
               <p className="text-justify mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus officiis obcaecati esse tempore unde ratione, eveniet
                  mollitia, perferendis eius temporibus dicta blanditiis
                  doloremque explicabo quasi sunt vero optio cum aperiam vel
                  consectetur! Laborum enim accusantium atque, excepturi
                  sapiente amet! Tenetur ducimus aut commodi illum quidem neque
                  tempora nam.
               </p>
            </div>
         </div>
      </Layout>
   );
};

export default About;
