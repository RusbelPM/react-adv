import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext} from "react";
import { ProductcontextProps, Props } from "../interfaces/interfaces";
// import {ProductTitle,ProductsButtonts,ProductImage} from "../components"





// interface ProductButtonsProps {

//     increaseBy:(value: number) => void;
//     counter:number;

// }


 



export const ProductContext = createContext({} as ProductcontextProps);
const {Provider} = ProductContext     /*el provider comparte informacion a sus hijos*/


export const ProductCard = ({children,producto}:Props) => {


    const {counter,increaseBy } = useProduct()



  return (
      <Provider value={{  /*el provider comparte informacion a sus hijos*/
          counter,
          increaseBy,
          producto
      }}>

    <div className={styles.productCard}>

                {
                    children
                }        
        
        
    </div>
      </Provider>
  )
}

// ProductCard.Title = ProductTitle
// ProductCard.Image = ProductImage
// ProductCard.Buttons = ProductsButtonts
