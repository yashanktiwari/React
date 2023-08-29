import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-card" style={{
            backgroundColor: "lightgrey"
        }}>
            <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;