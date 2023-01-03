import prods from "../data/products/index.js";
import Product from "./Product";

const ProductBox = () => {
    return(
        <div>
            {prods.map((item) => {
                return (
                    <Product
                        name={item.name} 
                        description={item.description} 
                        price={item.price} 
                        img={item.img}
                    />
                )
            })}
        </div>
    )
}

export default ProductBox;