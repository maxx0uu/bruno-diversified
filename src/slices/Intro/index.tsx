import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type IntroProps = SliceComponentProps<Content.IntroSlice>;

const Intro = ({ slice }: IntroProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			id="section-intro"
		>
			<div className="wrapper wrapper-intro">
				<div className="image">
					<PrismicNextImage field={slice.primary.image} />
				</div>
				<div className="texts">
					<PrismicRichText field={slice.primary.title} />
					<PrismicRichText field={slice.primary.body} />
					<div className="ctas">
						{/* <PrismicNextLink field={slice.primary.cta_primary}>Link</PrismicNextLink>
            <PrismicNextLink field={slice.primary.cta_secondary}>Link</PrismicNextLink> */}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Intro;
