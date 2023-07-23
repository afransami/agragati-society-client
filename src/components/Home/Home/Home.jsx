import React from "react";
import { Helmet } from "react-helmet-async";
import MemberDetailsForm from "../../Page/Dashboard/MemberDetailsForm/MemberDetailsForm";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Home</title>
      </Helmet>
      <Banner></Banner>
      <MemberDetailsForm></MemberDetailsForm>
      </div>
  );
};

export default Home;
