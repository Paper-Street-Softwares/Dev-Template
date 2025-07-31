import React from "react";
import { Link } from "react-router-dom";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { siteMenuLinks } from "../ListGroupSite.jsx";

export default function LinksNavegationFooterSite() {
  const half = Math.ceil(siteMenuLinks.length / 2);
  const firstHalf = siteMenuLinks.slice(0, half);
  const secondHalf = siteMenuLinks.slice(half);

  return (
    <MotionDivDownToUp>
      <div className="flex justify-between full opacity-90">
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {firstHalf.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:underline cursor-pointer inline-block h-[48px] hover:scale-110 transition"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="w-[46%] flex flex-col gap-y-[16px]">
          {secondHalf.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="hover:underline cursor-pointer inline-block h-[48px] hover:scale-110 transition"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </MotionDivDownToUp>
  );
}
