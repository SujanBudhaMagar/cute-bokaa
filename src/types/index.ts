import { JSX } from "react";

export interface AboutCardProps {
  img: string;
  title: string;
  des: string;
  btn: string;
  btnClass?: string;
}

export interface AboutDataProps {
  img: string;
  title: string;
  des: string;
  btn: string;
  btnClass?: string;
}

export interface NavProps {
  href: string;
  name: string;
  more?: string;
}

export interface PaymentIn {
  icon: React.JSX.Element;
  name: string;
}
export interface FooterProps {
  href: string;
  name: string;
}

export interface MusicCardProps {
  img: string;
  title: string;
  des: string;
  price: number;
}
export interface FooterImageProps {
  image: string;
}

export interface IconProps {
  icon: React.JSX.Element;
  className: string;
}
export interface ProductDataProps {
  image: string;
  name: string;
  price: string;
}
export interface WornProps {
  image: string;
}

export interface BookProps {
  icon: React.JSX.Element;
  price: string;
  detail: string;
}

export interface StudioRulesProps {
  icon: React.JSX.Element;
  name: string;
}

export interface CustomBeatProps {
  icon: JSX.Element;
  des: string;
}

export interface FollowBtnProps {
  Icon: JSX.Element;
  title: string;
  color: string;
}

export interface blogCardprops {
  img: string;
  title: string;
  authorImg: string;
  autName: string;
  autWork: string;
}

export interface FeatureProps {
  name: string;
  available: boolean;
}

export interface ServiceOption {
  id: string;
  title: string;
  description: string;
  price: string | number;
  priceLabel?: string;
  isIncluded?: boolean;
  isTBD?: boolean;
}

export interface comparisonDataProps {
  category: string;
  regular: string;
  cuteboka: string;
}
