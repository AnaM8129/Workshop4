import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const techURL =
  "https://mini-back-workshop-4-production.up.railway.app/technology";
const Technology = () => {
  const { technologyId } = useParams();
  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    if (technologyId) {
      axios.get(`${techURL}?name_like=${technologyId}`).then((response) => {
        setTechnology(response.data[0]);
      });
    }
  }, [technologyId]);

  console.log(technology);
  return (
    <>
      {/* {technology && ( */}
      <main className="tech-main">
        <aside className="aside">
          <p className="aside__title">
            <span className="aside__title-span">03</span>space launch 101
          </p>
          <div className="container-numbers-text">
            <div className="aside__container-numbers">
              <div className="aside__container-numbers-item">1</div>
              <div className="aside__container-numbers-item">2</div>
              <div className="aside__container-numbers-item">3</div>
            </div>
            <article className="aside__container-text">
              <p className="aside__container-text-firstText">
                THE TERMINOLOGY…
              </p>
              <p className="aside__container-text-title">LAUNCH VEHICLE</p>
              <p className="aside__container-text-description">
                A launch vehicle or carrier rocket is a rocket-propelled vehicle
                used to carry a payload from Earth's surface to space, usually
                to Earth orbit or beyond. Our WEB-X carrier rocket is the most
                powerful in operation. Standing 150 metres tall, it's quite an
                awe-inspiring sight on the launch pad!
              </p>
            </article>
          </div>
        </aside>
        <section className="image-section">
          <p className="image-section__title">
            <span className="image-section__span">03</span>space launch 101
          </p>
          <figure className="image-section__figure">
            <img
              className="image-section__figure-img"
              src="data:image/jpeg;base64,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"
              alt="Vehicle image"
            />
          </figure>
        </section>
      </main>
      {/* )} */}
    </>
  );
};

export default Technology;
