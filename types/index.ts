export type Language = 'en' | 'uk' | 'sp';

export type Event = {
  id: number;
  src: string;
  title: string;
  description: string;
};

export type Subscribe = {
  name: string;
  email: string;
};

export type IconProps = {
  color?: string;
  width?: number;
  height?: number;
  active?: boolean;
};

export type Location = {
  id: number;
  street: string;
};

export interface UpcomingEvent extends Event {
  date: Date;
  time: string[];
  price: string[];
  location: Location[];
}

export type ImageProduct = {
  id: number;
  src: string;
};

export type ProductCharacteristic = {
  id: number;
  color: string[];
  size: string[];
  weight: string[];
};

export type Slider = {
  id: number;
  src: string;
  title: string;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: string;
  discount?: string;
  category: string;
  images: ImageProduct[];
  characteristics: ProductCharacteristic[];
};
