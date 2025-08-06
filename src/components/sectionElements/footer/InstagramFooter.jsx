import React from "react";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import IconButton from "../../interactives/IconButton";
import content from "../../../content/content";

function InstagramFooter({ showSecond = false }) {
  return (
    <>
      {/* Instagram principal */}
      <MotionDivDownToUp>
        <a
          href={content.texts.links.instagram}
          target="_blank"
          aria-label="Link para o Instagram"
        >
          <IconButton
            ariaLabel="Botão para o Instagram"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="transparent"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            }
          />
        </a>
      </MotionDivDownToUp>

      {/* Instagram secundário */}
      {showSecond && (
        <MotionDivDownToUp>
          <a
            href={content.texts.links.instagramSecundary}
            target="_blank"
            aria-label="Link para o Instagram"
          >
            <IconButton
              ariaLabel="Botão para o Instagram"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              }
            />
          </a>
        </MotionDivDownToUp>
      )}
    </>
  );
}

export default InstagramFooter;
