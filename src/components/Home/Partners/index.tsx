'use client'

import { createClient } from "../../../prismicio";
import { PartnerSlice } from "../../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

const _getPartners = async () => {
  try {
    const client = createClient();
    const partners = await client.getSingle("partners");
    return partners;
  } catch (error) {
    console.log('error while getting partners from prismic', error);
  }
};

export const dynamic = "force-dynamic";

export async function Partners() {
  const _slices = await _getPartnerSlices();

  function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay));
  }

  async function _getPartnerSlices() {
    await timeout(6000);
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
      <h4 className="text-lg md:text-xl text-center font-semibold font-serif">
        Nossa iniciativa conta com o apoio de diversas empresas.
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-32 max-w-xl">
        {_slices.map((p: PartnerSlice) => (
          <PrismicNextLink className="max-w-24 md:max-w-none" key={p.id} field={p.primary.partner_website}>
            <PrismicNextImage field={p.primary.partner_logo} alt="" />
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
}
