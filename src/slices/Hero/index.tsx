// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// React tools
import { useEffect, useState } from "react";

// Various
import gsap from "gsap";

// Types
import { GalleryCarouselDocument } from "../../../prismicio-types";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  const { carousel } = context as {
    carousel: ReadonlyArray<GalleryCarouselDocument<string>>;
  };
  // Get window width on each resize
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    window.addEventListener("load", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);
  useEffect(() => {
    if (windowWidth > 1200) {
      gsap.set(".carousel-0 .img-0", {
        x: 0,
        y: 0,
      });
      gsap.set(".carousel-0 .img-1", {
        x: 0,
        y: 316,
      });
      gsap.set(".carousel-0 .img-2", {
        x: 0,
        y: 632,
      });
      gsap.set(".carousel-0 .img-3", {
        x: 0,
        y: 948,
      });
      gsap.set(".carousel-0 .img-4", {
        x: 0,
        y: 1164,
      });
      gsap.set(".carousel-0 .img-5", {
        x: 0,
        y: 1480,
      });
      gsap.set(".carousel-0 .img-6", {
        x: 0,
        y: 1696,
      });
      gsap.set(".carousel-0 .img-7", {
        x: 0,
        y: 2012,
      });

      gsap.set(".carousel-1 .img-0", {
        x: 0,
        y: 0,
      });
      gsap.set(".carousel-1 .img-1", {
        x: 0,
        y: 316,
      });
      gsap.set(".carousel-1 .img-2", {
        x: 0,
        y: 632,
      });
      gsap.set(".carousel-1 .img-3", {
        x: 0,
        y: 848,
      });
      gsap.set(".carousel-1 .img-4", {
        x: 0,
        y: 1164,
      });
      gsap.set(".carousel-1 .img-5", {
        x: 0,
        y: 1380,
      });
      gsap.set(".carousel-1 .img-6", {
        x: 0,
        y: 1696,
      });
      gsap.set(".carousel-1 .img-7", {
        x: 0,
        y: 1912,
      });

      gsap.to(".carousel-img", {
        duration: 2,
        ease: "none",
        x: 0,
        y: "+=2228",
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % 0),
          y: gsap.utils.unitize((y) => parseFloat(y) % 2228),
        },
        repeat: -1,
      });
    } else {
      gsap.set(".carousel-0 .img-0", {
        x: 0,
        y: 0,
      });
      gsap.set(".carousel-0 .img-1", {
        x: 136,
        y: 0,
      });
      gsap.set(".carousel-0 .img-2", {
        x: 272,
        y: 0,
      });
      gsap.set(".carousel-0 .img-3", {
        x: 408,
        y: 0,
      });
      gsap.set(".carousel-0 .img-4", {
        x: 604,
        y: 0,
      });
      gsap.set(".carousel-0 .img-5", {
        x: 740,
        y: 0,
      });
      gsap.set(".carousel-0 .img-6", {
        x: 936,
        y: 0,
      });
      gsap.set(".carousel-0 .img-7", {
        x: 1072,
        y: 0,
      });

      gsap.set(".carousel-1 .img-0", {
        x: 0,
        y: 0,
      });
      gsap.set(".carousel-1 .img-1", {
        x: 136,
        y: 0,
      });
      gsap.set(".carousel-1 .img-2", {
        x: 272,
        y: 0,
      });
      gsap.set(".carousel-1 .img-3", {
        x: 468,
        y: 0,
      });
      gsap.set(".carousel-1 .img-4", {
        x: 604,
        y: 0,
      });
      gsap.set(".carousel-1 .img-5", {
        x: 800,
        y: 0,
      });
      gsap.set(".carousel-1 .img-6", {
        x: 936,
        y: 0,
      });
      gsap.set(".carousel-1 .img-7", {
        x: 1132,
        y: 0,
      });

      gsap.to(".carousel-img", {
        duration: 10,
        ease: "none",
        x: "+=1268",
        y: 0,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % 1268),
          y: gsap.utils.unitize((y) => parseFloat(y) % 0),
        },
        repeat: -1,
      });
    }
  }, [windowWidth]);

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
          {carousel.map(
            (carousel: GalleryCarouselDocument, carouselKey: number) => {
              return (
                <div className="carousel-wrapper" key={carouselKey}>
                  <div className={"carousel carousel-" + carouselKey}>
                    {carousel.data.gallery.map((image, imageKey: number) => (
                      <PrismicNextImage
                        key={imageKey}
                        field={image.image}
                        className={
                          "carousel-img carousel-img-" +
                          carouselKey +
                          " img-" +
                          imageKey
                        }
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
