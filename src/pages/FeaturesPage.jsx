import Features from "../components/sections/Features";
import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import CtaSecondary from "../components/sections/CtaSecondary";
import FooterSocial from "../components/sections/FooterSocial";
// Altere esta constante para: 'default', 'light' ou 'dark'

export default function FeaturesPage() {
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
      <Features
        colorMode="light"
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
      />
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
