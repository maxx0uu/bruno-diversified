// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// React tools
import { useEffect } from "react";

// Various
import gsap from "gsap";

// Types
import { GalleryCarouselDocument } from "../../../prismicio-types";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  // useEffect(() => {
  //   gsap.set(".carousel-0 .img-0", {
  //     y: 0,
  //   });
  //   gsap.set(".carousel-0 .img-1", {
  //     y: 316,
  //   });
  //   gsap.set(".carousel-0 .img-2", {
  //     y: 632,
  //   });
  //   gsap.set(".carousel-0 .img-3", {
  //     y: 948,
  //   });
  //   gsap.set(".carousel-0 .img-4", {
  //     y: 1164,
  //   });
  //   gsap.set(".carousel-0 .img-5", {
  //     y: 1480,
  //   });
  //   gsap.set(".carousel-0 .img-6", {
  //     y: 1696,
  //   });
  //   gsap.set(".carousel-0 .img-7", {
  //     y: 2012,
  //   });

  //   gsap.set(".carousel-1 .img-0", {
  //     y: 0,
  //   });
  //   gsap.set(".carousel-1 .img-1", {
  //     y: 316,
  //   });
  //   gsap.set(".carousel-1 .img-2", {
  //     y: 632,
  //   });
  //   gsap.set(".carousel-1 .img-3", {
  //     y: 848,
  //   });
  //   gsap.set(".carousel-1 .img-4", {
  //     y: 1164,
  //   });
  //   gsap.set(".carousel-1 .img-5", {
  //     y: 1380,
  //   });
  //   gsap.set(".carousel-1 .img-6", {
  //     y: 1696,
  //   });
  //   gsap.set(".carousel-1 .img-7", {
  //     y: 1912,
  //   });
  //   gsap.to(".carousel-img", {
  //     duration: 10,
  //     ease: "none",
  //     y: "+=2012",
  //     modifiers: {
  //       y: gsap.utils.unitize((y) => parseFloat(y) % 2228),
  //     },
  //     repeat: -1,
  //   });
  // }, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-hero"
    >
      <div className="wrapper wrapper-hero">
        <div className="texts">
          <div className="main-title">
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
          <div className="premium">
            <PrismicRichText field={slice.primary.premium} />
          </div>
          <div className="checkpoints">
            {slice.items.map((cp, key) => (
              <div className="cp" key={key}>
                <PrismicNextImage field={cp.cp_icon} />
                <PrismicRichText field={cp.cp_body} />
              </div>
            ))}
          </div>
        </div>
        <div className="carousels">
          {context.carousel.map(
            (carousel: GalleryCarouselDocument, key: number) => {
              return (
                <div className="carousel-wrapper" key={key}>
                  <div className={"carousel carousel-" + key}>
                    {carousel.data.gallery.map((image, key: number) => (
                      <PrismicNextImage
                        key={key}
                        field={image.image}
                        className={"carousel-img img-" + key}
                      />
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
