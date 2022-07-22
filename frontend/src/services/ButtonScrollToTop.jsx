import { useEffect } from "react";
import Arrow from "../assets/arrowup.png";

export default function ButtonScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="divArrow">
      <button
        className="buttonArrow"
        type="button"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <img className="arrow" src={Arrow} alt="arrow" />
      </button>
    </div>
  );
}
