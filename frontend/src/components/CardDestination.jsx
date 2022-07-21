import "../style/CardDestination.css";
/* eslint-disable react/prop-types */
export default function CardDestination({ destination }) {
  return (
    <div>
      <h3 className="titleCardDestination">{destination.continent}</h3>
      <h4>
        {destination.pays} ({destination.ville})
      </h4>
      <p>Dans ce pays, on parle : {destination.langue}</p>
      <p>On fait ses achats en : {destination.devise}</p>
      <p>Pourquoi cette destination : {destination.description}</p>
      {/* <p>
        S'il y a une chose à ne pas oublier, c'est : {destination.objet.name} (
        {destination.objet.categorie})
      </p>
      <p>Et on l'emmène en toute saison : {destination.objet.saisonnier}</p> */}
    </div>
  );
}
