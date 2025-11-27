import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import { useTranslation } from "react-i18next";
import content from "../../../content/content";

function ParagrapfFooter() {
  const { t } = useTranslation(); // pega a função t

  return (
    <MotionDivDownToUp>
      <p className="opacity-90"> {content.texts.footer.footerText}</p>
    </MotionDivDownToUp>
  );
}

export default ParagrapfFooter;
