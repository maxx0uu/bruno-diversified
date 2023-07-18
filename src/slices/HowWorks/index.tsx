// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// React tools
import { useEffect, useState } from "react";

export type HowWorksProps = SliceComponentProps<Content.HowWorksSlice>;

const HowWorks = ({ slice }: HowWorksProps): JSX.Element => {
  const [tabState, setTabState] = useState([true, false, false]);

  useEffect(() => {
    const tabs = document.getElementsByClassName("tab");
    tabState.map((state: boolean, index: number) => {
      state
        ? tabs[index].classList.add("active")
        : tabs[index].classList.remove("active");
    });
  }, [tabState]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-how-works"
    >
      <div className="wrapper wrapper-how-works">
        <div className="title">
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
        <div className="purple-container">
          <div className="tabs">
            {slice.items.map((tab, key) => (
              <div
                className="tab"
                key={key}
                onClick={() => {
                  const tempState = [false, false, false];
                  tempState[key] = true;
                  setTabState(tempState);
                }}
              >
                <h5 className="index">{key + 1}</h5>
                <div className="tab-content">
                  <PrismicRichText field={tab.title} />
                  <PrismicRichText field={tab.body} />
                </div>
              </div>
            ))}
          </div>
          <div className="preview">
            <div className="mockup">
              <PrismicNextImage field={slice.primary.mockup} />
            </div>
            <div className="default-screen">
              <PrismicNextImage field={slice.primary.screen} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
