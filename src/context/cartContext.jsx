import { createContext, useState } from "react";

export const cartContext = createContext();

export function CartContextProvider({children}){
    const saludoContext = "Hola Context";

    const [cart,setCart]= useState([])

    function addToCart(product,count){
        let itemAlreadyInCart = cart.findIndex( itemInCart => itemInCart.id === product.id);
      let newCart = [...cart];

      if(itemAlreadyInCart !== -1){
          newCart[itemAlreadyInCart].count += count;
          setCart(newCart)
      }
      else{
          product.count = count;
          newCart.push(product)
          setCart(newCart)
      }
    }
    function itemsInCart(){
        let total=0;
        cart.forEach((itemInCart)=>(total= total + itemInCart.count));
        return total;
    }
    function priceInCart(){
        let totalPrice=0;
        cart.forEach((producto)=>(totalPrice= totalPrice + (producto.price*producto.count)));
        return totalPrice;
    }
    function clear(){
        setCart([]);
    }
    function removeItem(idRemove){
        console.log("Eliminando el item",idRemove);
        const newCart=[...cart];
        newCart.pop();
        setCart(newCart);
    }
    function alreadyInCart(){

    }
    
    return(
        <cartContext.Provider value={{cart, saludoContext,itemsInCart,addToCart,removeItem, clear,priceInCart,alreadyInCart}}>
         {children}
        </cartContext.Provider>
    )
}