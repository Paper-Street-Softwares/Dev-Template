import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { CalendarCheck2 } from "lucide-react";
import { useTranslation } from "react-i18next";

function ExpedienteFooter({ showSecond = false }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Expediente principal */}
      <MotionDivDownToUp>
        <div className="flex full gap-x-[12px] items-center opacity-90">
          <div>
            <CalendarCheck2 />
          </div>
          <p>{t("infos.expediente")}</p>
        </div>
      </MotionDivDownToUp>

      {/* Expediente secundário */}
      {showSecond && (
        <MotionDivDownToUp>
          <div className="flex full gap-x-[12px] items-center opacity-90">
            <div>
              <CalendarCheck2 />
            </div>
            <p>{t("infos.expedienteSecudario")}</p>
          </div>
        </MotionDivDownToUp>
      )}
    </>
  );
}

export default ExpedienteFooter;
