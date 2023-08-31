import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API_PART_1, MENU_API_PART_2 } from "../utils/constants";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const [menuList, setMenuList] = useState([]);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_PART_1 + resId + MENU_API_PART_2);

        const json = await data.json();

        // console.log(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);

        setResInfo(json?.data?.cards[0]?.card.card.info);
        setMenuList(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }

    return resInfo === null ? <Shimmer /> : (
        <div className="menu">
            <img className="res-image" src={CDN_URL + resInfo.cloudinaryImageId} alt="res-image" />
            <h1>{resInfo.name}</h1>
            <h2>Cuisines: {resInfo.cuisines.join(", ")}</h2>
            <h3>Avg. Rating: {resInfo.avgRating}</h3>
            <h3>Menu</h3>
            <ul>
                {
                    menuList?.map(item => {
                        return (
                            <li key={item?.card?.info?.id}>{item?.card?.info?.name}: Price - {item?.card?.info?.price / 100 | item?.card?.info?.defaultPrice / 100}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;