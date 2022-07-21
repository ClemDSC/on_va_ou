import "../style/Proposition.css";

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Hikerman from "../assets/hiker.jpg";

export default function Proposition() {
  const [continent, setContinent] = useState("");
  const [pays, setPays] = useState("");
  const [ville, setVille] = useState("");
  const [langue, setLangue] = useState("");
  const [devise, setDevise] = useState("");
  const [description, setDescription] = useState("");
  const [objnom, setNom] = useState("");
  const [objcategorie, setCategorie] = useState("");
  const [objsaisonnier, setSaisonnier] = useState(false);

  const navigate = useNavigate();
  const ToastProposition = () => toast.success("Proposition enregistrée !");

  const postProposition = (e) => {
    e.preventDefault();

    try {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/destinations`, {
          continent,
          pays,
          ville,
          langue,
          devise,
          description,
          objnom,
          objcategorie,
          objsaisonnier,
        })
        .then(() => {
          ToastProposition();
          navigate("/destination");
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pageProposition">
      <h2 className="titleProposition">PARTAGE UNE DESTINATION</h2>
      <p className="ptitleProposition">
        Tu adores une ville ou un pays, et tu souhaites faire découvrir cette
        destination au monde entier ? <br />À toi de jouer !
      </p>
      <img className="hikerman" src={Hikerman} alt="hikerman" />
      <form className="formProposition" onSubmit={postProposition}>
        <p className="pProposition">🌎 On part où ?</p>
        <div className="divLieu">
          <label htmlFor="continent">
            <input
              className="input"
              type="text"
              name="continent"
              onChange={(e) => setContinent(e.target.value)}
              placeholder="Continent"
            />
          </label>
          <label htmlFor="country">
            <input
              className="input"
              type="text"
              name="country"
              onChange={(e) => setPays(e.target.value)}
              placeholder="Pays"
            />
          </label>
          <label htmlFor="city">
            <input
              className="input"
              type="text"
              name="city"
              onChange={(e) => setVille(e.target.value)}
              placeholder="Ville"
            />
          </label>
        </div>
        <div className="divLangDevise">
          <div className="divLangDeviseUnique">
            <p className="pProposition">🤔 Et on parle quelle langue ?</p>
            <label htmlFor="language">
              <input
                className="input2"
                type="text"
                name="language"
                onChange={(e) => setLangue(e.target.value)}
                placeholder="Langue parlée"
              />
            </label>
          </div>
          <div>
            <p className="pProposition">💵 On utilise quelle devise ?</p>
            <label htmlFor="devise">
              <input
                className="input2"
                type="text"
                name="devise"
                onChange={(e) => setDevise(e.target.value)}
                placeholder="Euro, Dollar Américain..."
              />
            </label>
          </div>
        </div>
        <p className="pProposition">
          😍 Explique-nous en quelques mots pourquoi cette destination est
          géniale :
        </p>
        <label htmlFor="description">
          <input
            className="input3"
            type="text"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </label>
        <div className="divObjet">
          <div className="divObjetUnit">
            <p className="pProposition">
              🎒 Un objet indispensable <br />à ne pas oublier ?
            </p>
            <label htmlFor="name">
              <input
                className="input"
                type="text"
                name="name"
                onChange={(e) => setNom(e.target.value)}
                placeholder="L'incontournable"
              />
            </label>
          </div>
          <div className="divObjetUnit">
            <p className="pProposition">
              🧢 Et cet incontournable, c'est plutôt un accessoire, un document,
              un vêtement ?
            </p>
            <label htmlFor="category">
              <input
                className="input"
                type="text"
                name="category"
                onChange={(e) => setCategorie(e.target.value)}
                placeholder="..."
              />
            </label>
          </div>
        </div>
        <div className="divcheckbox">
          <p className="pProposition">☀️❄️ On l'emmène été comme hiver ?</p>
          <label htmlFor="seasonal">
            <input
              className="inputCheckbox"
              type="checkbox"
              name="seasonal"
              onChange={(e) => setSaisonnier(e.target.value)}
            />
          </label>
        </div>
        <div className="divButt">
          <input className="inputButton" type="submit" value="C'est parti !" />
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
}
