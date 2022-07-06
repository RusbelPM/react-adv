import { ProductCard, ProductImage, ProductsButtonts, ProductTitle } from '../components';
import "../styles/custom-stylos.css"
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../components/data/productos';




export const ShoppingPage = () => {
  

  const {shoppingCart,onProductChange} = useShoppingCart()
  
  

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

          {
            products.map(product =>(

        <ProductCard 
        key={product.id}
        className="bg-dark text-white"
        producto={product}
        onChange={onProductChange}
        value={shoppingCart[product.id]?.count || 0 }
          
          
          >
            <ProductImage
            style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.6)"}}
            className="custom-image"  />
            <ProductTitle className="text-bold"/>
            <ProductsButtonts className="custom-butons"/>

        </ProductCard>

            ))
          }
   
      

        </div>

              <div className="shopping-cart">

                {
                  Object.entries(shoppingCart).map(([key , producto ]) => (  /*el Object.entries te permite obtener las entradas de un objeto  y permite pasarlo por un mapa*/

              <ProductCard
                    key={key}
                    style={{width:"100px"}}
                    className="bg-dark text-white"
                    producto={producto}
                    onChange={onProductChange}
                    value={producto.count}
                    >
                    <ProductImage
                    style={{boxShadow:"10px 10px 10px rgba(0,0,0,0.6)"}}
                    className="custom-image"  />
                    <ProductsButtonts className="custom-butons"/>

              </ProductCard>
                  ))
                }

        
              </div>

              {/* <div>
                <code>{JSON.stringify(shoppingCart,null,5)}</code>
              </div> */}

    </div>
  )
}
