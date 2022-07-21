import "../style/Destination.css";

import { useState, useEffect } from "react";
import axios from "axios";

import CardDestination from "./CardDestination";

export default function Destination() {
  const [filterSearch, setFilterSearch] = useState([]);

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
      <div className="divintroFilter">
        <p className="pintroFilter">
          Cherche un continent, un pays, une ville, une langue ou une devise :
        </p>
        <input
          className="searching"
          type="text"
          placeholder=" 🔎"
          onChange={(e) => setFilterSearch(e.target.value)}
        />
      </div>
      <ul className="listCards">
        {listDestination
          .filter(
            (destination) =>
              destination.continent.includes(filterSearch) ||
              destination.ville.includes(filterSearch) ||
              destination.pays.includes(filterSearch) ||
              destination.devise.includes(filterSearch) ||
              destination.langue.includes(filterSearch)
          )
          .map((destination) => (
            <li key={destination.id} className="liCard">
              <CardDestination key={destination.id} destination={destination} />
            </li>
          ))}
      </ul>
    </div>
  );
}
