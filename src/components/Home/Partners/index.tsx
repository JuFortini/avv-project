'use client'

import { createClient } from "../../../prismicio";
import { PartnerSlice } from "../../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Typography } from "../../../utils/Typography";
import { motion } from "framer-motion";

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

  async function _getPartnerSlices() {
    const partners = await _getPartners();
    if (partners !== undefined) {
      const allSlices = partners.data.slices;
      if (allSlices.length > 6) return allSlices.slice(0, 6);
      return allSlices;
    }
    return [];
  }

  if (_slices.length === 0) {
    return (<></>);
  }

  return (
    <section className="bg-teal-50 flex justify-center">
      <div className="container px-8 w-full lg:px-16 py-16 flex flex-col justify-between items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.0, ease: "easeIn" }}
        >
          <Typography variant="h4" className="font-semibold font-serif">
            Nossa iniciativa conta com o apoio de diversas empresas.
          </Typography>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 grid-flow-row gap-x-32 max-w-xl">
          {_slices.map((p: PartnerSlice) => (
            <PrismicNextLink className="max-w-24 md:max-w-none" key={p.id} field={p.primary.partner_website}>
              <PrismicNextImage field={p.primary.partner_logo} alt="" />
            </PrismicNextLink>
          ))}
        </div>
      </div>
    </section>
  );
}
