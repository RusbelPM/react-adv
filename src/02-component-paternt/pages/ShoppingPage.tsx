import { ProductCard, ProductImage, ProductsButtonts, ProductTitle } from '../components';

const producto = {
    id:"20251351",
    title:"Coffee Mug",
    img:"./coffee-mug.png"

}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <ProductCard producto={producto}>
      
            <ProductImage  />
            <ProductTitle title={""}/>
            <ProductsButtonts />

        </ProductCard>

        <ProductCard producto={producto}>
      
            <ProductCard.Image  />
            <ProductCard.Title title={"Hello world"}/>
            <ProductCard.Buttons/>

         </ProductCard>
              

    </div>
  )
}
