import {
  AboutDataProps,
  FooterProps,
  NavProps,
  MusicCardProps,
  FooterImageProps,
  ProductDataProps,
  WornProps,
  blogCardprops,
  FeatureProps,
  ServiceOption,
  comparisonDataProps,
} from "@/types";

export const YoutubeData: AboutDataProps[] = [
  {
    img: "/img/1.png",
    title: "Advanced React Patterns Tutorial",
    des: "Deep dive into React's advanced patterns and best practices",
    btn: "Watch on YouTube →",
    btnClass: "text-red-500",
  },
  {
    img: "/img/2.png",
    title: "Ultimate Dev Setup Guide 2025",
    des: "Complete walkthrough of my development environment",
    btn: "Watch on YouTube →",
    btnClass: "text-red-500",
  },
  {
    img: "/img/3.png",
    title: "Modern UI/UX Design Workflow",
    des: "Step-by-step guide to modern design practices",
    btn: "Watch on YouTube →",
    btnClass: "text-red-500",
  },
  {
    img: "/img/1.png",
    title: "Advanced React Patterns Tutorial",
    des: "Deep dive into React's advanced patterns and best practices",
    btn: "Watch on YouTube →",
    btnClass: "text-red-500",
  },
  {
    img: "/img/2.png",
    title: "Ultimate Dev Setup Guide 2025",
    des: "Complete walkthrough of my development environment",
    btn: "Watch on YouTube →",
    btnClass: "text-red-500",
  },
];
export const SpotifyData: AboutDataProps[] = [
  {
    img: "/img/4.png",
    title: "Tech Talk: Future of AI",
    des: "Weekly podcast discussing AI trends and innovations",
    btn: "Listen on spotify →",
    btnClass: "text-green-500",
  },
  {
    img: "/img/5.png",
    title: "Developer Stories",
    des: "Interviews with leading developers and entrepreneurs",
    btn: "Listen on spotify →",
    btnClass: "text-green-500",
  },
  {
    img: "/img/6.png",
    title: "Code & Coffee",
    des: "Morning discussions about programming and tech",
    btn: "Listen on spotify →",
    btnClass: "text-green-500",
  },
  {
    img: "/img/4.png",
    title: "Tech Talk: Future of AI",
    des: "Weekly podcast discussing AI trends and innovations",
    btn: "Listen on spotify →",
    btnClass: "text-green-500",
  },
  {
    img: "/img/5.png",
    title: "Developer Stories",
    des: "Interviews with leading developers and entrepreneurs",
    btn: "Listen on spotify →",
    btnClass: "text-green-500",
  },
];

export const NavData: NavProps[] = [
  { href: "/mixing", name: "Mixing", more: "Pro" },
  { href: "/custombeat", name: "Custom Beat", more: "Pro" },
  { href: "/drip", name: "Drip", more: "TM" },
  { href: "/about", name: "About" },
];

export const QuickLinks: FooterProps[] = [
  { href: "/", name: "Home" },
  { href: "/about", name: "About Us" },
  { href: "/contact", name: "Contact" },
  { href: "drip", name: "Drip" },
];

export const Legal: FooterProps[] = [
  { href: "/terms&conditions", name: "Terms & Conditions" },
  { href: "/privacy", name: "Privacy and Policy" },
  { href: "/cookies", name: "Cookie Policy" },
  { href: "/copyright", name: "Copyright Complaint" },
  { href: "/quickdownloads", name: "Quick Downloads" },
];

export const Treading = ["All Genres", "Rap", "R&B", "Drill", "Hip Hop"];

export const MusicCardData: MusicCardProps[] = [
  {
    img: "/img/musicCardImg/1.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },

  {
    img: "/img/musicCardImg/2.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
  {
    img: "/img/musicCardImg/3.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
  {
    img: "/img/musicCardImg/4.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
  {
    img: "/img/musicCardImg/5.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
  {
    img: "/img/musicCardImg/6.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
  {
    img: "/img/musicCardImg/7.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
  {
    img: "/img/musicCardImg/8.jpg",
    title: "Midnight Dreams",
    des: "Luna Eclipse",
    price: 20,
  },
];
export const FooterImage: FooterImageProps[] = [
  { image: "/img/footimg/1.jpg" },
  { image: "/img/footimg/2.jpg" },
  { image: "/img/footimg/3.jpg" },
  { image: "/img/footimg/4.jpg" },
  { image: "/img/footimg/5.jpg" },
];
export const ProductData: ProductDataProps[] = [
  { image: "/img/products/1.jpg", name: "Wool Sweater", price: "$ 89.99" },
  { image: "/img/products/2.jpg", name: "Wool Sweater", price: "$ 89.99" },
  { image: "/img/products/3.jpg", name: "Wool Sweater", price: "$ 89.99" },
  { image: "/img/products/4.jpg", name: "Wool Sweater", price: "$ 89.99" },
];
export const WornData: WornProps[] = [
  { image: "/img/worn/1.jpg" },
  { image: "/img/worn/2.jpg" },
  { image: "/img/worn/3.jpg" },
  { image: "/img/worn/4.jpg" },
];

export const BlogCardData: blogCardprops[] = [
  {
    img: "/img/blogimg/1.jpg",
    title: "This platform completely transformed how I produce and share my music. The community here is incredibly supportive.",
    authorImg: "/img/footimg/1.jpg",
    autName: "Sarah Miller",
    autWork: "Music Producer",
  },
  {
    img: "/img/blogimg/2.jpg",
    title: "This platform completely transformed how I produce and share my music. The community here is incredibly supportive.",
    authorImg: "/img/footimg/2.jpg",
    autName: "Hari Shyam",
    autWork: "Music Producer",
  },
  {
    img: "/img/blogimg/3.jpg",
    title: "This platform completely transformed how I produce and share my music. The community here is incredibly supportive.",
    authorImg: "/img/footimg/3.jpg",
    autName: "Ramesh Stif",
    autWork: "Music Producer",
  },
];


export const standardFeatures:FeatureProps[] = [
  { name: "High Quality WAV Version", available: true },
  { name: "Radio Play & Profit Live Performance", available: true },
  { name: "Unlimited Streams  50,000 Streams", available: false },
  { name: "Unlimited Rights Limited Rights", available: false },
  { name: "Free Performance Version", available: false },
  { name: "Producer Tag", available: false },
]

export const premiumFeatures:FeatureProps[] = [
  { name: "Fully Customized Beat with STEMS", available: true },
  { name: "Exclusive License with Full Rights", available: true },
  { name: "Unlimited Streams", available: true },
  { name: "Free Performance Version", available: true },
  { name: "Radio Play & Profit Live Performance", available: true },
  { name: "Remove Producer Tag", available: true },
]


export const services: ServiceOption[] = [
    {
      id: "mastering",
      title: "Professional Mastering",
      description: "Industry standard mastering",
      price: 0,
      isIncluded: true,
    },
    {
      id: "studio",
      title: "Recording Studio Time",
      description: "Melbourne Clients Only",
      price: 80,
    },
    {
      id: "custom-beat",
      title: "Custom Beat Pro",
      description: "Custom artwork design",
      price: 199.99,
    },
    {
      id: "urgent",
      title: "24 Hours Urgent Delivery",
      description: "Priority processing",
      price: 50,
    },
    {
      id: "stems",
      title: "Mixed Audio Stems",
      description: "Individual track stems",
      price: 25,
    },
    {
      id: "beat",
      title: "Add a Beat",
      description: "Include an extra beat",
      price: 30,
    },
    {
      id: "boka",
      title: "Cute Boka Feature",
      description: "After approval",
      price: 0,
      isTBD: true,
    },
    {
      id: "promo",
      title: "Promo Campaign",
      description: "Marketing Support",
      price: 50,
    },
    {
      id: "performance",
      title: "Performance Vision",
      description: "Live Performance Mix",
      price: 25,
    },
  ]

  export const comparisonData:comparisonDataProps[] = [
    {
      category: "Communication",
      regular: "1 week",
      cuteboka: "Prompt within an hour",
    },
    {
      category: "Quality",
      regular: "Standard",
      cuteboka: "Industry Standard",
    },
    {
      category: "Delivery Time",
      regular: "Up to 1 month",
      cuteboka: "4-5 Business Days",
    },
    {
      category: "Creative Approach",
      regular: "Only to Top Artists",
      cuteboka: "Priority to every Artist",
    },
    {
      category: "Mastering",
      regular: "Additional Charge",
      cuteboka: "FREE with Mixing Service",
    },
  ]