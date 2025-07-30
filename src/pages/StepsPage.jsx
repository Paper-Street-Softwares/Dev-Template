import Steps from "../components/sections/Steps";
import Navbar from "../components/sections/NavbarSocial";
import Hero from "../components/sections/Hero";
import CtaSecondary from "../components/sections/CtaSecondary";
import FooterSocial from "../components/sections/FooterSocial";
// Altere esta constante para: 'default', 'light' ou 'dark'

export default function StepsPage() {
  const colorMode = "default";
  return (
    <>
      <Navbar colorMode={colorMode} />

      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        mesclado={false}
      />
      <Steps />
      <CtaSecondary />

      <FooterSocial
        colorMode={colorMode}
        addresSecundario={true}
        phoneTerciario={false}
        expedientesecond={false}
        addres={true}
        instagram={true}
      />
    </>
  );
}
