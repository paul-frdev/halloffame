import { Product } from "@/types";
import { toast } from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface CartStore {
  products: Product[];
  totalQuantity?: number;
  totalCost?: number;
  addProduct: (data: Product) => void;
  removeProduct: (id: string) => void;
  addProductQuantity: (data: Product) => void;
  subtractProductQuantity: (data: Product) => void;
  removeAll: () => void;
}

const useProductCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      totalQuantity: 0,
      totalCost: 0,
      addProduct: (data: Product) => {
        let currentItems = get().products;
        const isExistProduct = currentItems.find(item => item.id === data.id);

        if (!isExistProduct) {
          currentItems = [...currentItems, { ...data, quantity: 1, price: data.price }]
          set({ products: [...currentItems] })
        } else {
          return toast.error('Product is already in the cart ')
        }


        set({ totalQuantity: get().totalQuantity! += 1 });
        set({ totalCost: get().totalCost! += Number(data.price) })

        toast.success("Item added to cart");
        console.log('currentItems', currentItems, get().totalQuantity, get().totalCost);
      },
      addProductQuantity: (data: Product) => {
        const currentItems = get().products;

        currentItems.map((item) => {
          if (item.id.toString() === data.id.toString()) {
            return { ...item, quantity: item?.quantity! + 1, price: item.price += item.price }
          } else {
            return item
          }
        })

      },
      subtractProductQuantity: (data: Product) => {

      },
      removeProduct: (id: string) => {
        set({ products: [...get().products.filter(item => item.id.toString() !== id)] });
        toast.success("Item removed");
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProductCart;
