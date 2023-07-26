// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { CtaManager } from "@/Components/Cta";

// Types
import { CtaDocument } from "../../../prismicio-types";

// Import styles
import styles from "./styles.module.scss";

export type IntroProps = SliceComponentProps<Content.IntroSlice>;

const Intro = ({ slice, context }: IntroProps): JSX.Element => {
  // Call nested components
  const { ctas } = context as {
    ctas: ReadonlyArray<CtaDocument<string>>;
  };

  const primaryCta = ctas.find((cta) => cta.uid === "cta-primary");
  const secondaryCta = ctas.find((cta) => cta.uid === "cta-white-bg");

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id={styles.section_intro}
    >
      <div className={`${styles.wrapper_intro} wrapper`}>
        <div className={styles.container_image_intro}>
          <PrismicNextImage field={slice.primary.image} priority />
        </div>
        <div className={styles.texts}>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.body} />
          <div className={styles.ctas}>
            {primaryCta && (
              <CtaManager
                variant={primaryCta.uid}
                url={primaryCta.data.url}
                body={primaryCta.data.text}
              />
            )}
            {secondaryCta && (
              <CtaManager
                variant={secondaryCta.uid}
                url={secondaryCta.data.url}
                body={secondaryCta.data.text}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
