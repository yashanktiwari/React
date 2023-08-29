import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


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

        // Optional Chaining -> ?
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setSearchList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    if(listOfRestaurants?.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">

                <div className="search">
                    <input type="text"className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredList = listOfRestaurants.filter(restaurant => {
                            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
                        })

                        setSearchList(filteredList);
                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    filteredList = listOfRestaurants.filter(restaurant => {
                        return restaurant.info.avgRating > 3.5;
                    });

                    setSearchList(filteredList);
                    // console.log(listOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    searchList?.map((restaurant) => (
                            <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;