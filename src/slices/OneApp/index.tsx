// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// Import styles
import styles from "./styles.module.scss";

export type OneAppProps = SliceComponentProps<Content.OneAppSlice>;

const OneApp = ({ slice }: OneAppProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={styles.section_one_app}
    >
      <div className={`${styles.wrapper_one_app} wrapper`}>
        <div className={styles.title}>
          <PrismicRichText field={slice.primary.title} />
          <PrismicRichText field={slice.primary.subtitle} />
        </div>
        <div className={styles.card_wrapper}>
          {slice.items.map((card, key) => {
            let cardStyle = "";
            switch (key) {
              case 0:
                cardStyle = "styles_card_0__TxRY1";
                break;
              case 1:
                cardStyle = "styles_card_1__K89V4";
                break;
              case 2:
                cardStyle = "styles_card_2__gN06_";
                break;
              case 3:
                cardStyle = "styles_card_3__PcHmM";
                break;
            }
            return (
              <div className={`${styles.card} ${cardStyle}`} key={key}>
                <div className={styles.texts}>
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
