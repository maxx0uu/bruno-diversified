// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// React tools
import { useEffect, useState } from "react";

// External resources
import gsap from "gsap";

// Import styles
import styles from "./styles.module.scss";
import { Testimonials } from "./components/testimonials";

export type SimulationProps = SliceComponentProps<Content.SimulationSlice>;

const Simulation = ({ slice }: SimulationProps): JSX.Element => {
  // Manage tabs names and state in a useState
  const [tabName, setTabName] = useState(["", ""]);
  const [tabState, setTabState] = useState([true, false]);

  // Minimize the tab name and add dots at the end
  useEffect(() => {
    if (slice.primary.first_item_name && slice.primary.second_item_name) {
      const shortenName = (name: string) => {
        if (name.length > 10) {
          return name.slice(0, 9) + "...";
        }
        return name;
      };

      const newFirstTabName = shortenName(slice.primary.first_item_name);
      const newSecondTabName = shortenName(slice.primary.second_item_name);

      setTabName([newFirstTabName, newSecondTabName]);
    }
  }, []);

  // Manage tabs styles on click
  useEffect(() => {
    const displayTab = () => {
      if (tabState[0] == true && tabState[1] == false) {
        gsap.to(".tabs-container", {
          x: 0,
        });
        document.getElementById("royal-oak")?.classList.remove(styles.bbr);
        document.getElementById("royal-oak")?.classList.add(styles.active);
        document.getElementById("tache")?.classList.remove(styles.active);
        document.getElementById("tache")?.classList.add(styles.bbl);
        gsap.to(".tab_thumbnail_first", { x: -180, rotate: -4 });
        gsap.to(".tab_thumbnail_second", { translateX: 0, rotate: 4 });
      }
      if (tabState[0] == false && tabState[1] == true) {
        gsap.to(".tabs-container", {
          x: -256,
        });
        document.getElementById("royal-oak")?.classList.remove(styles.active);
        document.getElementById("tache")?.classList.remove(styles.bbl);
        document.getElementById("tache")?.classList.add(styles.active);
        document.getElementById("royal-oak")?.classList.add(styles.bbr);
        gsap.to(".tab_thumbnail_second", { translateX: -180, rotate: -4 });
        gsap.to(".tab_thumbnail_first", { x: 0, rotate: 4 });
      }
    };
    displayTab();
  }, [tabState, setTabState]);

  // Get window width on each resize
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    window.addEventListener("load", () => setWindowWidth(window.innerWidth));
  }, [windowWidth]);

  // const testimonialsLength = slice.items.length * 328;
  // const tl = gsap.timeline();

  // useEffect(() => {
  //   tl.set(".testimonial", {
  //     x: (i) => i * 328,
  //   });
  // }, []);

  // const prevSlide = () => {
  //   if (true) {
  //     tl.to(".testimonial", {
  //       x: "-=328",
  //       // modifiers: {
  //       //   x: gsap.utils.unitize((x) => parseFloat(x) % testimonialsLength),
  //       // },
  //     });
  //   }
  //   console.log(document.getElementsByClassName("testimonial"));
  // };
  // const nextSlide = () => {
  //   if (testimonialsLength - 328)
  //     tl.to(".testimonial", {
  //       x: "+=328",
  //       // modifiers: {
  //       //   x: gsap.utils.unitize((x) => parseFloat(x) % testimonialsLength),
  //       // },
  //     });
  // };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_simulation}
    >
      <div className={`${styles.wrapper_simulation} wrapper`}>
        <div className={styles.title}>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
        <div className={styles.interactive_panels}>
          <div className={styles.items}>
            <div className={styles.tab_selector}>
              <p
                className={`${styles.tab_name} ${styles.active}`}
                id="royal-oak"
                onClick={() => {
                  setTabState([true, false]);
                }}
              >
                {tabName[0]}
              </p>
              <p
                className={styles.tab_name}
                id="tache"
                onClick={() => {
                  setTabState([false, true]);
                }}
              >
                {tabName[1]}
              </p>
              <div className={styles.wrapper_tab_thumbnail}>
                <PrismicNextImage
                  field={slice.primary.first_item_image}
                  className="tab_thumbnail_first"
                />
                <PrismicNextImage
                  field={slice.primary.second_item_image}
                  className="tab_thumbnail_second"
                />
              </div>
            </div>
            <div className={styles.tabs_wrapper}>
              <div className={`${styles.tabs_container} tabs-container`}>
                <div className={styles.royal_oak}>
                  <h4>{slice.primary.first_item_name}</h4>
                  <div className={styles.author}>
                    <PrismicRichText field={slice.primary.first_item_author} />
                  </div>
                </div>
                <div className={styles.tache_2000}>
                  <h4>{slice.primary.second_item_name}</h4>
                  <div className={styles.author}>
                    <PrismicRichText field={slice.primary.second_item_author} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.simulator}>
            <div className={styles.datas}>
              <h5>Make your simulation :</h5>
              <label className={styles.input}>
                Your propriety
                <input placeholder="1000€" />
              </label>
              <label>Term</label>
              <div className={styles.buttons}>
                <button>3 years</button>
                <button>5 years</button>
              </div>
            </div>
            <div className={styles.results}>
              <h5>Result of what you'd have:</h5>
              <p className={styles.total}>0€</p>
              <p className={styles.disclaimer}>
                259% the net profit if you had kept it for 5 years. Based on
                actual data from Cresus Group.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.wrapper_testimonials}>
        <div className={styles.testimonials}>
          <PrismicRichText field={slice.primary.testimonials_title} />
          <div className={styles.container_testimonials}>
            <div
              className={`${styles.slider_btn} ${styles.prev}`}
              onClick={() => prevSlide()}
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
                  fill="white"
                />
              </svg>
            </div>
            <div
              className={`${styles.slider_btn} ${styles.slider_next}`}
              onClick={() => nextSlide()}
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
                  fill="white"
                />
              </svg>
            </div>
            <div className={styles.slider_testimonials}>
              {slice.items.map((testi, key: number) => {
                return (
                  <div
                    className={`${styles.testimonial} testimonial`}
                    key={key}
                  >
                    <div className={styles.title}>
                      <PrismicRichText field={testi.title} />
                    </div>
                    <div className={styles.note}>
                      {testi.note && "⭐️ ".repeat(parseInt(testi.note))}
                    </div>
                    <div className={styles.body}>
                      <PrismicRichText field={testi.body} />
                    </div>
                    <div className={styles.author}>
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
      </div> */}
      <Testimonials
        title={slice.primary.testimonials_title}
        datas={slice.items}
      />
    </section>
  );
};

export default Simulation;
