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
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export type SimulationProps = SliceComponentProps<Content.SimulationSlice>;

const Simulation = ({ slice }: SimulationProps): JSX.Element => {
  const [tabName, setTabName] = useState(["", ""]);
  const [tabState, setTabState] = useState([true, false]);

  useEffect(() => {
    if (slice.primary.first_item_name && slice.primary.second_item_name) {
      const baseNameFirst = slice.primary.first_item_name.split("");
      const baseNameSecond = slice.primary.second_item_name.split("");

      let newFirst = [];
      let newSecond = [];
      if (baseNameFirst.length > 10) {
        for (let i = 0; i < 9; i++) {
          newFirst.push(baseNameFirst[i]);
        }
      }
      const newFirstTabName = newFirst.join("") + "...";

      if (baseNameSecond.length > 10) {
        for (let i = 0; i < 9; i++) {
          newSecond.push(baseNameSecond[i]);
        }
      }
      const newSecondTabName = newSecond.join("") + "...";

      setTabName([newFirstTabName, newSecondTabName]);
    }
  }, []);

  useEffect(() => {
    const displayTab = () => {
      if (tabState[0] == true && tabState[1] == false) {
        gsap.to(".tabs-container", {
          x: 0,
        });
        document.getElementById("royal-oak")?.classList.remove("bbr");
        document.getElementById("royal-oak")?.classList.add("active");
        document.getElementById("tache")?.classList.remove("active");
        document.getElementById("tache")?.classList.add("bbl");
        gsap.to(".tab-thumbnail-first", { x: -180, rotate: -4 });
        gsap.to(".tab-thumbnail-second", { translateX: 0, rotate: 4 });
      }
      if (tabState[0] == false && tabState[1] == true) {
        gsap.to(".tabs-container", {
          x: -256,
        });
        document.getElementById("royal-oak")?.classList.remove("active");
        document.getElementById("tache")?.classList.remove("bbl");
        document.getElementById("tache")?.classList.add("active");
        document.getElementById("royal-oak")?.classList.add("bbr");
        gsap.to(".tab-thumbnail-second", { translateX: -180, rotate: -4 });
        gsap.to(".tab-thumbnail-first", { x: 0, rotate: 4 });
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

  const testimonialsLength = slice.items.length * 328;
  const tl = gsap.timeline();

  useEffect(() => {
    gsap.set(".testimonial", {
      x: (i) => i * 328 - 328,
    });

    tl.to(".testimonial", {
      duration: 10,
      ease: "none",
      x: "+=" + testimonialsLength,
      modifiers: {
        x: gsap.utils.unitize(
          (x) => (parseFloat(x) % testimonialsLength) - 328
        ),
      },
      repeat: -1,
    });
    tl.pause();
  }, []);
  const prevSlide = () => {
    tl.to(".testimonial", {
      x: "-=328",
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -328),
      },
    });
  };
  const nextSlide = () => {
    tl.to(".testimonial", {
      x: "+=328",
      modifiers: {
        x: gsap.utils.unitize(
          (x) => (parseFloat(x) % testimonialsLength) - 328
        ),
      },
    });
  };

  useEffect(() => {}, []);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-simulation"
    >
      <div className="wrapper wrapper-simulation">
        <div className="title">
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
        <div className="interactive-panels">
          <div className="items">
            <div className="tab-selector">
              <p
                className="tab-name active"
                id="royal-oak"
                onClick={() => {
                  setTabState([true, false]);
                }}
              >
                {tabName[0]}
              </p>
              <p
                className="tab-name"
                id="tache"
                onClick={() => {
                  setTabState([false, true]);
                }}
              >
                {tabName[1]}
              </p>
              <div className="wrapper-tab-thumbnail">
                <PrismicNextImage
                  field={slice.primary.first_item_image}
                  className="tab-thumbnail-first"
                />
                <PrismicNextImage
                  field={slice.primary.second_item_image}
                  className="tab-thumbnail-second"
                />
              </div>
            </div>
            <div className="tabs-wrapper">
              <div className="tabs-container">
                <div className="royal-oak">
                  <h4>{slice.primary.first_item_name}</h4>
                  <div className="author">
                    <PrismicRichText field={slice.primary.first_item_author} />
                  </div>
                </div>
                <div className="tache-2000">
                  <h4>{slice.primary.second_item_name}</h4>
                  <div className="author">
                    <PrismicRichText field={slice.primary.second_item_author} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="simulator">
            <div className="datas">
              <h5>Make your simulation :</h5>
              <label className="input">
                Your propriety
                <input placeholder="1000€" />
              </label>
              <label>Term</label>
              <div className="buttons">
                <button>3 years</button>
                <button>5 years</button>
              </div>
            </div>
            <div className="results">
              <h5>Result of what you'd have:</h5>
              <p className="total">0€</p>
              <p className="disclaimer">
                259% the net profit if you had kept it for 5 years. Based on
                actual data from Cresus Group.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper-testimonials">
        <div className="testimonials">
          <PrismicRichText field={slice.primary.testimonials_title} />
          <div className="container-testimonials">
            <div
              className="slider-btn slider-prev"
              onClick={() => prevSlide()}
            ></div>
            <div
              className="slider-btn slider-next"
              onClick={() => nextSlide()}
            ></div>
            {slice.items.map((testi, key: number) => {
              return (
                <div className={"testimonial textimonial-" + key} key={key}>
                  <div className="title">
                    <PrismicRichText field={testi.title} />
                  </div>
                  <div className="note">
                    {testi.note && "⭐️ ".repeat(parseInt(testi.note))}
                  </div>
                  <div className="body">
                    <PrismicRichText field={testi.body} />
                  </div>
                  <div className="author">
                    <div className="image">
                      <PrismicNextImage field={testi.picture} />
                    </div>
                    <div className="name">
                      <PrismicRichText field={testi.name} />
                    </div>
                    <div className="job">
                      <PrismicRichText field={testi.job} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulation;
