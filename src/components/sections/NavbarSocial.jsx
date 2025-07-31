import content from "../../content/content";
import Button from "../interactives/Button";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../sectionElements/Navbar";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import SidebarSocial from "../sectionElements/SidebarSocial";

import ListGroupSocial from "../sectionElements/ListGroupSocial";
import ListGroupSite from "../sectionElements/ListGroupSite";

export default function NavbarSocial({ colorMode, option }) {
  const isSiteIndex = option === "site";
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);

  const handleNavigateToSection = (section) => {
    navigate("/", { state: { scrollTo: section } });
  };

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    const handleResize = () => setShowListGroup(window.innerWidth >= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
    return scrolling
      ? "bg-gradient-to-b from-black to-bgSectionDark shadow-lg border-b-[1px] border-primary"
      : "bg-gradient-to-b from-black to-transparent border-b-[1px] border-none";
  };

  return (
    <div className="w-full">
      <div
        className={`fixed z-20 w-full transition-colors duration-1000 ${getNavbarClasses()}`}
      >
        <Navbar>
          {/* Logo */}
          {isSiteIndex ? (
            <div
              onClick={() => navigate("/")}
              className="cursor-pointer w-[300px]"
            >
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="w-[60%] transition-all duration-1000"
              />
            </div>
          ) : (
            <ScrollLink
              to="home"
              className="cursor-pointer w-[300px]"
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
            >
              <img
                src={content.texts.navbar.logo.img}
                alt={content.texts.navbar.logo.alt}
                className="w-[60%] transition-all duration-1000"
              />
            </ScrollLink>
          )}

          {/* Lista de links */}
          {showListGroup &&
            (isSiteIndex ? (
              <ListGroupSite colorMode={colorMode} />
            ) : (
              <ListGroupSocial colorMode={colorMode} />
            ))}
        </Navbar>
      </div>
    </div>
  );
}
