import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const cartSchema = z.object({
  id: z.string(),
  location_address: z.string(),
  title: z.string(),
  image: z.string(),
  adult_price: z.string(),
  child_price: z.string(),
  forAdults: z.string(),
  forChildren: z.string(),
  selectedTime: z.string(),
  totalPrice: z.string()
});

export type Cart = z.infer<typeof cartSchema>;
