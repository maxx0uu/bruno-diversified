// Import types
import { KeyTextField, LinkField } from "@prismicio/client";

// Import components
import { PrismicNextLink } from "@prismicio/next";

// Import styles
import styles from "../styles.module.scss";

type TCta = {
  url: LinkField;
  body: KeyTextField;
};

export const CtaWhiteBg = ({ url, body }: TCta) => {
  return (
    <PrismicNextLink
      className={`${styles.cta} ${styles.ctawhitebg}`}
      field={url}
    >
      {body}
    </PrismicNextLink>
  );
};
