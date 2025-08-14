import { X } from "lucide-react";

import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import Button from "../interactives/Button";
import content from "../../content/content";
import SectionArea from "../sectionElements/SectionArea";
import SectionHeader from "../sectionElements/SectionHeader";
import SectionWrapper from "../sectionElements/SectionWrapper";
import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import IconButtonFeatureCard from "../cards/IconButtonFeatureCard";

export default function DefaultModals({ modal = "true", colorMode }) {
  const [visible, setVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalSubtitle, setModalSubtitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const onClick = (title, subtitle, content) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalContent(content);
    setVisible(true);
  };

  const bgClasses = {
    ddark: "bg-bgSectionOpacityDark",
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
    <>
      <SectionArea id="service" className={`${bgClass}`}>
        <SectionHeader
          className="text-center"
          miniTitle={content.texts.features.miniTag}
          sectionHeaderTitle={content.texts.features.title}
          sectionHeaderSubtitle={content.texts.features.subtitle}
          titleColorSet={textClass}
          subtitleColorSet={textClass}
        />

        <SectionWrapper>
          <div className="flex flex-col items-center w-full justify-evenly tablet1:flex-row">
            <div className="flex flex-wrap items-start justify-center tablet1:justify-evenly w-full gap-4">
              <div className="col3  desktop1:w-[28%] gap-4 flex flex-col justify-center items-center">
                {" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card1.icon}
                    title={content.texts.features.card1.title}
                    paragraph={content.texts.features.card1.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card1.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card1.title,
                          content.texts.features.card1.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                                  </svg>
                                }
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card3.icon}
                    title={content.texts.features.card3.title}
                    paragraph={content.texts.features.card3.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card3.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card3.title,
                          content.texts.features.card3.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                                  </svg>
                                }
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card5.icon}
                    title={content.texts.features.card5.title}
                    paragraph={content.texts.features.card5.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card5.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card5.title,
                          content.texts.features.card5.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                                  </svg>
                                }
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
              </div>

              <MotionDivDownToUp className="hidden desktop1:flex justify-center w-[32%]">
                <div
                  className="hidden h-[900px] w-full desktop1:flex col2 rounded-2xl bg-top bg-cover shadow-custom-opacity shadow-shadowFeatures/10"
                  style={{
                    backgroundImage: `url(${content.texts.features.imgFeatures})`,
                  }}
                ></div>
              </MotionDivDownToUp>

              <div className="col3 desktop1:w-[28%] gap-4 flex flex-col justify-center items-center">
                {" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card4.icon}
                    title={content.texts.features.card4.title}
                    paragraph={content.texts.features.card4.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      size="small"
                      colorMode={colorMode}
                      label={content.texts.features.card4.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card4.title,
                          content.texts.features.card4.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                                  </svg>
                                }
                                colorMode={colorMode}
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card2.icon}
                    title={content.texts.features.card2.title}
                    paragraph={content.texts.features.card2.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card2.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card2.title,
                          content.texts.features.card2.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                                  </svg>
                                }
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
                <MotionDivDownToUp className="flex flex-col items-center justify-center border-[2px] border-solid px-[10px] py-[20px]">
                  <IconButtonFeatureCard
                    icon={content.texts.features.card6.icon}
                    title={content.texts.features.card6.title}
                    paragraph={content.texts.features.card6.subtitle}
                    className="tablet1:mb-[12px] desktop1:mb-0 desktop2:mb-[18px]"
                    colorMode={colorMode}
                  />
                  {modal && (
                    <Button
                      colorMode={colorMode}
                      size="small"
                      label={content.texts.features.card6.buttonLabel}
                      onClick={() =>
                        onClick(
                          content.texts.features.card6.title,
                          content.texts.features.card6.description,
                          <>
                            <p className="my-[20px]">
                              Quer saber mais? Clique abaixo 👇
                            </p>
                            <div>
                              <Button
                                colorMode={colorMode}
                                aria-label={
                                  content.texts.about.ctaButtonAriaLabel
                                }
                                label={content.texts.about.ctaButtonText}
                                buttonLink={content.texts.links.ctaWhatsapp}
                                animation={false}
                                className="hover:scale-105"
                                icon={
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                                  </svg>
                                }
                              />
                            </div>
                          </>
                        )
                      }
                      icon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-corner-down-right"
                        >
                          <polyline points="15 10 20 15 15 20" />
                          <path d="M4 4v7a4 4 0 0 0 4 4h12" />
                        </svg>
                      }
                    />
                  )}
                </MotionDivDownToUp>{" "}
              </div>
            </div>
          </div>
        </SectionWrapper>
      </SectionArea>

      <Dialog
        className="font-secondFont"
        closeIcon={<X size={20} />}
        header={modalTitle}
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "50vw" }}
        breakpoints={{ "4000px": "35vw", "1024px": "60vw", "641px": "90vw" }}
      >
        <h3>{modalSubtitle}</h3>
        <p className="m-0">{modalContent}</p>
      </Dialog>
    </>
  );
}
