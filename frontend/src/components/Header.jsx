import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

import "../style/Header.css";

export default function Header() {
  return (
    <div className="divHeader">
      <Link to="/">
        <img className="logoHeader" src={Logo} alt="logo traveler" />
      </Link>
      <h1 className="titleHomepage">On va où ?</h1>
    </div>
  );
}
