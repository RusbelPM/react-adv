import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement} from "react";
import { ProductcontextProps, Product, onChangeArgs } from '../interfaces/interfaces';
// import {ProductTitle,ProductsButtonts,ProductImage} from "../components"




export interface Props {
  producto:Product
  children?:ReactElement | ReactElement []
  className?:string
  style?:React.CSSProperties
  onChange?:(args:onChangeArgs)=>void;
  value?:number
}
 



export const ProductContext = createContext({} as ProductcontextProps);
const {Provider} = ProductContext     /*el provider comparte informacion a sus hijos*/


export const ProductCard = ({children,producto,className , style,onChange , value}:Props) => {


    const {counter,increaseBy } = useProduct({producto,onChange,value})



  return (
      <Provider value={{  /*el provider comparte informacion a sus hijos*/
          counter,
          increaseBy,
          producto
      }}>

    <div 
    style={style}
    className={`${styles.productCard}  ${className}`}>

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
