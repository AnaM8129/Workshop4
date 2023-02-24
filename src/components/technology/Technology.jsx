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
      {technology && (
        <main className="tech-main">
          <aside className="aside">
            <p className="aside__title">
              <span className="aside__title-span">03</span>space launch 101
            </p>
            <div className="container-numbers-text">
              <div className="aside__container-numbers">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeButton" : "aside__container-numbers-item"
                  }
                  to="/Technology/Launch%20vehicle"
                >
                  1
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeButton" : "aside__container-numbers-item"
                  }
                  to="/Technology/Spaceport"
                >
                  2
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activeButton" : "aside__container-numbers-item"
                  }
                  to="/Technology/Space%20capsule"
                >
                  3
                </NavLink>
              </div>
              <article className="aside__container-text">
                <p className="aside__container-text-firstText">
                  THE TERMINOLOGY…
                </p>
                <p className="aside__container-text-title">
                  {technology.name.toUpperCase()}
                </p>
                <p className="aside__container-text-description">
                  {technology.description}
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
                src={technology.images.portrait}
                alt="Vehicle image"
              />
            </figure>
          </section>
        </main>
      )}
    </>
  );
};

export default Technology;
