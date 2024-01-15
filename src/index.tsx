import "./sass/main.scss";
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import * as logements from "./assets/logements.json";

import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Asset } from "./pages/asset";
import { Error404 } from "./pages/error404";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router basename="/Openclassrooms-P11_Kasa">
      <Header />
      <Routes>
        <Route path="/" element={<Home assets={logements} />} />
        <Route path="/about" element={<About />} />
        <Route path="/asset/:id" element={<Asset />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
