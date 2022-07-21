import "../style/CardDestination.css";
/* eslint-disable react/prop-types */
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CardDestination({ destination }) {
  const ToastDeleteDestination = () => toast.success("Destination supprimée !");
  const deleteDestination = (e) => {
    e.preventDefault();
    axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/destinations/${destination.id}`
    );
    ToastDeleteDestination();
  };

  return (
    <div className="divCardDestindation">
      <div className="card-info">
        <h3 className="titleDestination">{destination.ville}</h3>
        <h4 className="subtitleDestination">
          {destination.pays} ({destination.continent})
        </h4>
      </div>
      <img
        className="picCard"
        src={destination.photo}
        alt={destination.ville}
      />
      <div className="card-bio">
        <p className="descriptionCard">🤔 Dans ce pays, on parle :</p>
        <p className="reponseCard">{destination.langue}</p>
        <p className="descriptionCard">💵 On fait ses achats en : </p>
        <p className="reponseCard">{destination.devise}</p>
        <p className="descriptionCard">😍 Pourquoi cette destination : </p>
        <p className="reponseCard">{destination.description}</p>
        <p className="descriptionCard">
          🎒 S'il y a une chose à ne pas oublier, c'est :
        </p>
        <p className="reponseCard">
          {destination.objnom} ({destination.objcategorie})
        </p>
      </div>
      <input
        className="btnPut"
        type="submit"
        value="Modifier cette destination"
      />
      <input
        className="btnDel"
        type="submit"
        value="Supprimer cette destination"
        onClick={deleteDestination}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
