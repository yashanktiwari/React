import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        // console.log(json);
        // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        // Optional Chaining -> ?
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return (
        <h1>Looks like you are offline!! Please check your internet connection</h1>
    )

    // Conditional Rendering
    if(listOfRestaurants?.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter flex m-2">

                <div className="search">
                    <input type="text"className="search-box border border-solid border-black py-1 px-2 mx-2" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn border border-solid border-gray-400 py-1 px-4 rounded-lg bg-green-700 text-white mx-2" onClick={() => {
                        const filteredList = listOfRestaurants.filter(restaurant => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })

                        setSearchList(filteredList);
                    }}>Search</button>
                </div>

                <div>
                    <button className="filter-btn border border-solid border-gray-400 py-1 px-4 rounded-lg bg-green-700 text-white mx-2" onClick={() => {
                        filteredList = listOfRestaurants.filter(restaurant => {
                            return restaurant.info.avgRating > 3.5;
                        });

                        setSearchList(filteredList);
                        // console.log(listOfRestaurants);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap mx-8">
                {
                    searchList?.map((restaurant) => (
                            <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant.info.id}>
                                <RestaurantCard resData={restaurant}/>
                            </Link>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;