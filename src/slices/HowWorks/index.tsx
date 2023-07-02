import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HowWorks`.
 */
export type HowWorksProps = SliceComponentProps<Content.HowWorksSlice>;

/**
 * Component for "HowWorks" Slices.
 */
const HowWorks = ({ slice }: HowWorksProps): JSX.Element => {
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
							<div className="tab" key={key}>
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
