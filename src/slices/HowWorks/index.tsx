// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";

// React tools
import { useEffect, useState } from "react";

// import styles
import styles from "./styles.module.scss";

export type HowWorksProps = SliceComponentProps<Content.HowWorksSlice>;

const HowWorks = ({ slice }: HowWorksProps): JSX.Element => {
	const [tabState, setTabState] = useState([true, false, false]);

	useEffect(() => {
		const tabs = document.getElementsByClassName("tab");
		tabState.map((state: boolean, index: number) => {
			state
				? tabs[index].classList.add(styles.tab_active)
				: tabs[index].classList.remove(styles.tab_active);
		});
	}, [tabState]);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			id={styles.section_how_works}
		>
			<div className={`${styles.wrapper_how_works} wrapper`}>
				<div className={styles.title}>
					<PrismicRichText field={slice.primary.title} />
					<PrismicRichText field={slice.primary.subtitle} />
				</div>
				<div className={styles.purple_container}>
					<div className={styles.tabs}>
						{slice.items.map((tab, key) => (
							<div
								className={`${styles.tab} tab`}
								key={key}
								onClick={() => {
									const tempState = [false, false, false];
									tempState[key] = true;
									setTabState(tempState);
								}}
							>
								<h5 className={styles.index}>{key + 1}</h5>
								<div className={styles.tab_content}>
									<PrismicRichText field={tab.title} />
									<PrismicRichText field={tab.body} />
								</div>
							</div>
						))}
					</div>
					<div className={styles.preview}>
						<div className={styles.mockup}>
							<PrismicNextImage field={slice.primary.mockup} />
						</div>
						<div className={styles.default_screen}>
							<PrismicNextImage field={slice.primary.screen} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HowWorks;
