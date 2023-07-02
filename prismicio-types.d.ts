// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for CTA documents */
interface CtaDocumentData {
  /**
   * Text field in *CTA*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismic.KeyTextField;
  /**
   * URL field in *CTA*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  url: prismic.LinkField;
  /**
   * Variant field in *CTA*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: cta.variant
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  variant: prismic.SelectField<"Primary" | "White-BG" | "Black-BG">;
}
/**
 * CTA document from Prismic
 *
 * - **API ID**: `cta`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CtaDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<CtaDocumentData>, "cta", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
  /**
   * Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice =
  | HeroSlice
  | LogosSlice
  | IntroSlice
  | FeaturesSlice
  | HowWorksSlice
  | FaqSlice
  | GallerySlice
  | GetAppSlice
  | OneAppSlice
  | SimulationSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = CtaDocument | HomeDocument;
/**
 * Primary content in Faq → Primary
 *
 */
interface FaqSliceDefaultPrimary {
  /**
   * Title field in *Faq → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Cta primary field in *Faq → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.primary.cta_primary
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  cta_primary: prismic.ContentRelationshipField<"cta">;
  /**
   * Cta secondary field in *Faq → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.primary.cta_secondary
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  cta_secondary: prismic.ContentRelationshipField<"cta">;
}
/**
 * Item in Faq → Items
 *
 */
export interface FaqSliceDefaultItem {
  /**
   * Title field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Body field in *Faq → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.items[].body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
}
/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FaqSliceDefaultPrimary>,
  Simplify<FaqSliceDefaultItem>
>;
/**
 * Slice variation for *Faq*
 *
 */
type FaqSliceVariation = FaqSliceDefault;
/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSlice = prismic.SharedSlice<"faq", FaqSliceVariation>;
/**
 * Primary content in Features → Primary
 *
 */
interface FeaturesSliceDefaultPrimary {
  /**
   * Title field in *Features → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: features.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
}
/**
 * Item in Features → Items
 *
 */
export interface FeaturesSliceDefaultItem {
  /**
   * Title field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Body field in *Features → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
  /**
   * CTA field in *Features → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].cta
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  cta: prismic.ContentRelationshipField<"cta">;
  /**
   * Image 1 field in *Features → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].image_1
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_1: prismic.ImageField<never>;
  /**
   * Image 2 field in *Features → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].image_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_2: prismic.ImageField<never>;
  /**
   * Image 3 field in *Features → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features.items[].image_3
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_3: prismic.ImageField<never>;
}
/**
 * Default variation for Features Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceDefaultPrimary>,
  Simplify<FeaturesSliceDefaultItem>
>;
/**
 * Slice variation for *Features*
 *
 */
type FeaturesSliceVariation = FeaturesSliceDefault;
/**
 * Features Shared Slice
 *
 * - **API ID**: `features`
 * - **Description**: `Features`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FeaturesSlice = prismic.SharedSlice<
  "features",
  FeaturesSliceVariation
>;
/**
 * Primary content in Gallery → Primary
 *
 */
interface GallerySliceDefaultPrimary {
  /**
   * Image 1 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image_1
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_1: prismic.ImageField<never>;
  /**
   * Image 2 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_2: prismic.ImageField<never>;
  /**
   * Image 3 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image_3
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_3: prismic.ImageField<never>;
  /**
   * Image 4 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image_4
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_4: prismic.ImageField<never>;
  /**
   * Image 5 field in *Gallery → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: gallery.primary.image_5
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image_5: prismic.ImageField<never>;
}
/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GallerySliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Gallery*
 *
 */
type GallerySliceVariation = GallerySliceDefault;
/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: `Gallery`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GallerySlice = prismic.SharedSlice<
  "gallery",
  GallerySliceVariation
>;
/**
 * Primary content in GetApp → Primary
 *
 */
interface GetAppSliceDefaultPrimary {
  /**
   * Title field in *GetApp → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: get_app.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * QR code field in *GetApp → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: get_app.primary.qr_code
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  qr_code: prismic.ImageField<never>;
  /**
   * Android app field in *GetApp → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: get_app.primary.android_app
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  android_app: prismic.LinkField;
  /**
   * Ios app field in *GetApp → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: get_app.primary.ios_app
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  ios_app: prismic.LinkField;
}
/**
 * Default variation for GetApp Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GetAppSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GetAppSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *GetApp*
 *
 */
type GetAppSliceVariation = GetAppSliceDefault;
/**
 * GetApp Shared Slice
 *
 * - **API ID**: `get_app`
 * - **Description**: `GetApp`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type GetAppSlice = prismic.SharedSlice<"get_app", GetAppSliceVariation>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Subtitle field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.RichTextField;
  /**
   * Premium field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.premium
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  premium: prismic.RichTextField;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
  /**
   * CP icon field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].cp_icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  cp_icon: prismic.ImageField<never>;
  /**
   * CP body field in *Hero → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].cp_body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  cp_body: prismic.RichTextField;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in HowWorks → Primary
 *
 */
interface HowWorksSliceDefaultPrimary {
  /**
   * Title field in *HowWorks → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Subtitle field in *HowWorks → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.RichTextField;
  /**
   * Mockup field in *HowWorks → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.primary.mockup
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  mockup: prismic.ImageField<never>;
  /**
   * Screen field in *HowWorks → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.primary.screen
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  screen: prismic.ImageField<never>;
}
/**
 * Item in HowWorks → Items
 *
 */
export interface HowWorksSliceDefaultItem {
  /**
   * Title field in *HowWorks → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body field in *HowWorks → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.items[].body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
  /**
   * Preview field in *HowWorks → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: how_works.items[].preview
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  preview: prismic.ImageField<never>;
}
/**
 * Default variation for HowWorks Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HowWorksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HowWorksSliceDefaultPrimary>,
  Simplify<HowWorksSliceDefaultItem>
>;
/**
 * Slice variation for *HowWorks*
 *
 */
type HowWorksSliceVariation = HowWorksSliceDefault;
/**
 * HowWorks Shared Slice
 *
 * - **API ID**: `how_works`
 * - **Description**: `HowWorks`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HowWorksSlice = prismic.SharedSlice<
  "how_works",
  HowWorksSliceVariation
>;
/**
 * Primary content in Intro → Primary
 *
 */
interface IntroSliceDefaultPrimary {
  /**
   * Image field in *Intro → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Title field in *Intro → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body field in *Intro → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.primary.body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
  /**
   * CTA primary field in *Intro → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.primary.cta_primary
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  cta_primary: prismic.ContentRelationshipField<"cta">;
  /**
   * CTA secondary field in *Intro → Primary*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: intro.primary.cta_secondary
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  cta_secondary: prismic.ContentRelationshipField<"cta">;
}
/**
 * Default variation for Intro Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Intro*
 *
 */
type IntroSliceVariation = IntroSliceDefault;
/**
 * Intro Shared Slice
 *
 * - **API ID**: `intro`
 * - **Description**: `Intro`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type IntroSlice = prismic.SharedSlice<"intro", IntroSliceVariation>;
/**
 * Item in Logos → Items
 *
 */
export interface LogosSliceDefaultItem {
  /**
   * Logo field in *Logos → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: logos.items[].logo
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
}
/**
 * Default variation for Logos Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogosSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<LogosSliceDefaultItem>
>;
/**
 * Slice variation for *Logos*
 *
 */
type LogosSliceVariation = LogosSliceDefault;
/**
 * Logos Shared Slice
 *
 * - **API ID**: `logos`
 * - **Description**: `Logos`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type LogosSlice = prismic.SharedSlice<"logos", LogosSliceVariation>;
/**
 * Primary content in OneApp → Primary
 *
 */
interface OneAppSliceDefaultPrimary {
  /**
   * Title field in *OneApp → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: one_app.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Subtitle field in *OneApp → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: one_app.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.RichTextField;
}
/**
 * Item in OneApp → Items
 *
 */
export interface OneAppSliceDefaultItem {
  /**
   * Title field in *OneApp → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: one_app.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Body field in *OneApp → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: one_app.items[].body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
  /**
   * Image field in *OneApp → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: one_app.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for OneApp Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OneAppSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<OneAppSliceDefaultPrimary>,
  Simplify<OneAppSliceDefaultItem>
>;
/**
 * Slice variation for *OneApp*
 *
 */
type OneAppSliceVariation = OneAppSliceDefault;
/**
 * OneApp Shared Slice
 *
 * - **API ID**: `one_app`
 * - **Description**: `OneApp`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type OneAppSlice = prismic.SharedSlice<"one_app", OneAppSliceVariation>;
/**
 * Primary content in Simulation → Primary
 *
 */
interface SimulationSliceDefaultPrimary {
  /**
   * Title field in *Simulation → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.TitleField;
  /**
   * Subtitle field in *Simulation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  subtitle: prismic.RichTextField;
  /**
   * Testimonials title field in *Simulation → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.testimonials_title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  testimonials_title: prismic.TitleField;
  /**
   * First item name field in *Simulation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.first_item_name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  first_item_name: prismic.KeyTextField;
  /**
   * First item author field in *Simulation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.first_item_author
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  first_item_author: prismic.RichTextField;
  /**
   * First item image field in *Simulation → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.first_item_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  first_item_image: prismic.ImageField<never>;
  /**
   * Second item name field in *Simulation → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.second_item_name
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  second_item_name: prismic.KeyTextField;
  /**
   * Second item author field in *Simulation → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.second_item_author
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  second_item_author: prismic.RichTextField;
  /**
   * Second item image field in *Simulation → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.primary.second_item_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  second_item_image: prismic.ImageField<never>;
}
/**
 * Item in Simulation → Items
 *
 */
export interface SimulationSliceDefaultItem {
  /**
   * Title field in *Simulation → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.items[].title
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  title: prismic.RichTextField;
  /**
   * Note field in *Simulation → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.items[].note
   * - **Documentation**: https://prismic.io/docs/core-concepts/select
   *
   */
  note: prismic.SelectField<"1" | "2" | "3" | "4" | "5">;
  /**
   * Body field in *Simulation → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.items[].body
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  body: prismic.RichTextField;
  /**
   * Picture field in *Simulation → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.items[].picture
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  picture: prismic.ImageField<never>;
  /**
   * Name field in *Simulation → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.items[].name
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  name: prismic.RichTextField;
  /**
   * Job field in *Simulation → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simulation.items[].job
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  job: prismic.RichTextField;
}
/**
 * Default variation for Simulation Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SimulationSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SimulationSliceDefaultPrimary>,
  Simplify<SimulationSliceDefaultItem>
>;
/**
 * Slice variation for *Simulation*
 *
 */
type SimulationSliceVariation = SimulationSliceDefault;
/**
 * Simulation Shared Slice
 *
 * - **API ID**: `simulation`
 * - **Description**: `Simulation`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SimulationSlice = prismic.SharedSlice<
  "simulation",
  SimulationSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      CtaDocumentData,
      CtaDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      AllDocumentTypes,
      FaqSliceDefaultPrimary,
      FaqSliceDefaultItem,
      FaqSliceDefault,
      FaqSliceVariation,
      FaqSlice,
      FeaturesSliceDefaultPrimary,
      FeaturesSliceDefaultItem,
      FeaturesSliceDefault,
      FeaturesSliceVariation,
      FeaturesSlice,
      GallerySliceDefaultPrimary,
      GallerySliceDefault,
      GallerySliceVariation,
      GallerySlice,
      GetAppSliceDefaultPrimary,
      GetAppSliceDefault,
      GetAppSliceVariation,
      GetAppSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      HowWorksSliceDefaultPrimary,
      HowWorksSliceDefaultItem,
      HowWorksSliceDefault,
      HowWorksSliceVariation,
      HowWorksSlice,
      IntroSliceDefaultPrimary,
      IntroSliceDefault,
      IntroSliceVariation,
      IntroSlice,
      LogosSliceDefaultItem,
      LogosSliceDefault,
      LogosSliceVariation,
      LogosSlice,
      OneAppSliceDefaultPrimary,
      OneAppSliceDefaultItem,
      OneAppSliceDefault,
      OneAppSliceVariation,
      OneAppSlice,
      SimulationSliceDefaultPrimary,
      SimulationSliceDefaultItem,
      SimulationSliceDefault,
      SimulationSliceVariation,
      SimulationSlice,
    };
  }
}
