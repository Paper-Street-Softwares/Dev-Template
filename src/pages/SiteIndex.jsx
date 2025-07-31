import "../styles/shapeDivs.css";
import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import CtaSecondary from "../components/sections/CtaSecondary";
import FooterSocial from "../components/sections/FooterSocial";
import FloatingWhatsappButton from "../components/interactives/FloatingWhatsappButton";
import BackToTopButton from "../components/interactives/BackToTopButton";
import { Outlet } from "react-router-dom";

export default function SiteIndex({ option }) {
  const colorMode = "default"; // Altere esta constante para: 'default', 'light' ou 'dark'

  return (
    <>
      <Navbar colorMode={colorMode} option={option} />

      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />

      {/* Onde cada página será renderizada */}
      <Outlet />

      <CtaSecondary />

      <FooterSocial
        colorMode={colorMode}
        addresSecundario={true}
        phoneTerciario={false}
        expedientesecond={false}
        addres={true}
        instagram={true}
        option="site"
      />

      <FloatingWhatsappButton />
      <BackToTopButton />
    </>
  );
}
