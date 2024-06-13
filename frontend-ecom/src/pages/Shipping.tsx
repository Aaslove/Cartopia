import { ChangeEvent, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const [shippingInfo, setShippingTnfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
    });

    const navigate = useNavigate();
    const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setShippingTnfo(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className="shipping">
            <button className="back-btn" onClick={() => navigate("/cart")}>
                <BiArrowBack />
            </button>
            <form>
                <h1>Shipping Address</h1>

                <input
                    required
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={changeHandler}
                />
                <input
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    value={shippingInfo.city}
                    onChange={changeHandler}
                />

                <input
                    required
                    type="text"
                    placeholder="State"
                    name="state"
                    value={shippingInfo.state}
                    onChange={changeHandler}
                />
                <select
                    required
                    name="country"
                    value={shippingInfo.state}
                    onChange={changeHandler}
                >
                    <option value="Choose country">Choose country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>

                </select>
                <input
                    required
                    type="number"
                    placeholder="Pincode"
                    name="pincode"
                    value={shippingInfo.pincode}
                    onChange={changeHandler}
                />

                <button>Pay Now</button>
            </form>
        </div>
    );
};

export default Shipping;
