import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-card m-4 p-4 w-64 rounded-md bg-gray-200 hover:bg-gray-300">
            <img className="res-logo rounded-md" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export const restaurantCardNonVeg = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute ml-[0.9rem]">🔴</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export const restaurantCardVeg = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute ml-[0.9rem]">🟢</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
export default RestaurantCard;