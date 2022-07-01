import { useContext } from "react";
import { ProductContext } from './ProductCard';
import styles from "../styles/styles.module.css";



export const ProductTitle = ({title}:{title:string})=>{
    
    const {producto} = useContext(ProductContext);

    // let titulo:string;

    // if (title){
    //     titulo = title      
    // } else{
    //     titulo = producto.title
    // }
    return(

        <span className={styles.productDescription}>{title?title : producto.title}</span>
    )
   }