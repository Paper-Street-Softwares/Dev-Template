import { useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Dialog } from "primereact/dialog";
import { X } from "lucide-react";
import content from "../../content/content";
import Button from "../interactives/Button";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function FeaturesParagraphs({ colorMode }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const openModal = (cardNum) => {
    const card = content.texts.features[`card${cardNum}`];
    setModalTitle(t(`features.card${cardNum}.title`));

    setModalContent(
      <div className="text-paragraph3">
        <div
          dangerouslySetInnerHTML={{
            __html: t(`features.card${cardNum}.description`),
          }}
        />
      </div>
    );

    setVisible(true);
  };

  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "bg-bgSectionDark",
  };
  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass}`} paddingbot={true}>
      <SectionHeader
        className={`text-center mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px] ${textClass}`}
        miniTitle={t("features.miniTag")}
        sectionHeaderTitle={t("features.title")}
        sectionHeaderSubtitle={t("features.subtitle")}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
        colorMode="dark"
      />

      <SectionWrapper>
        <div className="flex desktop1:mt-[40px] flex-col items-center w-full tablet1:flex-row tablet1:justify-between desktop1:gap-x-0 desktop1:px-0">
          {/* Coluna esquerda */}
          <div className="col1 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card1.icon}
                title={t("features.card1.title")}
                paragraph={t("features.card1.subtitle")}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right-icon lucide-corner-down-right"
                    >
                      <path d="m15 10 5 5-5 5" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                  size="small"
                  className="bg-darker"
                  labelColor="text-white"
                  label={t("features.card1.buttonLabel")}
                  onClick={() => openModal(1)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card2.icon}
                title={t("features.card2.title")}
                paragraph={t("features.card2.subtitle")}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right-icon lucide-corner-down-right"
                    >
                      <path d="m15 10 5 5-5 5" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                  size="small"
                  className="bg-darker"
                  labelColor="text-white"
                  label={t("features.card2.buttonLabel")}
                  onClick={() => openModal(2)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
          </div>

          {/* Imagem central */}
          <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[35%]">
            <img
              src={content.texts.features.imgFeatures}
              alt={content.texts.features.alt}
              className="hidden h-[640px] object-cover w-full desktop1:flex rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
              loading="lazy"
            />
          </MotionDivDownToUp>

          {/* Coluna direita */}
          <div className="col3 tablet1:w-[50%] desktop1:w-[28%] flex flex-col justify-center items-center">
            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card3.icon}
                title={t("features.card3.title")}
                paragraph={t("features.card3.subtitle")}
                className={`tablet1:mb-[16px] desktop1:mb-0 desktop2:mb-[46px] ${textClass}`}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right-icon lucide-corner-down-right"
                    >
                      <path d="m15 10 5 5-5 5" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                  size="small"
                  className="bg-darker"
                  labelColor="text-white"
                  label={t("features.card3.buttonLabel")}
                  onClick={() => openModal(3)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <IconButtonFeatureCard
                icon={content.texts.features.card4.icon}
                title={
                  <span
                    dangerouslySetInnerHTML={{
                      __html: t(`features.card4.title`),
                    }}
                  />
                }
                paragraph={t("features.card4.subtitle")}
                className={textClass}
                colorMode={colorMode}
              >
                <Button
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-corner-down-right-icon lucide-corner-down-right"
                    >
                      <path d="m15 10 5 5-5 5" />
                      <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                    </svg>
                  }
                  size="small"
                  className="bg-darker"
                  labelColor="text-white"
                  label={t("features.card4.buttonLabel")}
                  onClick={() => openModal(4)}
                />
              </IconButtonFeatureCard>
            </MotionDivDownToUp>
          </div>
        </div>
      </SectionWrapper>

      {/* Modal */}
      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={<span dangerouslySetInnerHTML={{ __html: modalTitle }} />}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "60vw", "1024px": "70vw", "641px": "85vw" }}
      >
        {modalContent}
      </Dialog>
    </SectionArea>
  );
}
