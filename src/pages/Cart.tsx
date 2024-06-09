import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc"
import { Link } from "react-router-dom"
import CardItem from "../components/CardItem"


const cartItems = [
    {
        productId: "adfsnlafs",
        photo: "src/assets/iphone.jpg",
        name: "iphone",
        price: 30000,
        quantity: 4,
        stock: 40
    }
]
const subTotal = 4000;
const tax = subTotal * .18;
const shippingCharges = 40;
const total = subTotal + tax + shippingCharges;
const discount = 400;

const Cart = () => {
    const [discountCoupan, setDiscountCoupan] = useState<string>("")
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        const randomCoupanChecker = setTimeout(() => {
            if (Math.random() > .5) setIsValid(true)
            else setIsValid(false)
        }, 1000);

        return () => {
            clearTimeout(randomCoupanChecker)
        };
    }, [discountCoupan])


    return (
        <div className="cart">
            <main>
                {
                    cartItems.length > 0 ? cartItems.map((item) => (
                        <CardItem key={item.productId} cardItem={item} />
                    )) : <h1>No Item</h1>
                }
            </main>
            <aside>
                <p>SubTotal: ${subTotal}</p>
                <p>Shipping Charges: ${shippingCharges}</p>
                <p>Tax: ${tax}</p>
                <p>
                    Discount: <em> - ${discount}</em>
                </p>
                <p>
                    <b>Total: ${total}</b>
                </p>
                <input
                    type="text"
                    value={discountCoupan}
                    onChange={(e) => setDiscountCoupan(e.target.value.toUpperCase())}
                />

                {
                    discountCoupan && (isValid ?
                        <span className="green">{discount} off using the
                            <code>{discountCoupan}</code>
                        </span>
                        :
                        <span className="red">
                            Invalid Error
                            <VscError />
                        </span>)
                }
                {
                    cartItems.length > 0 && <Link to={'/shipping'}>Checkout</Link>
                }
            </aside>
        </div>
    )
}

export default Cart;