import React from "react";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";

const Home = () => {
  return (
    <main className="main">
      <section className="main__section">
        <SectionOne />
        <SectionTwo />
      </section>
    </main>
  );
};

export default Home;
