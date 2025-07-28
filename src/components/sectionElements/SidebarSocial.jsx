import { useState, useEffect } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Ripple } from "primereact/ripple";
import "primeicons/primeicons.css";
import { FileText } from "lucide-react";

import {
  HelpCircle,
  HomeIcon,
  ServerIcon,
  UserSearch,
  AlignJustify,
} from "lucide-react";
import { MapPinCheck } from "lucide-react";
import { Link } from "react-scroll";
import content from "../../content/content";
import ButtonWithIconNavbar from "../interactives/ButtonWithIconNavbar";

export default function SidebarSocial({ colorMode }) {
  const [visible, setVisible] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(true);
  const [reportsSubmenuVisible, setReportsSubmenuVisible] = useState(false);
  const [revenueSubmenuVisible, setRevenueSubmenuVisible] = useState(false);
  const [aplicationSubmenuVisible, setAplicationSubmenuVisible] =
    useState(true);
  const [scrolled, setScrolled] = useState(false);

  const toggleSidebar = () => {
    setVisible(!visible);
  };

  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const allIds = content.texts.navbar.menuId;
    const existing = allIds.filter((id) => document.getElementById(id));
    setVisibleSections(existing);
  }, []);

  return (
    <div className="inset-0 z-10 flex">
      <div
        className={`${
          visible ? "block" : "hidden"
        } fixed inset-0 bg-darker opacity-50 lg:hidden`}
        onClick={toggleSidebar}
      />

      <div className="flex justify-center card">
        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <AlignJustify
          className={`p-button-rounded p-button-outlined lg:hidden ${
            colorMode
              ? scrolled
                ? "text-primary"
                : "text-primary"
              : "text-primary"
          } w-[40px] h-[40px]`}
          onClick={() => setVisible(true)}
        />

        {/* <<<<<<<<<<<<<<< Cor do hamburger >>>>>>>>>>>>>> */}

        <Sidebar
          visible={visible}
          className="w-[280px]"
          onHide={() => setVisible(false)}
          content={({ closeIconRef, hide }) => (
            <div
              id="app-sidebar-2"
              className={`${
                colorMode
                  ? "bg-bgSectionDark"
                  : "absolute top-0 left-0 flex-shrink-0 h-screen border-r-[1px] select-none bg-bgSectionDark surface-section lg:hidden lg:static z-1 surface-border border-neutral-700"
              }`}
              style={{ width: "280px" }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between flex-shrink-0 px-4 pt-6 ">
                  <span className="inline-flex items-center gap-2">
                    <img
                      src={content.texts.navbar.solidLogo.img}
                      alt={content.texts.navbar.solidLogo.alt}
                      className="w-auto h-auto p-[5px] "
                    />
                  </span>
                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className={`${
                        colorMode
                          ? "text-secondary"
                          : "h-2rem w-2rem p-[5px] text-secondary"
                      }`}
                    ></Button>
                  </span>
                </div>
                <div className="h-screen overflow-y-auto">
                  <hr className="m-5 mx-3 border-top-1 surface-border border-secondary" />
                  <ul className="p-3 m-0 list-none">
                    <li>
                      {submenuVisible && (
                        <ul
                          className={`${
                            colorMode
                              ? "text-secondary"
                              : "p-0 m-0 -mt-[16px] overflow-hidden font-medium text-secondary"
                          } list-none text-paragraph3 font-mainFont`}
                        >
                          {content.texts.navbar.menuItems.map((item, index) => {
                            const id = content.texts.navbar.menuId[index];
                            if (!visibleSections.includes(id)) return null;

                            return (
                              <li key={id}>
                                <a className="flex items-center w-full p-3 transition-colors cursor-pointer p-ripple border-round text-700 hover:surface-100 transition-duration-150">
                                  {/* Ícones fixos por índice, adaptáveis */}
                                  {index === 0 && <HomeIcon />} {/* Ícone para o primeiro item */}
                                  {index === 1 && <UserSearch />} {/* Ícone para o segundo item */}
                                  {index === 2 && <ServerIcon />} {/* Ícone para o terceiro item */}
                                  {index === 3 && <FileText />} {/* Ícone para o quarto item */}
                                  {index === 4 && <HelpCircle />} {/* Ícone para o quinto item */}
                                  {index === 5 && <MapPinCheck />} {/* Ícone para o sexto item */}

                                  <span className="ml-[8px]">
                                    <Link
                                      to={id}
                                      className="align-text-top cursor-pointer"
                                      spy={true}
                                      smooth={true}
                                      duration={500}
                                      offset={-70}
                                      href="#"
                                    >
                                      {item}
                                    </Link>
                                  </span>
                                  <Ripple />
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        ></Sidebar>
      </div>
    </div>
  );
}
