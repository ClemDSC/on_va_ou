import "../style/CardDestination.css";
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function CardDestination({
  keys,
  continentUp,
  paysUp,
  villeUp,
  photoUp,
  langueUp,
  deviseUp,
  descriptionUp,
  objnomUp,
  objcategorieUp,
}) {
  const [continent, setContinent] = useState({ continentUp });
  const [pays, setPays] = useState({ paysUp });
  const [ville, setVille] = useState({ villeUp });
  const [photo, setPhoto] = useState({ photoUp });
  const [langue, setLangue] = useState({ langueUp });
  const [devise, setDevise] = useState({ deviseUp });
  const [description, setDescription] = useState({ descriptionUp });
  const [objnom, setNom] = useState({ objnomUp });
  const [objcategorie, setCategorie] = useState({ objcategorieUp });

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const ToastEditDestination = () => toast.success("Destination modifiée !");
  const editDestination = (e) => {
    e.preventDefault();
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/destinations/${keys}`, {
        continent,
        pays,
        ville,
        photo,
        langue,
        devise,
        description,
        objnom,
        objcategorie,
      })
      .then(() => ToastEditDestination());
  };

  const ToastDeleteDestination = () => toast.success("Destination supprimée !");
  const deleteDestination = (e) => {
    e.preventDefault();
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/destinations/${keys}`);
    ToastDeleteDestination();
  };

  return (
    <div className="divCardDestindation">
      <div className="card-info">
        <h3 className="titleDestination">{villeUp}</h3>
        <h4 className="subtitleDestination">
          {paysUp} ({continentUp})
        </h4>
      </div>
      <img className="picCard" src={photoUp} alt={villeUp} />
      <div className="card-bio">
        <p className="descriptionCard">🤔 Dans ce pays, on parle :</p>
        <p className="reponseCard">{langueUp}</p>
        <p className="descriptionCard">💵 On fait ses achats en : </p>
        <p className="reponseCard">{deviseUp}</p>
        <p className="descriptionCard">😍 Pourquoi cette destination : </p>
        <p className="reponseCard">{descriptionUp}</p>
        <p className="descriptionCard">
          🎒 S'il y a une chose à ne pas oublier, c'est :
        </p>
        <p className="reponseCard">
          {objnomUp} ({objcategorieUp})
        </p>
      </div>
      <input
        className="btnPut"
        type="submit"
        value="Modifier cette destination"
        onClick={toggleModal}
      />
      <Modal
        isOpen={isOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onRequestClose={toggleModal}
        contentLabel="Modifier cette destination"
      >
        <div className="divModalOpen">
          <button
            className="btnCloseModalOpen"
            type="button"
            onClick={toggleModal}
          >
            ☓
          </button>
          <h3 className="titleUpd">
            La description de cette destination est erronée ? À toi de jouer :
          </h3>
          <form className="formupdProposition" onSubmit={editDestination}>
            <div className="divupdLieu">
              <div className="sousdivLieu">
                <label htmlFor="continent">
                  <input
                    className="inputUPD"
                    type="text"
                    name="continent"
                    onChange={(e) => setContinent(e.target.value)}
                    placeholder={continentUp}
                  />
                </label>
                <label htmlFor="country">
                  <input
                    className="inputUPD"
                    type="text"
                    name="country"
                    onChange={(e) => setPays(e.target.value)}
                    placeholder={paysUp}
                  />
                </label>
              </div>
              <div className="sousdivLieu">
                <label htmlFor="city">
                  <input
                    className="inputUPD"
                    type="text"
                    name="city"
                    onChange={(e) => setVille(e.target.value)}
                    placeholder={villeUp}
                  />
                </label>
                <label htmlFor="linkphoto">
                  <input
                    className="inputUPD"
                    type="text"
                    name="linkphoto"
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder={photoUp}
                  />
                </label>
              </div>
            </div>
            <div className="divupdLangDevise">
              <div className="divLangDeviseUnique">
                <p className="pupProposition">
                  🤔 On parle quelle langue là-bas ?
                </p>
                <label htmlFor="language">
                  <input
                    className="input2UPD"
                    type="text"
                    name="language"
                    onChange={(e) => setLangue(e.target.value)}
                    placeholder={langueUp}
                  />
                </label>
              </div>
              <div>
                <p className="pupProposition">💵 On utilise quelle devise ?</p>
                <label htmlFor="devise">
                  <input
                    className="input2UPD"
                    type="text"
                    name="devise"
                    onChange={(e) => setDevise(e.target.value)}
                    placeholder={deviseUp}
                  />
                </label>
              </div>
            </div>
            <p className="pupdProposition">
              😍 Explique-nous en quelques mots pourquoi cette destination est
              géniale :
            </p>
            <label htmlFor="description">
              <input
                className="input3UPD"
                type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)}
                placeholder={descriptionUp}
              />
            </label>
            <div className="divupdObjet">
              <div className="divObjetUnit">
                <p className="pupProposition">
                  🎒 Un objet indispensable à ne pas oublier ?
                </p>
                <label htmlFor="name">
                  <input
                    className="inputUPD"
                    type="text"
                    name="name"
                    onChange={(e) => setNom(e.target.value)}
                    placeholder={objnomUp}
                  />
                </label>
              </div>
              <div className="divObjetUnit">
                <p className="pupProposition">
                  🧢 Et cet incontournable, c'est plutôt un accessoire, un
                  document, un vêtement ?
                </p>
                <label htmlFor="category">
                  <input
                    className="inputUPD"
                    type="text"
                    name="category"
                    onChange={(e) => setCategorie(e.target.value)}
                    placeholder={objcategorieUp}
                  />
                </label>
              </div>
            </div>
            <input
              className="boutonUpd"
              type="submit"
              value="C'est tout bon !"
            />
          </form>
        </div>
      </Modal>
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
