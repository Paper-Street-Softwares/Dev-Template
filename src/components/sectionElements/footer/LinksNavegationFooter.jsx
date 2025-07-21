import React, { useEffect, useState } from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";
import { Link } from "react-scroll";

function LinksNavegationFooter() {
  const [visibleLinks, setVisibleLinks] = useState([]);

  useEffect(() => {
    const allIds = content.texts.navbar.menuId || [];
    const allLabels = content.texts.navbar.menuItems || [];

    const paired = allIds.map((id, index) => ({
      id,
      label: allLabels[index] || id,
    }));

    const filtered = paired.filter(({ id }) => !!document.getElementById(id));
    setVisibleLinks(filtered);
  }, []);

  // Divide os links visíveis em duas colunas aproximadamente iguais
  const half = Math.ceil(visibleLinks.length / 2);
  const firstHalf = visibleLinks.slice(0, half);
  const secondHalf = visibleLinks.slice(half);

  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        {/* Primeira coluna */}
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {firstHalf.map(({ id, label }) => (
            <div key={id} className="h-[36px] hover:underline">
              <Link
                to={id}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                  {label}
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Segunda coluna */}
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {secondHalf.map(({ id, label }) => (
            <div key={id} className="h-[36px] hover:underline">
              <Link
                to={id}
                className="cursor-pointer"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                <span className="inline-block h-[48px] hover:underline hover:scale-110 transition">
                  {label}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MotionDivDownToUp>
  );
}

export default LinksNavegationFooter;
