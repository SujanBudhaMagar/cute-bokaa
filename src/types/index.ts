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
  icon: React.JSX.Element;
  des: string;
}
export interface PackagesProps {
  name: string;
  work: string;
  price: string;
}
