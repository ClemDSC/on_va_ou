import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Destination from "./Destination";
// import Proposition from "./Proposition";

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/destination" element={<Destination />} />
        <Route path="/proposition" element={<Proposition />} /> */}
      </Routes>
    </div>
  );
}
