import React, { useEffect, useState }  from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';

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
      <h3><span>02</span>  &nbsp; MEET YOUR CREW</h3>
      <section className="crew__main">
        <div className="crew__main__div1">
          <h2>{crew ? crew.role.toUpperCase() : ""}</h2>
          <h1>{crew ? crew.name.toUpperCase() : ""}</h1>
          <p>{crew ? crew.bio : ""}</p>
        </div>
        <div className="crew__main__div2">
          <figure className="figure"><img src={crew ? crew.images.png : ""} alt="crew picture" className="crew__picture"/></figure>
        </div>
      </section>
      <nav>
        <NavLink to="/crew/Douglas%20Hurley" className={({ isActive }) => isActive ? 'navLinkActive' : 'navLink'}></NavLink>
        <NavLink to="/crew/Mark%20Shuttleworth" className={({ isActive }) => isActive ? 'navLinkActive' : 'navLink'}></NavLink>
        <NavLink to="/crew/Victor%20Glover" className={({ isActive }) => isActive ? 'navLinkActive' : 'navLink'}></NavLink>
        <NavLink to="/crew/Anousheh%20Ansari" className={({ isActive }) => isActive ? 'navLinkActive' : 'navLink'}></NavLink>
      </nav>
    </section>
  )
};

export default Crew;
