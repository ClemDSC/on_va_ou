import { Link } from "react-router-dom";
import Travel from "../assets/travel.jpg";
import Traveler1 from "../assets/traveler1.jpg";
import Traveler2 from "../assets/traveler2.jpg";
import "../style/Home.css";

export default function Home() {
  return (
    <div className="homepage">
      <section className="introHomepage">
        <img className="travelHomepage" src={Travel} alt="traveler" />
        <div className="prezHomepage">
          <p className="intro1Homepage">
            Tu as besoin de vacances mais tu ne sais pas où aller ?
          </p>
          <p className="intro2Homepage">
            Tu as plein d'idées et tu veux les partager ?
          </p>
          <p className="intro3Homepage">Alors tu es au bon endroit !</p>
        </div>
      </section>
      <section className="choiceHomepage">
        <div className="choice">
          <Link to="/destination">
            <img className="imgChoice" src={Traveler1} alt="traveler" />
            <p className="pChoice">Je cherche une idée</p>
          </Link>
        </div>
        <div className="choice">
          <Link to="/proposition">
            <img className="imgChoice" src={Traveler2} alt="traveler" />
            <p className="pChoice">Je propose une destination</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
