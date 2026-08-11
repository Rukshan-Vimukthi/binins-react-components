export type FooterSectionLink = {
  text: string;
  url: string;
  icon?: JSX.Element | String | any;
};

export type FooterSectionData = {
  title: string;
  links: FooterSectionLink[];
  cta?: React.ReactNode;
};

export type FooterProps = {
  brandName: string;
  brandHighlight: string;
  brandDescription?: string;
  sections?: FooterSectionData[];
  copyrightText: string;
  children?: React.ReactNode;
};