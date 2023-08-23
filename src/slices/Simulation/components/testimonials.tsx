import { PrismicRichText } from "@prismicio/react";
import { Simplify } from "../../../../prismicio-types";
import { Content, TitleField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowWidthContext } from "../../../../context/WindowWidthContext";

interface TestimonialsProps {
  title: TitleField;
  datas: Simplify<Content.SimulationSliceDefaultItem>[];
}

export const Testimonials = ({ title, datas }: TestimonialsProps) => {
  const { windowWidth } = useWindowWidthContext();
  const [containerWidth, setContainerWidth] = useState(0);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.set(".styles_view_slider__4VjeO", { x: 0 });
    window.addEventListener(
      "resize",
      () =>
        container.current && setContainerWidth(container.current.clientWidth)
    );
    window.addEventListener(
      "load",
      () =>
        container.current && setContainerWidth(container.current.clientWidth)
    );
  }, []);
  const [pushSlide, setPushSlide] = useState(0);
  const prevSlide = () => {
    console.log(pushSlide);
    if (pushSlide > 0) {
      gsap.to(".styles_view_slider__4VjeO", { x: "+=328", duration: 0.5 });
      setPushSlide(pushSlide - 1);
      console.log(pushSlide);
    }
  };
  const nextSlide = () => {
    if (pushSlide < datas.length - 3) {
      gsap.to(".styles_view_slider__4VjeO", { x: "-=328", duration: 0.5 });
      setPushSlide(pushSlide + 1);
      console.log(pushSlide);
    }
  };

  return (
    <>
      <div className={styles.wrapper_testimonials}>
        <div className={styles.container_testimonials}>
          <PrismicRichText field={title} />
          <div className={styles.wrapper_slider}>
            <div className={styles.container_navigation}>
              <div
                className={`${styles.slider_btn} ${styles.slider_next}`}
                onClick={() => prevSlide()}
              >
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.37114e-07 5L4.80077 -1.04841e-07L6 1.25099L2.40038 5L5.99999 8.749L4.80076 10L4.37114e-07 5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className={`${styles.slider_btn} ${styles.prev}`}
                onClick={() => nextSlide()}
              >
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.39893 5L1.59816 10L0.398926 8.74901L3.99854 5L0.398932 1.251L1.59816 0L6.39893 5Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.container_slider} ref={container}>
              <div className={styles.view_slider}>
                {datas.map((testi: any, key: number) => {
                  return (
                    <div
                      className={`${styles.container_testimonial} testimonial`}
                      key={key}
                    >
                      <div className={styles.testimonial_content}>
                        <div className={styles.title}>
                          <PrismicRichText field={testi.title} />
                        </div>
                        <div className={styles.note}>
                          {testi.note && "⭐️ ".repeat(parseInt(testi.note))}
                        </div>
                        <div className={styles.body}>
                          <PrismicRichText field={testi.body} />
                        </div>
                      </div>
                      <div className={styles.testimonial_author}>
                        <div className={styles.image}>
                          <PrismicNextImage field={testi.picture} />
                        </div>
                        <div className={styles.name}>
                          <PrismicRichText field={testi.name} />
                        </div>
                        <div className={styles.job}>
                          <PrismicRichText field={testi.job} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
