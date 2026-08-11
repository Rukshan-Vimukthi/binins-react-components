/**
 *  `textColor`: - CTA button text color
 *   backgroundColor: CTA button background color
 *   text: CTA button text
 *   onClick?: function to be called when the button is presses
 *   link?: Link of the external page that opens when the CTA button gets clicked
 *   subText?: The text getting displayed under the CTA button (optional)
 *   subTextAlignment?: Alignment of the text under CTA button
 *   width?: CTA button width
 */
type SectionCTA = {
  /**
   * Type of the CTA button. possible values are "rounded" and "rectangular"
   */
  type: "rounded" | "rectangular";
  /**
   * CTA button text color
   */
  textColor: string;

  /**
   * CTA button background color
   */
  backgroundColor: string;

  /**
   * CTA button text
   */
  text: string;

  /**
   * function to be called when the button is presses
   */
  onClick?: CallableFunction;

  /**
   * Link of the external page that opens when the CTA button gets clicked
   */
  link?: string;

  /**
   * The text getting displayed under the CTA button (optional)
   */
  subText?: string;

  /**
   * Alignment of the text under CTA button
   */
  subTextAlignment?: string;

  /**
   * CTA button width
   */
  width?: string;
};

export type SectionProps = {
  /**
   * Type of the section. possible values are (hero-section)
   */
  type: "hero-section" | "section";
  singleSection?: boolean;

  /**
   * Heading of the section
   */
  heading?: string | JSX.Element;
  /**
   * Subheading of the section
   */
  subheading?: string | JSX.Element;

  /**
   * subheading spread area size in columns as bootstrap.
   * for example to make the subheading spread across the half of the screen use 6 as the spread area
   */
  subheadingSpreadArea?: number;
  imageURL?: string;
  paragraph?: string | JSX.Element;
  paragraphAlignment?: "start" | "center" | "end";
  paragraphFontSize?: string;
  titlePosition?: "start" | "center" | "end";
  subheadingPosition?: "start" | "center" | "end";
  imagePosition?: string;
  imagePlacement?: string;
  heroBackground?: string;
  textColor?: string;
  backgroundGradient?: boolean;
  backgroundGradientStartColor?: string;
  backgroundGradientEndColor?: string;
  backgroundGradientAngle?: string;
  /**
   * CTA button properties
   *
   * See {@link SectionCTA} for details
   */
  cta?: SectionCTA;
  secondaryCta?: SectionCTA;
  ctaAlignmentDirection?: "column" | "row";
  ctaAlignment?: "start" | "center" | "end";
  separateCTASection?: boolean;
  /**
   *
   */
  contentAlignment?: string;
  content?: JSX.Element | JSX.Element[];
  backgroundImage?: string;
  backgroundSVG?: string;
  backgroundMediaPosition?: string;
  backgroundImageWidth?: string;
  backgroundImageHeight?: string;
  backgroundMediaRotation?: string;
  transparentBackground?: boolean;
  spreadMediaAcrossSurroundingSections?: boolean;

  message?: string;
};