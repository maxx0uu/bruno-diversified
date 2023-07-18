// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export type OneAppProps = SliceComponentProps<Content.OneAppSlice>;

const OneApp = ({ slice }: OneAppProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-one-app"
    >
      <div className="wrapper wrapper-one-app">
        <div className="title">
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
        <div className="cards-wrapper">
          {slice.items.map((card, key) => {
            return (
              <div className={"card card-" + key} key={key}>
                <div className="texts">
                  <PrismicRichText field={card.title} />
                  <PrismicRichText field={card.body} />
                </div>
                <PrismicNextImage field={card.image} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OneApp;
