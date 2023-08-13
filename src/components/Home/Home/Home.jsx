import React from "react";
import { Helmet } from "react-helmet-async";
import MemberPaymentsForm from "../../Page/Dashboard/MemberPaymentsForm/MemberPaymentsForm";
import Banner from "../Banner/Banner";
import BannerNew from "../Banner/BannerNew";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Home</title>
      </Helmet>
      {/* <Banner></Banner> */}
      <BannerNew></BannerNew>
      <MemberPaymentsForm></MemberPaymentsForm>
      </div>
  );
};

export default Home;
