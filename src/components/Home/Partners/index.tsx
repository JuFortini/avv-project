import { createClient } from "../../../prismicio";
import { PartnerSlice } from "../../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

export async function Partners() {
  const client = createClient();
  const partners = await client.getByUID("homepage", "home");
  const slices = partners.data.slices
  console.log('client', client);
  console.log('slices', slices);

  return (
    <section className="bg-teal-50 px-8 w-full lg:px-16 py-16 flex flex-col justify-between items-center gap-16">
      <h4 className="text-xl font-semibold">
        Nossa iniciativa conta com o apoio de diversas empresas.
      </h4>
      <div className="grid grid-cols-3 grid-flow-row gap-x-32 max-w-xl">
        {slices.map((p: PartnerSlice) => (
          <PrismicNextLink key={p.id} field={p.primary.partner_website}>
            <PrismicNextImage field={p.primary.partner_logo} alt="" />
          </PrismicNextLink>
        ))}
      </div>
    </section>
  );
}
