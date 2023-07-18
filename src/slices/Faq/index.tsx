// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

export type FaqProps = SliceComponentProps<Content.FaqSlice>;

const Faq = ({ slice, context }: FaqProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-faq"
    >
      <div className="wrapper wrapper-faq">
        <div className="title">
          <PrismicRichText field={slice.primary.title} />
          <div className="ctas">
            {context.ctas.map((cta: CtaDocument) => {
              if (cta.uid == "cta-primary")
                return (
                  <PrismicNextLink
                    className="cta-primary"
                    key={cta.uid}
                    field={cta}
                  >
                    {cta.data.text}
                  </PrismicNextLink>
                );
            })}
            {context.ctas.map((cta: CtaDocument) => {
              if (cta.uid == "cta-white-bg")
                return (
                  <PrismicNextLink
                    className="cta-black-bg"
                    key={cta.uid}
                    field={cta}
                  >
                    More questions
                  </PrismicNextLink>
                );
            })}
          </div>
        </div>
        <div className="questions">
          {slice.items.map((question, key: number) => {
            return (
              <div className="question" key={key}>
                <div className="question-title">
                  <PrismicRichText field={question.title} />
                </div>
                <div className="question-body">
                  <PrismicRichText field={question.body} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
