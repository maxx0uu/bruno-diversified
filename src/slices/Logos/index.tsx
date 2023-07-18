// Content
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

// Components
import { PrismicNextImage } from "@prismicio/next";

export type LogosProps = SliceComponentProps<Content.LogosSlice>;

const Logos = ({ slice }: LogosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      id="section-logos"
    >
      <div className="wrapper wrapper-logos">
        {slice.items.map((logo, key) => (
          <div className="logo" key={key}>
            <PrismicNextImage field={logo.logo} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
