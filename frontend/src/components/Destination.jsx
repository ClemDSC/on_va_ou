/* eslint-disable no-unused-vars */
import "../style/Destination.css";

import { useState, useEffect } from "react";
import axios from "axios";

import CardDestination from "./CardDestination";

export default function Destination() {
  const [continent, setContinent] = useState(false);
  const [pays, setPays] = useState(false);
  const [ville, setVille] = useState(false);
  const [language, setlanguage] = useState(false);
  const [devise, setDevise] = useState(false);

  const [listDestination, setListDestination] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/destinations`)
      .then((res) => {
        setListDestination(res.data);
      });
  }, []);

  return (
    <div className="divlistCards">
      <div className="divFilter">
        <label htmlFor="continent">
          Continent
          <input
            className="checkboxFilter"
            type="checkbox"
            name="continent"
            onChange={(e) => setContinent(e.target.value)}
          />
        </label>
        <label htmlFor="continent">
          Pays
          <input
            className="checkboxFilter"
            type="checkbox"
            name="continent"
            onChange={(e) => setPays(e.target.value)}
          />
        </label>
        <label htmlFor="continent">
          Ville
          <input
            className="checkboxFilter"
            type="checkbox"
            name="continent"
            onChange={(e) => setVille(e.target.value)}
          />
        </label>
        <label htmlFor="continent">
          Langue
          <input
            className="checkboxFilter"
            type="checkbox"
            name="continent"
            onChange={(e) => setlanguage(e.target.value)}
          />
        </label>
        <label htmlFor="continent">
          Devise
          <input
            className="checkboxFilter"
            type="checkbox"
            name="continent"
            onChange={(e) => setDevise(e.target.value)}
          />
        </label>
      </div>
      <ul className="listCards">
        {listDestination.map((destination) => (
          <li key={destination.id} className="liCard">
            <CardDestination key={destination.id} destination={destination} />
          </li>
        ))}
      </ul>
    </div>
  );
}
