// Import types
import { KeyTextField, LinkField } from "@prismicio/client";

// import components
import { CtaDefault } from "./Default";
import { CtaBlackBg } from "./Black-BG";
import { CtaWhiteBg } from "./White-BG";

type TCtaManager = {
  variant: string;
  url: LinkField;
  body: KeyTextField;
};

export const CtaManager = ({ variant, url, body }: TCtaManager) => {
  switch (variant) {
    case "cta-primary":
      return <CtaDefault url={url} body={body} />;
      break;
    case "cta-black-bg":
      return <CtaBlackBg url={url} body={body} />;
      break;
    case "cta-white-bg":
      return <CtaWhiteBg url={url} body={body} />;
      break;
    default:
      console.error("Error: Cta variant " + variant + " was not found");
      break;
  }
};
