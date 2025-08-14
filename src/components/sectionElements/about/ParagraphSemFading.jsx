import Paragraphs from "../Paragraphs";

import content from "../../../content/content";
export default function ParagraphSemFading() {
  return (
    <Paragraphs className="text-colorWhite text-opacity-80">
      {content.texts.about.paragraph}
    </Paragraphs>
  );
}
