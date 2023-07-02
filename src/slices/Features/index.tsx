import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

const Features = ({ slice }: FeaturesProps): JSX.Element => {
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
								<PrismicRichText field={feature.body} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
