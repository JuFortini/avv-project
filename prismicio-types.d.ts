// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PartnersDocumentDataSlicesSlice = PartnerSlice;

/**
 * Content for Partners documents
 */
interface PartnersDocumentData {
  /**
   * Slice Zone field in *Partners*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: partners.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PartnersDocumentDataSlicesSlice> /**
   * Meta Title field in *Partners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: partners.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Partners*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: partners.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Partners*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: partners.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Partners document from Prismic
 *
 * - **API ID**: `partners`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PartnersDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PartnersDocumentData>,
    "partners",
    Lang
  >;

type TestimonialsDocumentDataSlicesSlice = TestimonialSlice;

/**
 * Content for Testimonials documents
 */
interface TestimonialsDocumentData {
  /**
   * Slice Zone field in *Testimonials*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<TestimonialsDocumentDataSlicesSlice> /**
   * Meta Title field in *Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: testimonials.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Testimonials*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: testimonials.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Testimonials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonials.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Testimonials document from Prismic
 *
 * - **API ID**: `testimonials`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TestimonialsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<TestimonialsDocumentData>,
    "testimonials",
    Lang
  >;

export type AllDocumentTypes = PartnersDocument | TestimonialsDocument;

/**
 * Primary content in *Partner → Default → Primary*
 */
export interface PartnerSliceDefaultPrimary {
  /**
   * Partner Logo field in *Partner → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: partner.default.primary.partner_logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  partner_logo: prismic.ImageField<never>;

  /**
   * Partner Website field in *Partner → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: https://lentesvoluntarias.com.br
   * - **API ID Path**: partner.default.primary.partner_website
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  partner_website: prismic.LinkField;
}

/**
 * Default variation for Partner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PartnerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Partner*
 */
type PartnerSliceVariation = PartnerSliceDefault;

/**
 * Partner Shared Slice
 *
 * - **API ID**: `partner`
 * - **Description**: Partner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnerSlice = prismic.SharedSlice<
  "partner",
  PartnerSliceVariation
>;

/**
 * Primary content in *Testimonial → Default → Primary*
 */
export interface TestimonialSliceDefaultPrimary {
  /**
   * Name field in *Testimonial → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Joaquim Macedo
   * - **API ID Path**: testimonial.default.primary.name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Location field in *Testimonial → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Macaé, RJ
   * - **API ID Path**: testimonial.default.primary.location
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  location: prismic.KeyTextField;

  /**
   * Environment field in *Testimonial → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: testimonial.default.primary.environment
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  environment: prismic.SelectField<
    "Whatsapp" | "Instagram" | "Pessoalmente" | "Email"
  >;

  /**
   * Testimonial field in *Testimonial → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Fui muito bem atendida pelos colaboradores...
   * - **API ID Path**: testimonial.default.primary.testimonial
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  testimonial: prismic.KeyTextField;
}

/**
 * Default variation for Testimonial Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TestimonialSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Testimonial*
 */
type TestimonialSliceVariation = TestimonialSliceDefault;

/**
 * Testimonial Shared Slice
 *
 * - **API ID**: `testimonial`
 * - **Description**: Testimonial
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TestimonialSlice = prismic.SharedSlice<
  "testimonial",
  TestimonialSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PartnersDocument,
      PartnersDocumentData,
      PartnersDocumentDataSlicesSlice,
      TestimonialsDocument,
      TestimonialsDocumentData,
      TestimonialsDocumentDataSlicesSlice,
      AllDocumentTypes,
      PartnerSlice,
      PartnerSliceDefaultPrimary,
      PartnerSliceVariation,
      PartnerSliceDefault,
      TestimonialSlice,
      TestimonialSliceDefaultPrimary,
      TestimonialSliceVariation,
      TestimonialSliceDefault,
    };
  }
}
