import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg"
import styles from "../styles/styles.module.css";

export interface Props{
    img?: string
    className?:string
    style?:React.CSSProperties
}



export const ProductImage = ({img,className,style}:Props)=>{

    const {producto} = useContext(ProductContext);
    let imgToShow: string;

    if (img){
        imgToShow = img;
    } else if(producto.img){
        imgToShow = producto.img
    }else{
        imgToShow = noImage;
    }

return(
<img 
style={style}
className={`${styles.productImg} ${className}`} src={imgToShow} alt="Product"/>
)
}