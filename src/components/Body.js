import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useState } from "react";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // filteredList = listOfRestaurants.filter(restaurant => {
                    //     return restaurant.info.avgRating > 4;
                    // });

                    setListOfRestaurants(listOfRestaurants.filter(restaurant => {
                        return restaurant.info.avgRating >= 4;
                    }));

                    console.log(listOfRestaurants);
                }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                            <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default Body;