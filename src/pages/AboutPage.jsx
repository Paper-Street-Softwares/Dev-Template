import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import AboutInstagram from "../components/sections/AboutInstagram";
import CtaSecondary from "../components/sections/CtaSecondary";
import FooterSocial from "../components/sections/FooterSocial";

export default function AboutPage() {
  const colorMode = "default";

  return (
    <>
      <Navbar colorMode={colorMode} option="site" />
      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      <About modal={true} showGallery={false} colorMode="" />
      <AboutInstagram colorMode="" instagram={true} socialPrint={true} />
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
    </>
  );
}
