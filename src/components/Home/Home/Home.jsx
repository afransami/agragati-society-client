import React from "react";
import { Helmet } from "react-helmet-async";
import MemberPaymentsForm from "../../Page/Dashboard/MemberPaymentsForm/MemberPaymentsForm";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Home</title>
      </Helmet>
      <Banner></Banner>
      <MemberPaymentsForm></MemberPaymentsForm>
      </div>
  );
};

export default Home;
