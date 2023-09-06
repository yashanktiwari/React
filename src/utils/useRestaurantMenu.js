import { useState, useEffect } from "react";
import { MENU_API_PART_1, MENU_API_PART_2 } from "./constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    // fetch data
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_API_PART_1 + resId + MENU_API_PART_2);
        const json = await data.json();

        setResInfo(json);
    }

    return resInfo;
}

export default useRestaurantMenu;