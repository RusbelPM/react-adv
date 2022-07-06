
import { Props as ProductCarProps} from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductButtonsProps} from '../components/ProductButtons';




export interface Product {
    id:string;
    title?:string;
    img?:string
    
}

export interface ProductcontextProps {

    counter: number
    increaseBy:(value: number) => void
    producto: Product

}

export interface ProductCarHocProps  {
    
    ({ children, producto }:ProductCarProps ): JSX.Element,

    Title:(Props:ProductTitleProps)=> JSX.Element,
    Image:(Props:ProductImageProps) => JSX.Element
    Buttons:(Props:ProductButtonsProps) => JSX.Element


}

export interface onChangeArgs {
    producto:Product;
    count:number;
}

export interface ProductInCart extends Product {
    count:number;
  }