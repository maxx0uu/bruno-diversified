// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState } from "react";
import { CtaManager } from "@/Components/Cta";

// Types
import { CtaDocument } from "../../../prismicio-types";

// External resources
import gsap from "gsap";

// Import styles
import styles from "./styles.module.scss";

export type FaqProps = SliceComponentProps<Content.FaqSlice>;

const Faq = ({ slice, context }: FaqProps): JSX.Element => {
	// Call nested components
	const { ctas } = context as {
		ctas: ReadonlyArray<CtaDocument<string>>;
	};

	const primaryCta = ctas.find((cta) => cta.uid === "cta-primary");
	const secondaryCta = ctas.find((cta) => cta.uid === "cta-black-bg");

	// Create an array with the length of the FAQ items and fill it with false
	// Set the first cell with true to open the first question by default
	const faqArrayTemplate = Array(slice.items.length).fill(false);
	faqArrayTemplate[0] = true;

	// Create a state to manage the FAQ
	const [questionState, setQuestionState] = useState(faqArrayTemplate);

	// On click, update the FAQ with the key and the state
	const getQuestionState = (key: number) => {
		const tempQuestions = faqArrayTemplate.fill(false);
		tempQuestions[key] = true;
		setQuestionState(tempQuestions);
	};

	// Render the FAQ styles when the FAQ state change
	useEffect(() => {
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
			className={styles.section_wrapper}
		>
			<div className={`${styles.wrapper} wrapper`}>
				<div className={styles.title}>
					<PrismicRichText field={slice.primary.title} />
					<div className={styles.ctas}>
						{primaryCta && (
							<CtaManager
								variant={primaryCta.uid}
								url={primaryCta.data.url}
								body={primaryCta.data.text}
							/>
						)}
						{secondaryCta && (
							<CtaManager
								variant={secondaryCta.uid}
								url={secondaryCta.data.url}
								body={secondaryCta.data.text}
							/>
						)}
					</div>
				</div>
				<div className={styles.container_questions}>
					{slice.items.map((question, key: number) => {
						return (
							<div
								className={styles.question}
								key={key}
								onClick={() => getQuestionState(key)}
							>
								<div className={styles.question_title}>
									<PrismicRichText field={question.title} />
									<div
										className={`${styles.question_icon} question-tab-icon-${key}`}
									>
										<svg
											width="11"
											height="6"
											viewBox="0 0 11 6"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												clipRule="evenodd"
												d="M5.88867 6.55671e-07L10.8887 4.80077L9.63768 6L5.88867 2.40038L2.13967 5.99999L0.888672 4.80076L5.88867 6.55671e-07Z"
												fill="white"
											/>
										</svg>
									</div>
								</div>
								<div className={`${styles.question_body} question-body-${key}`}>
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
