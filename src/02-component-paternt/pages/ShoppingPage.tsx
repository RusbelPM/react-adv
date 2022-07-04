import { ProductCard, ProductImage, ProductsButtonts, ProductTitle } from '../components';
import "../styles/custom-stylos.css"

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
        <div 
        style={{
          display:"flex",
          flexDirection:"row",
          flexWrap:"wrap"
        }}>
        <ProductCard 
        className="bg-dark text-white"
        producto={producto}>
      
            <ProductCard.Image 
            style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.6)"}}
            className="custom-image" />
            <ProductCard.Title className="text-bold"/>
            <ProductCard.Buttons className="custom-butons"/>

         </ProductCard>
        <ProductCard 
        className="bg-dark text-white"
        producto={producto}>
      
            <ProductImage
            style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.6)"}}
            className="custom-image"  />
            <ProductTitle className="text-bold"/>
            <ProductsButtonts className="custom-butons"/>

        </ProductCard>

        <ProductCard
        className={"text-white"}
        style={{
          backgroundColor:"blueviolet"
        }} 
        producto={producto}>
      
            <ProductImage style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.6)"}} />
            <ProductTitle style={{fontWeight:'bold' }}/>
            <ProductsButtonts style={{display:"flex",justifyContent:"center"}}/>

        </ProductCard>

        </div>

              

    </div>
  )
}
