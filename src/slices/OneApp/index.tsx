import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OneApp`.
 */
export type OneAppProps = SliceComponentProps<Content.OneAppSlice>;

/**
 * Component for "OneApp" Slices.
 */
const OneApp = ({ slice }: OneAppProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for one_app (variation: {slice.variation}) Slices
    </section>
  );
};

export default OneApp;
