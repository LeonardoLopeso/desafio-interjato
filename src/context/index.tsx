import { CartProvider } from "./main";

const AppProvider = ({ children }: any) => {
  return(
    <CartProvider>
      {children}
    </CartProvider>
  )
};

export default AppProvider;