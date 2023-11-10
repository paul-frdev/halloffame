import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const base_url = 'http://localhost:5000';


export const config = {
  headers: {
    Accept: 'application/json',
  },
};


export const formattedPriceInHryvnia = new Intl.NumberFormat('uk-UA', {
  style: 'currency',
  currency: 'UAH',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateTicketCost = (adultsTickets?: number, childrenTickets?: number, priceForAdults?: string, priceForChildren?: string) => {
  return adultsTickets! * Number(priceForAdults) + childrenTickets! * Number(priceForChildren);
};

export const calculateDiscountedPrice = (price: number, discount: number): number => {
  const discountNumbers = price * discount;
  const discountAmount = price - discountNumbers;
  return discountAmount;
};
