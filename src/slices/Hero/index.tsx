// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// React tools
import { useEffect, useState } from "react";

// External resources
import gsap from "gsap";

// Types
import { GalleryCarouselDocument } from "../../../prismicio-types";

// import styles
import styles from "./styles.module.scss";
import { useWindowWidthContext } from "../../../context/WindowWidthContext";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice, context }: HeroProps): JSX.Element => {
  const { carousel } = context as {
    carousel: ReadonlyArray<GalleryCarouselDocument<string>>;
  };

  const { windowWidth } = useWindowWidthContext();

  // Desktop
  useEffect(() => {
    // Column 1
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-0`, {
      x: 0,
      y: -2012,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-1`, {
      x: 0,
      y: -1696,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-2`, {
      x: 0,
      y: -1380,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-3`, {
      x: 0,
      y: -1064,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-4`, {
      x: 0,
      y: -848,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-5`, {
      x: 0,
      y: -532,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-6`, {
      x: 0,
      y: -316,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-0 .img-7`, {
      x: 0,
      y: 0,
    });

    // Column 2
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-0`, {
      x: 0,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-1`, {
      x: 0,
      y: 316,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-2`, {
      x: 0,
      y: 632,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-3`, {
      x: 0,
      y: 848,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-4`, {
      x: 0,
      y: 1164,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-5`, {
      x: 0,
      y: 1380,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-6`, {
      x: 0,
      y: 1696,
    });
    gsap.set(`.${styles.container_carousels_desktop} .carousel-1 .img-7`, {
      x: 0,
      y: 1912,
    });

    // Animation
    // Column 1
    gsap.to(
      `.${styles.container_carousels_desktop} .carousel-1 .carousel-img`,
      {
        duration: 30,
        ease: "none",
        // x: 0,
        y: "+=2228",
        modifiers: {
          y: gsap.utils.unitize((y) => parseFloat(y) % 2228),
        },
        repeat: -1,
      }
    );

    // Column 2
    gsap.to(
      `.${styles.container_carousels_desktop} .carousel-0 .carousel-img`,
      {
        duration: 30,
        ease: "none",
        // x: 0,
        y: "-=2228",
        modifiers: {
          y: gsap.utils.unitize((y) => parseFloat(y) % -2228),
        },
        repeat: -1,
      }
    );
  }, [windowWidth]);

  // Mobile
  useEffect(() => {
    // Column 1
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-0`, {
      x: 0,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-1`, {
      x: 136,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-2`, {
      x: 272,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-3`, {
      x: 408,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-4`, {
      x: 604,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-5`, {
      x: 740,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-6`, {
      x: 936,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-0 .img-7`, {
      x: 1072,
      y: 0,
    });

    // Column 2
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-0`, {
      x: 0,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-1`, {
      x: -136,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-2`, {
      x: -332,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-3`, {
      x: -464,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-4`, {
      x: -660,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-5`, {
      x: -796,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-6`, {
      x: -992,
      y: 0,
    });
    gsap.set(`.${styles.container_carousels_mobile} .carousel-1 .img-7`, {
      x: -1126,
      y: 0,
    });

    // Animation
    // Column 1
    gsap.to(`.${styles.container_carousels_mobile} .carousel-0 .carousel-img`, {
      duration: 20,
      ease: "none",
      x: "+=1268",
      // y: "+=2228",
      modifiers: {
        x: gsap.utils.unitize((y) => parseFloat(y) % 1268),
      },
      repeat: -1,
    });

    // Column 2
    gsap.to(`.${styles.container_carousels_mobile} .carousel-1 .carousel-img`, {
      duration: 20,
      ease: "none",
      x: "-=1268",
      modifiers: {
        x: gsap.utils.unitize((y) => parseFloat(y) % -1268),
      },
      repeat: -1,
    });
  }, [windowWidth]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_wrapper}
    >
      <div className={`${styles.wrapper} wrapper`}>
        <div className={styles.texts}>
          <div className={styles.main_title}>
            <PrismicRichText field={slice.primary.title} />
            <PrismicRichText field={slice.primary.subtitle} />
          </div>
          <div className={styles.premium}>
            <PrismicRichText field={slice.primary.premium} />
          </div>
          <div className={styles.container_checkpoints}>
            {slice.items.map((cp, key) => (
              <div className={styles.checkpoint} key={key}>
                <PrismicNextImage field={cp.cp_icon} />
                <PrismicRichText field={cp.cp_body} />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.container_carousels_desktop}>
          {carousel.map(
            (carousel: GalleryCarouselDocument, carouselKey: number) => {
              let carouselNumber = "";
              switch (carouselKey) {
                case 0:
                  carouselNumber = "styles_carousel_0__Ox7Bj";
                  break;
                case 1:
                  carouselNumber = "styles_carousel_1__c527h";
                  break;
              }
              return (
                <div
                  className={styles.carousel_wrapper_desktop}
                  key={carouselKey}
                >
                  <div
                    className={`carousel carousel-${carouselKey} ${carouselNumber} `}
                  >
                    {carousel.data.gallery.map((image, imageKey: number) => (
                      <PrismicNextImage
                        key={imageKey}
                        field={image.image}
                        className={"carousel-img img-" + imageKey}
                      />
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
        <div className={styles.container_carousels_mobile}>
          {carousel.map(
            (carousel: GalleryCarouselDocument, carouselKey: number) => {
              let carouselNumber = "";
              switch (carouselKey) {
                case 0:
                  carouselNumber = "styles_carousel_0__Ox7Bj";
                  break;
                case 1:
                  carouselNumber = "styles_carousel_1__c527h";
                  break;
              }
              return (
                <div
                  className={styles.carousel_wrapper_desktop}
                  key={carouselKey}
                >
                  <div
                    className={`carousel carousel-${carouselKey} ${carouselNumber} `}
                  >
                    {carousel.data.gallery.map((image, imageKey: number) => (
                      <PrismicNextImage
                        key={imageKey}
                        field={image.image}
                        className={"carousel-img img-" + imageKey}
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
