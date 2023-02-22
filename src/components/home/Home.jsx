import React from "react";
import SectionOne from "./SectionOne.jsx";
import SectionTwo from "./SectionTwo.jsx";
import NavBar from "./NavBar.jsx";
import { useState } from "react";

const Home = () => {
  const [menu, setMenu] = useState(false);

  const functionMenu = () => {
    setMenu(!menu);
  };

  return (
    <main className="main">
      <NavBar open={menu} change={setMenu} functionOpen={functionMenu} />
      <section className="main__section">
        <SectionOne />
        <SectionTwo />
      </section>
    </main>
  );
};

export default Home;
