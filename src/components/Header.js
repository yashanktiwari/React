import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    const [btnName, setBtnName] = useState("login");

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
                    <li className="px-4">Cart</li>
                    <button className="login" onClick={() => {
                        if(btnName === "login") setBtnName("logout");
                        else setBtnName("login");
                    }}>{btnName}</button>
                </ul>
            </div>

        </div>
    )
}

export default Header;