import React, { useEffect, useState }  from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';
import oval from "./../../assets/OvalCopy.svg"

const URL_CREW = "https://mini-back-workshop-4-production.up.railway.app/crew";

const Crew = () => {

  const { crewId } = useParams();
  const [crew, setCrew] = useState(null);

  useEffect(()=>{
    if(crewId){
      axios.get(`${URL_CREW}?name_like=${crewId}`).then((response) => {
        setCrew(response.data[0]);
      });
    }
  }, [crewId])

  return (
    <section className="crew">
      <section className="crew__main">
        <div className="crew__main__div1">
          <h3> <span>02</span> MEET YOUR CREW</h3>
          <h2>{crew ? crew.role.toUpperCase() : ""}</h2>
          <h1>{crew ? crew.name.toUpperCase() : ""}</h1>
          <p>{crew ? crew.bio : ""}</p>
          <nav>
            <NavLink to="/crew/Douglas%20Hurley"><img src={oval} alt="oval icon" className={({ isActive }) => isActive ? 'active' : ''} /></NavLink>
            <NavLink to="/crew/Mark%20Shuttleworth"><img src={oval} alt="oval icon" /></NavLink>
            <NavLink to="/crew/Victor%20Glover"><img src={oval} alt="oval icon" /></NavLink>
            <NavLink to="/crew/Anousheh%20Ansari"><img src={oval} alt="oval icon" /></NavLink>
          </nav>
        </div>
        <div>
          <figure><img src={crew ? crew.images.png : ""} alt="crew picture" className="crew__picture"/></figure>
        </div>
      </section>
    </section>
  )
};

export default Crew;
