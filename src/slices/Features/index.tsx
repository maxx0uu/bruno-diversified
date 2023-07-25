// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { CtaDocument } from "../../../prismicio-types";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = ({ slice, context }: FeaturesProps): JSX.Element => {
  const { ctas } = context as {
    ctas: ReadonlyArray<CtaDocument<string>>;
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-features"
    >
      <div className="wrapper wrapper-features">
        <PrismicRichText field={slice.primary.title} />
        <div className="features">
          {slice.items.map((feature, key) => (
            <div className="feature" key={key}>
              <div className="gallery">
                <div className="col-1">
                  <PrismicNextImage field={feature.image_1} />
                  <PrismicNextImage field={feature.image_2} />
                </div>
                <div className="col-2">
                  <PrismicNextImage field={feature.image_3} />
                </div>
              </div>
              <div className="texts">
                <div className="title">
                  <PrismicRichText field={feature.title} />
                </div>
                <div className="body">
                  <PrismicRichText field={feature.body} />
                </div>
                {ctas.map((cta) => {
                  if (cta.uid == "cta-black-bg")
                    return (
                      <PrismicNextLink
                        className="cta-black-bg"
                        key={cta.uid}
                        field={cta.data.url}
                      >
                        {cta.data.text}
                      </PrismicNextLink>
                    );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
