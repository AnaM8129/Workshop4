import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";

const baseURL =
  "https://mini-back-workshop-4-production.up.railway.app/destinations";

const Destination = () => {
  const { destinationId } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (destinationId) {
      axios.get(`${baseURL}?name_like=${destinationId}`).then((response) => {
        setDestination(response.data[0]);
      });
    }
  }, [destinationId]);
  return (
    <>
      {destination && (
        <section className="destination">
          <h2>
            <span>01</span>Pick your destination
          </h2>
          <div className="destination-row">
            <figure>
              <img src={destination.images.png} alt="planet" />
            </figure>
            <div className="destination-colum-right">
              <nav className="destination-colum-right-nav">
                <ul>
                  <li>
                    <NavLink
                      to="/destination/moon"
                      className={({ isActive }) =>
                        isActive ? "underline link" : "link"
                      }
                    >
                      MOON
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/destination/mars"
                      className={({ isActive }) =>
                        isActive ? "underline link" : "link"
                      }
                    >
                      MARS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/destination/europa"
                      className={({ isActive }) =>
                        isActive ? "underline link" : "link"
                      }
                    >
                      EUROPA
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/destination/titan"
                      className={({ isActive }) =>
                        isActive ? "underline link" : "link"
                      }
                    >
                      TITAN
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <span className="destination-colum-right-title">
                {destination.name.toUpperCase()}
              </span>
              <p className="destination-colum-right-text">
                {destination.description}
              </p>
              <span className="divide" />
              <div className="description-row">
                <p className="item">
                  <span className="title">AVG. DISTANCE</span>
                  <span className="value">{destination.distance}</span>
                </p>
                <p className="item">
                  <span className="title">Est. travel time</span>
                  <span className="value">{destination.travel}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Destination;
