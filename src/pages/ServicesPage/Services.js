import React from "react";
import InfoSection from "../../components/InfoSection/InfoSection";
import Services from "../../components/Services/Services";
import { homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <Services />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
