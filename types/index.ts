export type Language = 'en' | 'uk' | 'sp';

export type Event = {
  event_id: string;
  title: string;
  descriptiontext: string;
  event_date: string;
  options: string[],
  images: {url: string; public_id: string}[];
  location_address: string;
  adult_price: string;
  child_price: string;
  adult_quantity_tickets: number;
  children_quantity_tickets: number;
  ticket_images?:{url: string; public_id: string} | {url: string; public_id: string}[];
  selectedTime?: string;
  forAdults?: number;
  forChildren?: number;
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
  id?: number;
  title: string;
  description: string;
  price: number;
  category: string;
  previewImage: string;
  images: ImageProduct[];
  characteristics: ProductCharacteristic[];
  discount?: string;
  isDiscount?: boolean;
  quantity?: number;
  color?: string;
  size?: string;
};

export interface News extends Event {
  date: string;
}


export interface Image {
  id: number;
  src: string;
}


export type Media = {
  id: number;
  title: string;
  description: string;
  date: string;
  src: string;
}

export type ImageUrl = {
  public_id: string;
    url: string;
}

export type BaseResponse = {
  id: string;
  title: string;
  description?: string;
}

export type Testimonial = {
  id: number;
  image: ImageUrl[];
  desriptiontext: string;
  author: string;
  dignity: string;
}

export type SlidesProps  = {
  image: ImageUrl[];
} & BaseResponse


export type Contact = {
  contacts_title: string, 
  contacts_address: string,
   contacts_email: string, 
   contacts_phone: string;
}

export type Article = {
 image: ImageUrl[];
 publish_date: string;
} & BaseResponse