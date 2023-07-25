// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// Types
import { CtaDocument } from "../../../prismicio-types";

export type IntroProps = SliceComponentProps<Content.IntroSlice>;

const Intro = ({ slice, context }: IntroProps): JSX.Element => {
  const { ctas } = context as {
    ctas: ReadonlyArray<CtaDocument<string>>;
  };
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-intro"
    >
      <div className="wrapper wrapper-intro">
        <div className="container-image-intro">
          <PrismicNextImage field={slice.primary.image} priority />
        </div>
        <div className="texts">
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.body} />
          <div className="ctas">
            {ctas.map((cta) => {
              if (cta.uid == "cta-primary")
                return (
                  <PrismicNextLink
                    className="cta-primary"
                    key={cta.uid}
                    field={cta.data.url}
                  >
                    {cta.data.text}
                  </PrismicNextLink>
                );
            })}
            {ctas.map((cta) => {
              if (cta.uid == "cta-white-bg")
                return (
                  <PrismicNextLink
                    className="cta-white-bg"
                    key={cta.uid}
                    field={cta.data.url}
                  >
                    {cta.data.text}
                  </PrismicNextLink>
                );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
