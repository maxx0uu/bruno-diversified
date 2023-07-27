// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage } from "@prismicio/next";

// Import styles
import styles from "./styles.module.scss";

export type LogosProps = SliceComponentProps<Content.LogosSlice>;

const Logos = ({ slice }: LogosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_wrapper}
    >
      <div className={`${styles.container} wrapper`}>
        {slice.items.map((logo, key) => (
          <div className={styles.logo} key={key}>
            <PrismicNextImage field={logo.logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
