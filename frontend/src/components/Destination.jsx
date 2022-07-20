import "../style/Destination.css";

import { useState, useEffect } from "react";
import axios from "axios";

import CardDestination from "./CardDestination";

export default function Destination() {
  const [listDestination, setListDestination] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/destinations`)
      .then((res) => {
        setListDestination(res.data);
      });
  }, []);

  return (
    <div>
      <ul className="listCards">
        {listDestination.map((destination) => (
          <li key={destination.id}>
            <CardDestination key={destination.id} destination={destination} />
          </li>
        ))}
      </ul>
    </div>
  );
}
