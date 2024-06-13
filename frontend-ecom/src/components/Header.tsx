import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaSignInAlt, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";
import { useState } from "react";


const user = {
    _id: "kycghv",
    role: ""
}

const Header = () => {


    const [isOpen, setIsOpen] = useState<boolean>(false);
    const logout = (() => {
        console.log("Hello from logout")
    })

    return (
        <nav className="header">
            <Link onClick={() => setIsOpen(false)} to={"/"}>Home</Link>
            <Link onClick={() => setIsOpen(false)} to={"/search"}><FaSearch /></Link>
            <Link onClick={() => setIsOpen(false)} to={"/cart"}><FaShoppingBag /></Link>

            {user?._id ? (
                <>
                    <button onClick={() => setIsOpen((prev) => !prev)}>
                        <FaUser />
                    </button>
                    <dialog open={isOpen}>
                        <div>
                            {user.role === "admin" && (
                                <Link to={"/admin/dashboard"}>Admin</Link>
                            )}

                            <Link to={"/orders"}>Orders</Link>

                            <button onClick={logout}>
                                <FaSignOutAlt />
                            </button>
                        </div>
                    </dialog>
                </>
            ) : (
                <Link to={"/login"}><FaSignInAlt /></Link>
            )}

        </nav>
    )
}

export default Header