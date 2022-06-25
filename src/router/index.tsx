import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anime from "../pages/Anime";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<Anime />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
