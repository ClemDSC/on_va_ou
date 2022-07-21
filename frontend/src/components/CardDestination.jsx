import "../style/CardDestination.css";
/* eslint-disable react/prop-types */
export default function CardDestination({ destination }) {
  return (
    <div className="divCardDestindation">
      <div className="card-info">
        <h3 className="titleDestination">{destination.continent}</h3>
        <h4 className="subtitleDestination">
          {destination.pays} ({destination.ville})
        </h4>
      </div>
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
    </div>
  );
}
