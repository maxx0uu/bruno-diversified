// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";

export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-gallery"
    >
      <div className="wrapper wrapper-gallery">
        <div className="col-1">
          <PrismicNextImage field={slice.primary.image_1} />
          <PrismicNextImage field={slice.primary.image_2} />
        </div>
        <div className="col-2">
          <PrismicNextImage field={slice.primary.image_3} />
          <PrismicNextImage field={slice.primary.image_4} />
        </div>
        <div className="col-3">
          <PrismicNextImage field={slice.primary.image_5} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
