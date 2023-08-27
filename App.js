import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://media.istockphoto.com/id/1218437637/vector/food-point-logo-design.jpg?s=170667a&w=0&k=20&c=WcL0d3bOWCJUxoQ24Mx17S5DwboY3a2fGlGv3yBUdVw=" alt="Logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}


const RestaurantCard = (props) => {
    const {resData} = props;

    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId} = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-card" style={{
            backgroundColor: "lightgrey"
        }}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

const resList = [
{
    "info": {
            "id": "713073",
            "name": "Chicago Pizza",
            "cloudinaryImageId": "847bf081531b0738eeabfa8eb8ef77e0",
            "locality": "Lalit grace plaza",
            "areaName": "bhuteswar road",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Fast Food",
                "Pizzas"
            ],
            "avgRating": 2.8,
            "feeDetails": {
                "restaurantId": "713073",
                "fees": [
                        {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                        },
                        {
                            "name": "BASE_TIME"
                        },
                        {
                            "name": "ANCILLARY_SURGE_FEE"
                        }
                ],
                "totalFee": 1400
            },
            "parentId": "60277",
            "avgRatingString": "2.8",
            "totalRatingsString": "9",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-08-28 01:00:00",
                "opened": true
            },
            "badges": { },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                        "imageBased": { },
                        "textBased": { },
                        "textExtendedBadges": { }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "ABOVE ₹1500",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": { },
                        "video": { }
                }
            },
            "reviewsSummary": { },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
            "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
            "link": "https://www.swiggy.com/restaurants/chicago-pizza-lalit-grace-plaza-bhuteswar-road-mathura-713073",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
},
{

    "info": {
          "id": "231280",
          "name": "Tulsi Restaurant",
          "cloudinaryImageId": "xziw3guqnp1eputq4rvd",
          "locality": "Mayur Vihar",
          "areaName": "Mathura",
          "costForTwo": "₹200 for two",
          "cuisines": [
                "Indian",
                "Snacks",
                "Thalis",
                "Beverages"
          ],
          "avgRating": 3.5,
          "veg": true,
          "feeDetails": {
                "restaurantId": "231280",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "218330",
          "avgRatingString": "3.5",
          "totalRatingsString": "100+",
          "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "36 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 21:30:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/tulsi-restaurant-mayur-vihar-mathura-mathura-231280",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "631701",
          "name": "Burger Buddy",
          "cloudinaryImageId": "kl6bxuddumlkordb8rt9",
          "locality": "Geeta Enclave",
          "areaName": "Shankar Vihar",
          "costForTwo": "₹150 for two",
          "cuisines": [
                "Burgers",
                "Snacks",
                "Beverages"
          ],
          "avgRating": 3.9,
          "veg": true,
          "feeDetails": {
                "restaurantId": "631701",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "51230",
          "avgRatingString": "3.9",
          "totalRatingsString": "100+",
          "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 23:00:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75",
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/burger-buddy-geeta-enclave-shankar-vihar-mathura-631701",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "502306",
          "name": "Hira Sweets",
          "cloudinaryImageId": "na9ypl4rhe1vnbqajwpx",
          "locality": "Chhatikara",
          "areaName": "Vrindavan Locality",
          "costForTwo": "₹500 for two",
          "cuisines": [
                "Sweets",
                "Fast Food",
                "Pizzas"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
                "restaurantId": "502306",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 3900
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 3900
          },
          "parentId": "5155",
          "avgRatingString": "4.0",
          "totalRatingsString": "1K+",
          "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 9.7,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "9.7 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 23:00:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/hira-sweets-chhatikara-vrindavan-locality-mathura-502306",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "743888",
          "name": "Ghar Ka Khana",
          "cloudinaryImageId": "ce6f722eed5661c7356a98671799f305",
          "locality": "Maholi Rd",
          "areaName": "Shankar_Vihar",
          "costForTwo": "₹250 for two",
          "cuisines": [
                "North Indian"
          ],
          "avgRating": 3.2,
          "veg": true,
          "feeDetails": {
                "restaurantId": "743888",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "22458",
          "avgRatingString": "3.2",
          "totalRatingsString": "5",
          "sla": {
                "deliveryTime": 23,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "23 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-28 00:00:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/ghar-ka-khana-maholi-rd-shankar-vihar-mathura-743888",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "606344",
          "name": "Winni Cakes & More",
          "cloudinaryImageId": "w71vu4mnxqaye3mggtfr",
          "locality": "Govardhan Road\n",
          "areaName": "Shankar Vihar",
          "costForTwo": "₹300 for two",
          "cuisines": [
                "Bakery",
                "Desserts",
                "Fast Food"
          ],
          "avgRating": 4,
          "veg": true,
          "feeDetails": {
                "restaurantId": "606344",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "226144",
          "avgRatingString": "4.0",
          "totalRatingsString": "100+",
          "sla": {
                "deliveryTime": 21,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "21 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 22:00:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80",
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/winni-cakes-and-more-govardhan-road-shankar-vihar-mathura-606344",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "585813",
          "name": "Cake House",
          "cloudinaryImageId": "bhxiidrnmbdbx11c8woh",
          "locality": "Krishna Nagar \n",
          "areaName": "Shankar Vihar",
          "costForTwo": "₹200 for two",
          "cuisines": [
                "Bakery",
                "Snacks"
          ],
          "avgRating": 3.5,
          "veg": true,
          "feeDetails": {
                "restaurantId": "585813",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "8539",
          "avgRatingString": "3.5",
          "totalRatingsString": "20+",
          "sla": {
                "deliveryTime": 20,
                "lastMileTravel": 1.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20 mins",
                "lastMileTravelString": "1.7 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 21:00:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/cake-house-krishna-nagar-shankar-vihar-mathura-585813",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "682420",
          "name": "Pizza King",
          "cloudinaryImageId": "2a3f58b0f7f088a13f4cb21888acfa49",
          "locality": "Adarsh Nagar",
          "areaName": "Shankar_Vihar",
          "costForTwo": "₹180 for two",
          "cuisines": [
                "Pizzas"
          ],
          "avgRating": 3,
          "veg": true,
          "feeDetails": {
                "restaurantId": "682420",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "4202",
          "avgRatingString": "3.0",
          "totalRatingsString": "20+",
          "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 17:15:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-king-adarsh-nagar-shankar-vihar-mathura-682420",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"

},
{

    "info": {
          "id": "583040",
          "name": "Gobblers Rolls & Bowls",
          "cloudinaryImageId": "z7nt1yvwqncytn90a6e5",
          "locality": "Govardhan Road",
          "areaName": "Shankar Vihar",
          "costForTwo": "₹300 for two",
          "cuisines": [
                "North Indian",
                "Chinese",
                "Fast Food",
                "Beverages"
          ],
          "avgRating": 3.7,
          "feeDetails": {
                "restaurantId": "583040",
                "fees": [
                      {
                            "name": "BASE_DISTANCE",
                            "fee": 1400
                      },
                      {
                            "name": "BASE_TIME"
                      },
                      {
                            "name": "ANCILLARY_SURGE_FEE"
                      }
                ],
                "totalFee": 1400
          },
          "parentId": "264245",
          "avgRatingString": "3.7",
          "totalRatingsString": "100+",
          "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
                "nextCloseTime": "2023-08-27 22:46:00",
                "opened": true
          },
          "badges": { },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
                "entityBadges": {
                      "imageBased": { },
                      "textBased": { },
                      "textExtendedBadges": { }
                }
          },
          "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL",
                "discountCalloutInfo": {
                      "message": "Free Delivery",
                      "logoCtx": {
                            "logo": "v1655895371/free_delivery_logo_hqipbo.png"
                      }
                }
          },
          "orderabilityCommunication": {
                "title": { },
                "subTitle": { },
                "message": { },
                "customIcon": { }
          },
          "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": { },
                      "video": { }
                }
          },
          "reviewsSummary": { },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": { }
    },
    "analytics": {
          "context": "seo-data-635b305e-8bdb-4a7d-8d51-5467d98398f9"
    },
    "cta": {
          "link": "https://www.swiggy.com/restaurants/gobblers-rolls-and-bowls-govardhan-road-shankar-vihar-mathura-583040",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
}
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => (
                            <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                        )
                    )
                }
                {/* <RestaurantCard resData={resList[0]}/> */}
                {/* <RestaurantCard resData={resList[1]}/> */}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);