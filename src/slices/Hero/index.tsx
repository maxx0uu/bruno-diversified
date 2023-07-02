import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			id="section-hero"
		>
			<div className="wrapper wrapper-hero">
				<div className="texts">
					<div className="main-title">
						<PrismicRichText field={slice.primary.title} />
						<PrismicRichText field={slice.primary.subtitle} />
					</div>
					<div className="premium">
						<PrismicRichText field={slice.primary.premium} />
					</div>
					<div className="checkpoints">
						{slice.items.map((cp, key) => (
							<div className="cp" key={key}>
								<PrismicNextImage field={cp.cp_icon} />
								<PrismicRichText field={cp.cp_body} />
							</div>
						))}
					</div>
				</div>
				<div className="carousel"></div>
			</div>
		</section>
	);
};

export default Hero;
