import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PersonalContact`.
 */
export type PersonalContactProps =
  SliceComponentProps<Content.PersonalContactSlice>;

/**
 * Component for "PersonalContact" Slices.
 */
const PersonalContact = ({ slice }: PersonalContactProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for personal_contact (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PersonalContact;
