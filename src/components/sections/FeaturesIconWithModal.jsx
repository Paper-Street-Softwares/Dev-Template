import content from "../../content/content";
import IconFeatureCard from "../cards/IconFeatureCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import ServicesModal from "./ServicesModal";

export default function FeaturesIconWithModal({ colorMode }) {
  // Define background and text colors based on colorMode
  const bgClasses = {
    dark: "bg-bgSectionOpacityDark",
    light: "bg-bgSectionOpacityLight",
    default: "squares",
  };
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-black",
  };

  const bgClass = bgClasses[colorMode] || bgClasses.default;
  const textClass = textClasses[colorMode] || textClasses.default;

  return (
    <SectionArea id="service" className={`${bgClass} `} paddingbot={true}>
      <SectionHeader
        className={`text-center ${textClass} mb-[26px] tablet1:mb-[40px] desktop1:mb-[72px]`}
        miniTitle={content.texts.features.miniTag}
        sectionHeaderTitle={content.texts.features.title}
        sectionHeaderSubtitle={content.texts.features.subtitle}
        titleColorSet={textClass}
        subtitleColorSet={textClass}
      />
      <SectionWrapper>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card1.icon}
              title={content.texts.features.card1.title}
              paragraph={content.texts.features.card1.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card2.icon}
              title={content.texts.features.card2.title}
              paragraph={content.texts.features.card2.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card3.icon}
              title={content.texts.features.card3.title}
              paragraph={content.texts.features.card3.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card4.icon}
              title={content.texts.features.card4.title}
              paragraph={content.texts.features.card4.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card5.icon}
              title={content.texts.features.card5.title}
              paragraph={content.texts.features.card5.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card6.icon}
              title={content.texts.features.card6.title}
              paragraph={content.texts.features.card6.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={content.texts.features.card7.icon}
              title={content.texts.features.card7.title}
              paragraph={content.texts.features.card7.subtitle}
              className="m-auto"
              colorMode={colorMode}
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp>
            <IconFeatureCard
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-plus"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12h8" />
                  <path d="M12 8v8" />
                </svg>
              }
              title="Conheça outras áreas"
              paragraph="Saiba em quais áreas também atuamos"
            >
              <ServicesModal />
            </IconFeatureCard>
          </MotionDivDownToUp>
        </div>
      </SectionWrapper>
    </SectionArea>
  );
}
