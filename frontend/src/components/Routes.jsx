import { Routes, Route } from "react-router-dom";
import Wrapper from "../services/Wrapper";
import Home from "../pages/Home";
import Destination from "./Destination";
import Proposition from "./Proposition";

export default function Main() {
  return (
    <div>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/proposition" element={<Proposition />} />
        </Routes>
      </Wrapper>
    </div>
  );
}
