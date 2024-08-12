import React from "react";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";

const CreateCategory = () => {
   return (
      <Layout title={"Dashboard - Create Category"}>
         <div className="container-fluid m-3 p-3">
            <div className="row">
               <div className="col-md-3">
                  <AdminMenu />
               </div>
               <div className="col-md-9">
                  <h1>Create Category</h1>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default CreateCategory;
