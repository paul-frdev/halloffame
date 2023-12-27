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
  removeProducts: () => void;
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
          currentItems = [...currentItems, { ...data, quantity: 1, price: data.price }];
          set({ products: [...currentItems] });
        } else {
          return toast.error("Product is already in the cart ");
        }

        set({ totalQuantity: (get().totalQuantity! += 1) });
        set({ totalCost: (get().totalCost! += Number(data.price)) });

        toast.success("Product added to cart");
      },
      addProductQuantity: (data: Product) => {
        const updatedProducts = get().products.map(item => {
          if (item.id === data.id) {
            return { ...item, quantity: item?.quantity! + 1 };
          }
          return item;
        });

        const updatedTotalQuantity = get().totalQuantity! + 1;
        const updatedTotalCost = get().totalCost! + Number(data.price);

        set({ products: updatedProducts, totalQuantity: updatedTotalQuantity, totalCost: updatedTotalCost });

        toast.success("Product quantity increased");
      },
      subtractProductQuantity: (data: Product) => {
        const subtractProduct = get().products.find(item => item.id === data.id);

        if (!subtractProduct) {
          return;
        }

        if (subtractProduct.quantity === 1) {
          const updatedProducts = get().products.filter(item => item.id !== subtractProduct.id);
          const updatedTotalQuantity = get().totalQuantity! - 1;
          const updatedTotalCost = get().totalCost! - Number(subtractProduct.price);

          set({ products: updatedProducts, totalQuantity: updatedTotalQuantity, totalCost: updatedTotalCost });
        } else {
          const updatedProducts = get().products.map(item => {
            if (item.id === data.id) {
              return { ...item, quantity: item?.quantity! - 1 };
            }
            return item;
          });

          const updatedTotalQuantity = get().totalQuantity! - 1;
          const updatedTotalCost = get().totalCost! - Number(data.price);

          set({ products: updatedProducts, totalQuantity: updatedTotalQuantity, totalCost: updatedTotalCost });
        }
      },

      removeProduct: (id: string) => {
        const productToRemove = get().products.find(item => item?.id?.toString() === id);

        if (productToRemove) {
          const updatedTotalQuantity = get().totalQuantity! - productToRemove.quantity!;
          const updatedTotalCost = get().totalCost! - productToRemove.quantity! * productToRemove.price;

          const updatedProducts = get().products.filter(item => item?.id?.toString() !== id);

          set({
            products: updatedProducts,
            totalQuantity: updatedTotalQuantity,
            totalCost: updatedTotalCost,
          });

          toast.success("Product removed");
        }
      },
      removeProducts: () => set({ products: [] }),
    }),
    {
      name: "product-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useProductCart;
