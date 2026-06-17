import { create } from "zustand";

const useCartStore = create((set) => ({

  items: [],

  addItem: (item) => set((state) => {

    const existing = state.items.find(i => i.id === item.id)

    if (existing) {
      // Encrease quantity of existing dish
      return {
        items: state.items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
    }
    // Add for the first time

    return {
      items: [...state.items, { ...item, quantity: 1 }]
    }

  }),

  increaseItem: (id) => set((state) => {
    return {
      items: state.items.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i)

    }
  }),


  decreaseItem: (id) => set((state) => {
    return {
      items: state.items
        .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
        .filter(i => i.quantity > 0)

    }
  }),


  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),


  clearCart: () => set({
    items: []
  }),


}));


export default useCartStore

