import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";



export const useShoppingCart = ()=>{


    const [shoppingCart, setShoppingCart] = useState <{[key:string]:ProductInCart}>({});

// console.log(shoppingCart)

const onProductChange = ({count,producto}:{count:number,producto:Product})=>{

  
  setShoppingCart(oldShoppingCart => {

    const productInCart:ProductInCart = oldShoppingCart[producto.id] || {...producto,count:0};  /* tarea otra manera*/

    if(Math.max(productInCart.count + count,0)>0){
      productInCart.count += count;

      return {
        ...oldShoppingCart,
        [producto.id]:productInCart
      }
    }
// borrar el resto

const {[producto.id]:elimimar,...resto } = oldShoppingCart
  return {...resto}
//    }

    

    //   if(count === 0) {                                    /*tarea*/

    //     const {[producto.id]:elimimar,...resto } = oldShoppingCart
    //     return resto
    //    }
    // return {
    //   ...oldShoppingCart,
    //   [producto.id]:{...producto , count},
      
    // }
  })
}
return {
    shoppingCart,
    onProductChange
}

}
