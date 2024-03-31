import React from 'react'
import { FaPlus } from "react-icons/fa";


interface ProductProp {
    id: String;
    stock: Number;
    img: String;
    name: String;
    price: Number;
    cartHandler: () => void;
}


function ProductCard({ id, stock, img, name, price, cartHandler }: ProducctProp) {
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