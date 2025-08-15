import { useTranslation } from "react-i18next";

export default function AboutFading({ colorMode = "default" }) {
  const { t } = useTranslation();

  // Classes de tema
  const textClasses = {
    dark: "text-white",
    light: "text-black",
    default: "text-white",
  };
  const fadeClasses = {
    dark: "to-bgFixedDark",
    light: "to-bgFixedLight",
    default: "to-bgSectionDark",
  };

  const textClass = textClasses[colorMode] || textClasses.default;
  const fadeClass = fadeClasses[colorMode] || fadeClasses.default;

  // Puxando o parágrafo do JSON de tradução
  const aboutText = t("about.paragraph", { returnObjects: true });

  return (
    <div className={`relative font-secondFont text-paragraph4 ${textClass}`}>
      {aboutText}
      <div
        className={`bottom-0 absolute w-full h-[80px] bg-gradient-to-b from-transparent ${fadeClass}`}
      ></div>
    </div>
  );
}
