import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductsButtonts } from './ProductButtons';
import { ProductCarHocProps } from '../interfaces/interfaces';
// export { ProductCard} from './ProductCard';
export { ProductImage } from './ProductImage';
export  { ProductsButtonts } from './ProductButtons';
export { ProductTitle } from './ProductTitle';

export const ProductCard : ProductCarHocProps = Object.assign(ProductCardHOC ,{
    Title: ProductTitle,
    Image: ProductImage,
    Buttons:ProductsButtonts
})

export default ProductCard;