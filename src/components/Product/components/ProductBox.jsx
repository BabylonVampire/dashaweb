import prods from "../../../data/products";
import Product from "..";

const ProductBox = () => {
    return (
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