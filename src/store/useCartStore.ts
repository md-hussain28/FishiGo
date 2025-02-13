import { create } from 'zustand';
import { Product } from '../types';

interface CartState {
  items: { product: Product; quantity: number }[];
  total: number;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  total: 0,
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + product.price,
        };
      }

      return {
        items: [...state.items, { product, quantity: 1 }],
        total: state.total + product.price,
      };
    }),
  removeItem: (productId) =>
    set((state) => {
      const item = state.items.find((item) => item.product.id === productId);
      if (!item) return state;

      return {
        items: state.items.filter((item) => item.product.id !== productId),
        total: state.total - item.product.price * item.quantity,
      };
    }),
  updateQuantity: (productId, quantity) =>
    set((state) => {
      const item = state.items.find((item) => item.product.id === productId);
      if (!item) return state;

      const quantityDiff = quantity - item.quantity;

      return {
        items: state.items.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        ),
        total: state.total + item.product.price * quantityDiff,
      };
    }),
  clearCart: () => set({ items: [], total: 0 }),
}));