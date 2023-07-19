// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";

// Various
import gsap from "gsap";

export type FaqProps = SliceComponentProps<Content.FaqSlice>;

// Améliorations possibles :
// Créer un tableau de la longueur de "slice.items"
// Donner à chaque cellule du tableau la valeur false
// Donner la valeur true à la première cellule
// Assigner ce tableau à un useState
// Utiliser le même principe pour l'update des statuts

const Faq = ({ slice, context }: FaqProps): JSX.Element => {
  const [questionState, setQuestionState] = useState([
    true,
    false,
    false,
    false,
  ]);

  const getQuestionState = (key: number) => {
    const tempQuestions = [false, false, false, false];
    tempQuestions[key] = true;
    setQuestionState(tempQuestions);
  };

  useEffect(() => {
    console.log(questionState);
    questionState.map((question, key) => {
      if (question == true) {
        gsap.to(`.question-body-${key}`, { height: "auto" });
        gsap.to(`.question-tab-icon-${key}`, {
          rotate: -180,
          borderStyle: "solid",
          borderWidth: 1,
          borderColor: "white",
        });
      } else {
        gsap.to(`.question-body-${key}`, { height: 0 });
        gsap.to(`.question-tab-icon-${key}`, {
          rotate: 0,
          borderWidth: 0,
        });
      }
    });
  }, [questionState]);

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
              <div
                className="question"
                key={key}
                onClick={() => getQuestionState(key)}
              >
                <div className="question-title">
                  <PrismicRichText field={question.title} />
                  <div className={"question-tab-icon question-tab-icon-" + key}>
                    <svg
                      width="11"
                      height="6"
                      viewBox="0 0 11 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.88867 6.55671e-07L10.8887 4.80077L9.63768 6L5.88867 2.40038L2.13967 5.99999L0.888672 4.80076L5.88867 6.55671e-07Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
                <div className={"question-body question-body-" + key}>
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
