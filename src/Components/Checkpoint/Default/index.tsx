// Import types
import { ImageField, RichTextField } from "@prismicio/client";

// Import components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// Import styles
import "../style.css";

type TCheckpoint = {
  icon: ImageField;
  body: RichTextField;
};

export const CheckpointDefault = ({ icon, body }: TCheckpoint) => {
  return (
    <div className="checkpoint">
      <PrismicNextImage field={icon} />
      <PrismicRichText field={body} />
    </div>
  );
};
