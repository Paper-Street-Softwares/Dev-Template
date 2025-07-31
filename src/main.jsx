import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import SiteIndex from "./pages/SiteIndex.jsx";

// Defina aqui: "site" para SiteIndex ou "index" para Index
const OPTION = "index"; // "site" ou "index"

const HomeComponent =
  OPTION === "site" ? SiteIndex : (await import("./pages/Index.jsx")).default;

import "./index.css";
import "./styles/backgrounds.css";
import "./styles/shapeDivs.css";

import Lp01 from "./pages/Lp01.jsx";
import Lp02 from "./pages/Lp02.jsx";
import Lp03 from "./pages/Lp03.jsx";
import WhatsAppLinks from "./components/interactives/WhatsappLinks.jsx";
import FeaturesPage from "./pages/FeaturesPage";
import AboutPage from "./pages/AboutPage";
import StepsPage from "./pages/StepsPage";
import FaqPage from "./pages/FaqPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      {/* <Route path="/" element={<Lp01 />} /> */}
      {/* <Route path="/whatsapp" element={<WhatsAppLinks />} /> */}
      {/* <Route path="/lp02" element={<Lp02 />} /> */}
      {/* <Route path="/lp03" element={<Lp03 />} /> */}
      {/* <Route path="/whatsapp" element={<WhatsAppLinks form={true} />} /> */}
      <Route path="/" element={<HomeComponent option={OPTION} />} />
      <Route path="/features" element={<FeaturesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/steps" element={<StepsPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  </Router>
);
