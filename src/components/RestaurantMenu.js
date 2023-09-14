import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_API_PART_1, MENU_API_PART_2 } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(1);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, avgRating, cloudinaryImageId } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(categories);

  return (
    <div className="menu flex">
      <div className="mx-16 my-8">
        <h1 className="font-bold text-xl my-4">{name}</h1>
        <img
          className="res-image w-72 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="res-image"
        />
        <h2 className="mt-3">
          <span className="font-semibold text-lg">Cuisines:</span>{" "}
          {cuisines.join(", ")}
        </h2>
        <h3>
          <span className="font-semibold text-lg">Avg. Rating:</span>{" "}
          {avgRating}
        </h3>
      </div>
      <div className="m-8">
        <h3 className="font-bold text-2xl">Menu</h3>
        <ul className="mt-4">
          {
            // Controlled component
            categories.map((item, index) => (
              <RestaurantCategory
                data={item?.card?.card}
                key={index}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => {index === showIndex ? setShowIndex(-1) : setShowIndex(index)}}
              />
            ))
          }
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
