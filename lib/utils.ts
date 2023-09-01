import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';


export const formattedPriceInHryvnia = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTicketCost = (adultsTickets?: number, childrenTickets?: number, price?: string[]) => {
  const priceForAdults = price?.[0];
  const priceForChildren = price?.[1];
  return adultsTickets! * Number(priceForAdults) + childrenTickets! * Number(priceForChildren);
};

export const calculateDiscountedPrice = (price: number, discount: number): number => {
  const discountAmount = (price - discount) / 100;
  return price - discountAmount;
};
