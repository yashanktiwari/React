import RestaurantCard, { restaurantCardNonVeg, restaurantCardVeg } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.4924134&lng=77.673673&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    // console.log(json);
    // console.log(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    // Optional Chaining -> ?
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const RestaurantCardNonVeg = restaurantCardNonVeg(RestaurantCard);
  const RestaurantCardVeg = restaurantCardVeg(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );

  // Conditional Rendering
  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return (
    <div className="body">
      <div className="filter flex m-2">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid border-black py-1 px-2 mx-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn border border-solid border-gray-400 py-1 px-4 rounded-lg bg-green-700 text-white mx-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });

              setSearchList(filteredList);
            }}
          >
            Search
          </button>
        </div>

        <div>
          <button
            className="filter-btn border border-solid border-gray-400 py-1 px-4 rounded-lg bg-green-700 text-white mx-2"
            onClick={() => {
              filteredList = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating > 3.5;
              });

              setSearchList(filteredList);
              // console.log(listOfRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="mx-8">
          <label>Username</label>
          <input type="text" className="mx-2 search-box border border-solid border-black py-1 px-2" value={loggedInUser} onChange={(e) => {
            setUserName(e.target.value);
          }}/>
        </div>
      </div>
      <div className="res-container flex flex-wrap mx-8">
        {searchList?.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant.info.id}
          >
            {/* If the restaurant is a non-veg restaurant, then show red dot */}
            {/* <RestaurantCard resData={restaurant}/> */}
            {restaurant?.info?.veg ? (
              <RestaurantCardVeg resData={restaurant} />
            ) : (
              <RestaurantCardNonVeg resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
