import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Simulation`.
 */
export type SimulationProps = SliceComponentProps<Content.SimulationSlice>;

/**
 * Component for "Simulation" Slices.
 */
const Simulation = ({ slice }: SimulationProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for simulation (variation: {slice.variation}) Slices
    </section>
  );
};

export default Simulation;
