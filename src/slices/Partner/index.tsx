import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Partner`.
 */
export type PartnerProps = SliceComponentProps<Content.PartnerSlice>;

/**
 * Component for "Partner" Slices.
 */
const Partner = ({ slice }: PartnerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for partner (variation: {slice.variation}) Slices
    </section>
  );
};

export default Partner;
