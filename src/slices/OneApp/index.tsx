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
			id={styles.section_one_app}
		>
			<div className={`${styles.wrapper_one_app} wrapper`}>
				<div className={styles.title}>
					<PrismicRichText field={slice.primary.title} />
					<PrismicRichText field={slice.primary.subtitle} />
				</div>
				<div className={styles.card_wrapper}>
					{slice.items.map((card, key) => {
						const cardClassname = "card_" + key;
						console.log(cardClassname);
						return (
							<div
								className={`${styles.card} ${styles.cardClassname}`}
								key={key}
							>
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
