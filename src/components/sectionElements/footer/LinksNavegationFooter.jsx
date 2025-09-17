import React, { useEffect, useState } from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function LinksNavegationFooter({ mode = "blog" }) {
  const { t } = useTranslation();
  const [visibleLinks, setVisibleLinks] = useState([]);

  useEffect(() => {
    const menuItems = t("navbar.menuItems", { returnObjects: true }) || {};

    const allIds = Object.keys(menuItems);
    const allLabels = Object.values(menuItems);

    const paired = allIds.map((id, index) => ({
      id,
      label: allLabels[index] || id,
    }));

    setVisibleLinks(paired);
  }, [t]);

  const half = Math.ceil(visibleLinks.length / 2);
  const firstHalf = visibleLinks.slice(0, half);
  const secondHalf = visibleLinks.slice(half);

  const renderLink = (id, label) => {
    if (mode === "blog") {
      return (
        <ScrollLink
          to={id}
          className="cursor-pointer"
          spy={true}
          smooth={true}
          duration={500}
          offset={-50}
          aria-label={`Ir para seção ${label}`}
          title={`Navegar até ${label}`}
          data-track={`footer-${id}`} // <-- rastreável
        >
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </ScrollLink>
      );
    } else {
      const to = id === "inicio" ? "/" : `/${id.toLowerCase()}`;
      return (
        <RouterLink
          to={to}
          className="cursor-pointer"
          aria-label={`Ir para página ${label}`}
          title={`Navegar até ${label}`}
          data-track={`footer-${id}`} // <-- rastreável
        >
          <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
            {label}
          </span>
        </RouterLink>
      );
    }
  };

  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {firstHalf.map(({ id, label }) => (
            <div key={id} className="h-auto hover:underline">
              {renderLink(id, label)}
            </div>
          ))}
        </div>

        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {secondHalf.map(({ id, label }) => (
            <div key={id} className="h-auto hover:underline">
              {renderLink(id, label)}
            </div>
          ))}
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default LinksNavegationFooter;
