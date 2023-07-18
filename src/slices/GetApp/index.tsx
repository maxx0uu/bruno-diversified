// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

// React tools
import { useEffect } from "react";

// Various
import gsap from "gsap";

export type GetAppProps = SliceComponentProps<Content.GetAppSlice>;

const GetApp = ({ slice }: GetAppProps): JSX.Element => {
  useEffect(() => {
    gsap.set(".get-app", {
      x: (i) => i * 650,
    });

    gsap.to(".get-app", {
      duration: 5,
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
      id="section-get-app"
    >
      <div className="wrapper wrapper-get-app">
        <div className="slider">
          <div className="slider-container">
            <div className="get-app">
              <PrismicRichText field={slice.primary.title} />
              <PrismicNextImage field={slice.primary.qr_code} />
            </div>
            <div className="get-app">
              <PrismicRichText field={slice.primary.title} />
              <PrismicNextImage field={slice.primary.qr_code} />
            </div>
            <div className="get-app">
              <PrismicRichText field={slice.primary.title} />
              <PrismicNextImage field={slice.primary.qr_code} />
            </div>
            <div className="get-app">
              <PrismicRichText field={slice.primary.title} />
              <PrismicNextImage field={slice.primary.qr_code} />
            </div>
          </div>
        </div>
        <div className="store-links">
          <div className="ios">
            <p className="title">iOS App Store</p>
            <p className="note">⭐️⭐️⭐️⭐️⭐️</p>
            <p className="reviews">4,5 stars on 453 rates</p>
            <PrismicNextLink field={slice.primary.android_app}>
              <Image
                src={"/assets/ios-download.png"}
                width={120}
                height={40}
                alt="Lorem ipsum"
              />
            </PrismicNextLink>
          </div>
          <div className="divider"></div>
          <div className="google">
            <p className="title">Play Store</p>
            <p className="note">⭐️⭐️⭐️⭐️⭐️</p>
            <p className="reviews">4,5 stars on 453 rates</p>
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
