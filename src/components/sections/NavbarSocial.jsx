import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../sectionElements/Navbar";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect, useRef } from "react";
import SidebarSocial from "../sectionElements/SidebarSocial";
import ListGroupSocial from "../sectionElements/ListGroupSocial";
import ListGroupSite from "../sectionElements/ListGroupSite";

export default function NavbarSocial({ colorMode, option }) {
  const isSiteIndex = option === "site";
  const navigate = useNavigate();

  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);

  // Estados para animação sidebar/menu mobile
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const sidebarRef = useRef(null);

  // Scroll handler para navbar background e sombra
  const handleScroll = () => {
    const isScrolling = window.scrollY > 0;
    setScrolling(isScrolling);
  };

  // Controle de exibição do grupo de links baseado na largura da tela
  const handleResize = () => {
    setShowListGroup(window.innerWidth >= 768);
  };

  // Toggle sidebar com animação simples
  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon((prev) => !prev);
      setShowSidebarContent((prev) => !prev);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 940);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  // Fecha sidebar ao clicar fora
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      handleCloseSidebar();
    }
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setShowSidebarContent(false);
    setIsAnimating(false);
    setShowMenuIcon(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getNavbarClasses = () => {
    if (colorMode === "light") {
      return scrolling
        ? "bg-bgSectionOpacityLight shadow-md"
        : "bg-transparent desktop1:bg-transparent";
    }
    if (colorMode === "dark") {
      return scrolling
        ? "bg-gradient-to-b from-black to-bgFixedDark shadow-lg border-b-[1px] border-primary"
        : "bg-gradient-to-b from-black to-transparent border-b-[1px] border-none";
    }
    // default
    return scrolling
      ? "bg-gradient-to-b from-black to-bgSectionDark shadow-lg border-b-[1px] border-primary"
      : "bg-gradient-to-b from-black to-transparent border-b-[1px] border-none";
  };

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 w-full transition-colors duration-1000  ${getNavbarClasses()}`}
      >
        <Navbar>
          {/* Logo */}
          {isSiteIndex ? (
            <ScrollLink
              to="home"
              className="cursor-pointer w-[300px]"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              href="#"
            >
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className={`bg-transparent ${
                  scrolling
                    ? " w-[30%] phone3:w-[30%] tablet1:w-[40%] tablet2:w-[40%] desktop1:w-[40%] desktop2:w-[50%]"
                    : "my-[20px] w-[60%] phone2:w-[60%] phone3:w-[60%] tablet1:w-[65%] tablet2:w-[65%] desktop1:w-[60%] desktop2:w-[70%]"
                } transition-all duration-1000`}
              />
            </ScrollLink>
          ) : (
            <ScrollLink
              to="home"
              className="cursor-pointer w-[300px]"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              href="#"
            >
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className={`bg-transparent ${
                  scrolling
                    ? " w-[30%] phone3:w-[30%] tablet1:w-[40%] tablet2:w-[40%] desktop1:w-[40%] desktop2:w-[50%]"
                    : "my-[20px] w-[60%] phone2:w-[60%] phone3:w-[60%] tablet1:w-[65%] tablet2:w-[65%] desktop1:w-[60%] desktop2:w-[70%]"
                } transition-all duration-1000`}
              />
            </ScrollLink>
          )}

          {/* Menu / botões lado direito */}
          <div className="flex items-center justify-between gap-[16px] ">
            {/* Botão whatsapp só no siteIndex como no exemplo da navbar animada */}
            {isSiteIndex && (
              <div className="hidden tablet1:flex desktop1:hidden ">
                <Button
                  aria-label={content.texts.hero.ctaButtonAriaLabel}
                  label={content.texts.navbar.ctaButtonTextResponsive}
                  size="small"
                  icon={<FaWhatsapp />}
                  colorMode={colorMode}
                />
              </div>
            )}

            {/* Sidebar social para mobile (exemplo simplificado) */}
            <div className="flex items-center tablet1:flex">
              <SidebarSocial colorMode={colorMode} />
            </div>
          </div>

          {/* Lista de links desktop */}
          {showListGroup &&
            (isSiteIndex ? (
              <ListGroupSite colorMode={colorMode} />
            ) : (
              <ListGroupSocial colorMode={colorMode} />
            ))}
        </Navbar>
      </div>

      {/* Aqui você pode implementar o sidebar animado, usando showSidebar, sidebarRef, etc */}
      {/* Exemplo simples: */}
      {showSidebar && (
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-500 ${
            showSidebarContent ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {isSiteIndex ? (
            <ListGroupSite colorMode={colorMode} />
          ) : (
            <ListGroupSocial colorMode={colorMode} />
          )}
        </div>
      )}
    </div>
  );
}
