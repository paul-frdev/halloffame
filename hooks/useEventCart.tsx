import { UpcomingEvent } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  items: UpcomingEvent[];
  addItem: (data: UpcomingEvent) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useEventCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: UpcomingEvent) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.id === data.id);

        if (existingItem) {
          return toast("Item is already in cart");
        }

        set({ items: [...get().items, data] });
        toast.success("Event added to cart");
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter(item => item.id.toString() !== id)] });
        toast.success("Item removed");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "event-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useEventCart;
