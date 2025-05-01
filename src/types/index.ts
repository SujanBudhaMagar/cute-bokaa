import { JSX, ReactElement } from "react";

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
  name: string
  available: boolean
}


