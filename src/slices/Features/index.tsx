// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicRichText } from "@prismicio/react";

// Types
import { CtaDocument } from "../../../prismicio-types";

// Import styles
import styles from "./styles.module.scss";
import { useWindowWidthContext } from "../../../context/WindowWidthContext";
import { CtaManager } from "@/Components/Cta";
import { PrismicNextImage } from "@prismicio/next";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = ({ slice, context }: FeaturesProps): JSX.Element => {
  // Call nested components
  // Add types to Prismic components to avoid undefined errors
  const { ctas } = context as {
    ctas: ReadonlyArray<CtaDocument<string>>;
  };

  const featureCta = ctas.find((cta) => cta.uid === "cta-black-bg");

  const { windowWidth } = useWindowWidthContext();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-features"
      className={styles.section_features}
    >
      <div className={`${styles.wrapper_features} wrapper`}>
        <PrismicRichText field={slice.primary.title} />
        <div className={styles.container_features}>
          {slice.items.map((feature, key) => {
            return (
              <div className={styles.feature} key={key}>
                <div className={styles.gallery}>
                  <div className={styles.col_1}>
                    <PrismicNextImage field={feature.image_1} />
                    <PrismicNextImage field={feature.image_2} />
                  </div>
                  <div className="col-2">
                    <PrismicNextImage field={feature.image_3} />
                  </div>
                </div>
                <div className={styles.texts}>
                  <div className={styles.title}>
                    <PrismicRichText field={feature.title} />
                  </div>
                  <div className={styles.body}>
                    <PrismicRichText field={feature.body} />
                  </div>
                  {featureCta && (
                    <CtaManager
                      variant={featureCta.uid}
                      url={featureCta.data.url}
                      body={featureCta.data.text}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
