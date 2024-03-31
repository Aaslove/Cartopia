import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc"
import CardItem from "../components/CardItem"
const cartItems = []
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
    // useEffect(() => {
    //     if (Math.random() > .5) setIsValid(true)
    //     else setIsValid(false)
    // }, [discountCoupan])

    return (
        <div className="cart">
            <main>
                {
                    cartItems.map((item) => {
                        <CardItem key={item.id} />
                    })
                }
            </main>
            <aside>
                <p>SubTotal: {subTotal}</p>
                <p>Shipping Charges: ${shippingCharges}</p>
                <p>Tax: {tax}</p>
                <p>
                    Discount: <em> - {discount}</em>

                </p>
                <p>
                    <b>Total: {total}</b>
                </p>
                <input
                    type="text"
                    value={discountCoupan}
                    onChange={(e) => setDiscountCoupan(e.target.value)}
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

            </aside>
        </div>
    )
}

export default Cart;