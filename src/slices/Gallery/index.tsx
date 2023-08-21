// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage } from "@prismicio/next";

// import styles
import styles from "./styles.module.scss";

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_wrapper}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.col_1}>
          <PrismicNextImage field={slice.primary.image_1} />
          <PrismicNextImage field={slice.primary.image_2} />
        </div>
        <div className={styles.col_2}>
          <PrismicNextImage field={slice.primary.image_3} />
          <PrismicNextImage field={slice.primary.image_4} />
        </div>
        <div className={styles.col_3}>
          <PrismicNextImage field={slice.primary.image_5} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
