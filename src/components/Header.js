import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    const [btnName, setBtnName] = useState("login");

    const data = useContext(UserContext);
    // console.log(data);

    // Suscribing to the store using the selector
    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    return (
        <div className="header flex justify-between bg-green-100">
            <div className="logo-container">
                <img className="logo w-28" src={LOGO_URL} alt="Logo" />
            </div>

            <div className="nav-items flex items-center m-4 p-4">
                <ul className="flex">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/cart">Cart ({cartItems.length})</Link></li>

                    <button className="login" onClick={() => {
                        if(btnName === "login") setBtnName("logout");
                        else setBtnName("login");
                    }}>{btnName}</button>
                    <li className="px-4 font-bold">{data.loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header;