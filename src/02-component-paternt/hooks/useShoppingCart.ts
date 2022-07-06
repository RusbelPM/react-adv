import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = ()=>{


    const [shoppingCart, setShoppingCart] = useState <{[key:string]:ProductInCart}>({});

// console.log(shoppingCart)

const onProductChange = ({count,producto}:{count:number,producto:Product})=>{

  
  setShoppingCart(oldShoppingCart => {

    

      if(count === 0) {                                    /*tarea*/

        const {[producto.id]:elimimar,...resto } = oldShoppingCart
        return resto
       }
    return {
      ...oldShoppingCart,
      [producto.id]:{...producto , count},
      
    }
  })
}
return {
    shoppingCart,
    onProductChange
}

}
