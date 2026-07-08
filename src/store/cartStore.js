import { create } from "zustand";
import { persist } from "zustand/middleware"

const useCartStore = create(persist((set) => ({

  items: [],
  promoCode: "",
  isPromoCorrect: false,
  promoError: false,

  clearPromo: () =>
    set({
      promoCode: "",
      isPromoCorrect: false,
      promoError: false,
    }),

  applyPromo: (code) => {
    const normalizedCode = code.trim().toUpperCase();


    if (normalizedCode === "") {
      set({
        promoCode: "",
        isPromoCorrect: false,
        promoError: false,
      })
      return;
    }

    if (normalizedCode === "SULIKO10") {
      set({
        promoCode: normalizedCode,
        isPromoCorrect: true,
        promoError: false,
      })
    } else {
      set({
        promoCode: "",
        isPromoCorrect: false,
        promoError: true,
      })

    }
  },



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
    items: [],
    promoCode: "",
    isPromoCorrect: false,
    promoError: false,
  }),


}), {
  name: "suliko-cart",
  partialize: (state) => ({
    items: state.items,
    promoCode: state.promoCode,
    isPromoCorrect: state.isPromoCorrect,
  }),
}));


export default useCartStore

