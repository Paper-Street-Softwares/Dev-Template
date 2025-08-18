import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { CalendarCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import content from "../../../content/content";

function ExpedienteFooter() {
  return (
    <>
      {/* Expediente principal */}
      <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90">
          <div>
            <CalendarCheck2 />
          </div>
          <p>{content.texts.infos.footerexpediente}</p>
        </div>
      </MotionDivDownToUp>
    </>
  );
}

export default ExpedienteFooter;
