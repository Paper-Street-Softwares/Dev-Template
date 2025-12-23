import Faq from '../components/sections/Faq'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Steps from '../components/sections/Steps'
import Features from '../components/sections/Features'
import Navbar from '../components/sections/NavbarSocial'
import FooterSocial from '../components/sections/FooterSocial'
import BackToTopButton from '../components/interactives/BackToTopButton'
import FloatingWhatsappButton from '../components/interactives/FloatingWhatsappButton'
import Maps from '../components/sections/Maps'
import BlogPosts from '../components/sections/BlogPosts'
import CtaSecondary from '../components/sections/CtaSecondary'
import { useTranslation } from 'react-i18next'
import './../i18n'
import Button from '../components/interactives/Button'
import UnderConstruction from '../components/interactives/UnderConstruction'
import { useColorMode } from '../assets/context/ColorModeContext'
import News from '../components/sections/News'
import Testimonial from '../components/sections/lp01/Testimonials'
import Team from '../components/sections/Team'
import AboutWpp from '../components/sections/AboutWpp'
import AboutSocial from '../components/sections/AboutSocial'
import HeroTemplateNovo from '../components/sections/HeroTemplateNovo'
import FeaturesNovaTemplate from '../components/sections/FeaturesNovaTemplate'
import AboutNovoTemplate from '../components/sections/AboutNovoTemplate'
import SocialMediaTemplate from '../components/sections/SocialMediaTemplate'
import NavbarNovaTemplate from '../components/sections/NavbarNovaTemplate'
import RegionsSectionTemplate from '../components/sections/RegionsSectionTemplate'
import TeamNovoTemplate from '../components/sections/TeamNovoTemplate'
import StepsNovoTemplate from '../components/sections/StepsNovoTemplate'
import CtaNovoTemplate from '../components/sections/CtaNovoTemplate'
import FaqNovoTemplate from '../components/sections/FaqNovoTemplate'
import FooterNovoTemplate from '../components/sections/FooterNovoTemplate'

export default function Index() {
  const showUnderConstruction = false

  const { colorMode, setColorMode } = useColorMode()

  return (
    <>
      <Navbar colorMode={colorMode} />
      <Hero
        colorMode={colorMode}
        appDownloadButtons={false}
        defaultHero={true}
        influencer={false}
        panoramica={false}
      />
      <Features
        colorMode={colorMode}
        defaultFeature={true}
        button={false}
        modalWithCards={false}
        paragraphs={false}
        sixCards={false}
        paragraphsModal={false}
        iconsWithModal={false}
        carousel={false}
      />
      <About modal={false} showGallery={false} colorMode={colorMode} />
      <AboutSocial socialPrint={true} />
      {/* <AboutWpp colorMode={colorMode} /> */}
      {/* <Team /> */}
      <CtaSecondary colorMode={colorMode} />
      <Steps colorMode={colorMode} />
      <BlogPosts />
      <Faq colorMode={colorMode} />
      {/* <Maps colorMode={colorMode} /> */}
      <FooterSocial
        colorMode={colorMode}
        addres={true}
        obs={false}
        expediente={true}
      />
      <FloatingWhatsappButton />
      <BackToTopButton />
      {/* <NavbarNovaTemplate />
      <HeroTemplateNovo />
      <FeaturesNovaTemplate />
      <AboutNovoTemplate />
      <SocialMediaTemplate />
      <RegionsSectionTemplate />
      <TeamNovoTemplate />
      <StepsNovoTemplate />
      <CtaNovoTemplate />
      <FaqNovoTemplate />
      <FooterNovoTemplate /> */}
    </>
  )
}
