import React from "react";
import Layout from "../components/layout/Layout";
import { useAuth } from "../context/auth";

const Home = () => {
   const [auth, setAuth] = useAuth();
   return (
      <Layout title={"Best Offers"}>
         <h1>Home Page</h1>
         <pre>{JSON.stringify(auth, null, 4)}</pre>
      </Layout>
   );
};

export default Home;
