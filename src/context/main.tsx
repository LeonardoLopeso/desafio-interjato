import { createContext, useCallback, useContext, useState } from 'react';
import { IItem, IProduct } from '../types';

interface CartContextData {
  cart: IItem[];
  addProductToCart: (data: IProduct) => void;
  removeProductCar: (id: number) => void;
  removeProductInCart: (id: number) => void;
  clearCart: () => void;
  totalCart: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider = ({ children }: any) => {
  localStorage.setItem('@DesafioInter:cart', JSON.stringify([]));

  const [cart, setCart] = useState<IItem[]>(() => {
    
    const hasCart = localStorage.getItem('@DesafioInter:cart');

    if (hasCart) {
      return JSON.parse(hasCart);
    }

    return {} as IItem; 
  });

  const addProductToCart = useCallback(async (data: IProduct) => {
    const copyCart = [...cart];

    const item = copyCart.find(prod => prod.id === data.id);

    if(!item) {
      copyCart.push({ 
        qtd: 1,
        id: Number(data.id), 
        prod: data,
      });
    } else {
      item.qtd = item.qtd + 1;
    }

    localStorage.setItem('@DesafioInter:cart', JSON.stringify(copyCart));
    setCart(copyCart);
  }, [cart]);

  const removeProductCar = useCallback((id: number) => {
    const copyCart = [...cart];

    const item = copyCart.find(prod => prod.id === id);

    if(item?.qtd && item.qtd > 1) {
      item.qtd = item.qtd - 1;
      localStorage.setItem('@DesafioInter:cart', JSON.stringify(copyCart));
      setCart(copyCart);  
    } else {

      const arrayFiltered = copyCart.filter(prod => prod.id !== id);
      localStorage.setItem('@DesafioInter:cart', JSON.stringify(arrayFiltered));
      setCart(arrayFiltered);
    }

  }, [cart]);

  const removeProductInCart = useCallback((id: number) => {
    const copyCart = [...cart];

    const arrayFiltered = copyCart.filter(prod => prod.id !== id);
    localStorage.setItem('@DesafioInter:cart', JSON.stringify(arrayFiltered));
    setCart(arrayFiltered);

  }, [cart]);


  const totalCart = cart.reduce((total, element) => {
    if (element.prod?.price !== undefined) {
      return total += (element.qtd * element.prod.price);
    } else { 
      return total
    }
  }, 0);

  const clearCart = () => {
    setCart([])
    localStorage.setItem('@DesafioInter:cart', JSON.stringify([]));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        removeProductCar,
        removeProductInCart,
        clearCart,
        totalCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if(!context) {
    throw new Error("useCart must be used within an CartProvider");
  }

  return context;
}

export { CartProvider, useCart }