import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface MenuItem {
  id:number;
  name: string;
  href: string;
}

export interface SliderItem {
  src: string;
  alt: string;
  height?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  textColor?: {
    mobile: string;
    md: string;
  };
}


export interface SocialLink {
  name: string;
  icon: IconDefinition;
  href: string;
}

export interface SEO {
  metaTitle?: string;
  metaDescription?: string;
  canonicalURL?: string;
}

export interface Attributes {
  title: string;
  desc: string;
  img: string;
  content: string;
  trends: boolean;
  authors: string[];
  category: string[];
  tags: string[];
  seo: SEO;
}

export interface TrendItem {
  _id: string;
  user_id: string;
  type: string;
  attributes: Attributes;
  lang: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export enum PreviewVariant {
  NUMBERED = "numbered",  
  IMAGE_LEFT = "image_left", 
  IMAGE_TOP = "image_top",
}

export interface FavoriteItem {
  img: string;
  title: string;
  number: string;
  artist: string;
  song: string;
}


export interface PreviewPostProps {
  displayedItems: TrendItem[];
  variant?: PreviewVariant;
}

export enum ColumnVariant {
  SINGLE = "single",
  DOUBLE = "double",
}

export interface TagsContextType {
  selected: string[];
  toggleTag: (cat: string) => void;
  clearTags: () => void;
}

export interface SectionHeaderProps {
  title: string;
  titleTextSize?: string;
  icon?: IconDefinition;
  textColor?: string;
  iconColor?: string;
  containerClass?: string;
  onSearch?: (query: string) => void;
  onViewToggle?: (view: ColumnVariant) => void;
  currentView?: ColumnVariant;
}

