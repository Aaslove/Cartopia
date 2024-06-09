
import { FaPlus } from "react-icons/fa";


interface ProductProp {
    id: string;
    stock: number;
    img: string;
    name: string;
    price: number;
    cartHandler: () => void;
}


function ProductCard({ id, stock, img, name, price, cartHandler }: ProductProp) {
    return (
        <div className="productCard">
            <img src={img} alt={name} />
            <p>{name}</p>
            <span>$ {price}</span>

            <div>
                <button onClick={() => cartHandler()}><FaPlus /></button>
            </div>
        </div>
    )
}

export default ProductCard