// Prismic content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Prismic components
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

// React tools
import { useEffect } from "react";

// External resources
import gsap from "gsap";

// import styles
import styles from "./styles.module.scss";

export type GetAppProps = SliceComponentProps<Content.GetAppSlice>;

const GetApp = ({ slice }: GetAppProps): JSX.Element => {
	useEffect(() => {
		gsap.set(".get-app", {
			x: (i) => i * 650,
		});

		gsap.to(".get-app", {
			duration: 10,
			ease: "none",
			x: "-=650",
			modifiers: {
				y: gsap.utils.unitize((y) => parseFloat(y) % 650),
			},
			repeat: -1,
		});
	}, []);

	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className={styles.section_wrapper}
		>
			<div className={`${styles.wrapper} wrapper`}>
				<div className={styles.slider}>
					<div className={styles.slider_container}>
						<div className={`${styles.get_app} get-app`}>
							<PrismicRichText field={slice.primary.title} />
							<PrismicNextImage field={slice.primary.qr_code} />
						</div>
						<div className={`${styles.get_app} get-app`}>
							<PrismicRichText field={slice.primary.title} />
							<PrismicNextImage field={slice.primary.qr_code} />
						</div>
						<div className={`${styles.get_app} get-app`}>
							<PrismicRichText field={slice.primary.title} />
							<PrismicNextImage field={slice.primary.qr_code} />
						</div>
						<div className={`${styles.get_app} get-app`}>
							<PrismicRichText field={slice.primary.title} />
							<PrismicNextImage field={slice.primary.qr_code} />
						</div>
						<div className={`${styles.get_app} get-app`}>
							<PrismicRichText field={slice.primary.title} />
							<PrismicNextImage field={slice.primary.qr_code} />
						</div>
					</div>
				</div>
				<div className={styles.store_links}>
					<div className={styles.ios}>
						<p className={styles.title}>iOS App Store</p>
						<p className={styles.note}>⭐️⭐️⭐️⭐️⭐️</p>
						<p className={styles.reviews}>4,5 stars on 453 rates</p>
						<PrismicNextLink field={slice.primary.android_app}>
							<Image
								src={"/assets/ios-download.png"}
								width={120}
								height={40}
								alt="Lorem ipsum"
							/>
						</PrismicNextLink>
					</div>
					<div className={styles.divider}></div>
					<div className={styles.google}>
						<p className={styles.title}>Play Store</p>
						<p className={styles.note}>⭐️⭐️⭐️⭐️⭐️</p>
						<p className={styles.reviews}>4,5 stars on 453 rates</p>
						<PrismicNextLink field={slice.primary.android_app}>
							<Image
								src={"/assets/google-download.png"}
								width={120}
								height={40}
								alt="Lorem ipsum"
							/>
						</PrismicNextLink>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GetApp;
