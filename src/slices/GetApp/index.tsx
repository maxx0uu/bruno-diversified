import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `GetApp`.
 */
export type GetAppProps = SliceComponentProps<Content.GetAppSlice>;

/**
 * Component for "GetApp" Slices.
 */
const GetApp = ({ slice }: GetAppProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for get_app (variation: {slice.variation}) Slices
    </section>
  );
};

export default GetApp;
