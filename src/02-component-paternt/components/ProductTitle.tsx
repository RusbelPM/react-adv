import { useContext } from "react";
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";


export interface Props {
    title?:string ,
    className?:string,
    style?:React.CSSProperties
}



export const ProductTitle = ({title ,className, style}:Props)=>{
    
    const {producto} = useContext(ProductContext);

    // let titulo:string;

    // if (title){
    //     titulo = title      
    // } else{
    //     titulo = producto.title
    // }
    return(

        <span 
        style={style}
        className={`${styles.productDescription} ${className}`}>{title?title : producto.title}</span>
    )
   }