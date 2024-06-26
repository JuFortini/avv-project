'use client'

import { createClient } from "../../../prismicio";
import { PartnerSlice } from "../../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


const _getPartners = async () => {
  try {
    const client = createClient();
    const partners = await client.getByUID("homepage", "home");
    return partners;
  } catch (error) {
    console.log('error while getting prismic components', error);
  }
};

export async function Partners() {
  const _slices = await _getPartnerSlices();

  async function _getPartnerSlices() {
    const partners = await _getPartners();
    if (partners != null) {
      const allSlices = partners.data.slices;
      if (allSlices.length > 6) return allSlices.slice(0, 6);
      return allSlices;
    }
    return [];
  }

  if (_slices.length == 0) {
    return (<></>);
  }

  return (
    <section className="bg-teal-50 px-8 w-full lg:px-16 py-16 flex flex-col justify-between items-center gap-16">
      <h4 className="text-xl font-semibold">
        Nossa iniciativa conta com o apoio de diversas empresas.
      </h4>
      <div className="grid grid-cols-3 grid-flow-row gap-x-32 max-w-xl">
        {_slices.map((p: PartnerSlice) => (
          <PrismicNextLink key={p.id} field={p.primary.partner_website}>
            <PrismicNextImage field={p.primary.partner_logo} alt="" />
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
}