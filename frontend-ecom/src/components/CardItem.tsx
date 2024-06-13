import { Link } from "react-router-dom"
import { FaTrash } from "react-icons/fa"

interface itemProp {
    procuctId: string,
    name: string,
    photo: string,
    quantity: number,
    price: number,
    stock: number
}

function CardItem({ cardItem }: { cardItem: itemProp }) {
    const { procuctId, name, photo, quantity, price } = cardItem;
    return (
        <div className="cart-item">
            <img alt={name} src={photo} />
            <article>
                <Link to={`/procduct/${procuctId}`}>
                    {name}
                </Link>
                <span>${price}</span>
            </article>

            <div>
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
            </div>
            <button> <FaTrash /></button>
        </div>
    )
}

export default CardItem