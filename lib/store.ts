import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product, ProductVariant } from '@/types';

interface CartState {
  items: CartItem[];
  addItem: (product: Product, variant: ProductVariant, quantity: number) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product, variant, quantity) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.variant.id === variant.id
          );
          
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.variant.id === variant.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          
          return {
            items: [
              ...state.items,
              {
                id: `${product.id}-${variant.id}-${Date.now()}`,
                product,
                variant,
                quantity,
              },
            ],
          };
        });
      },
      
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },
      
      updateQuantity: (itemId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(itemId);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.variant.price * item.quantity,
          0
        );
      },
    }),
    {
      name: 'mollis-store-cart',
    }
  )
);
