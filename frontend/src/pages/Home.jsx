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
          <h1 className="titleHomepage">On va où ?</h1>
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
          <img className="imgChoice" src={Traveler1} alt="traveler" />
          <p className="pChoice">Je cherche une idée</p>
        </div>
        <div className="choice">
          <img className="imgChoice" src={Traveler2} alt="traveler" />
          <p className="pChoice">Je propose une destination</p>
        </div>
      </section>
    </div>
  );
}
