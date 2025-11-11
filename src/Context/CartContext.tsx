import { createContext, useState } from "react";
import { useEffect } from "react";

interface CartContextType {
    cart: string[];
    setCart: React.Dispatch<React.SetStateAction<string[]>>; 
};

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  // Load saved cart from localStorage once
  const [cart, setCart] = useState<string[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}