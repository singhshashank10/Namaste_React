import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { CDN_IMG_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { RestaurantId } = useParams();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=26.931751270092686&lng=80.94019129872322&menuId=" +
        RestaurantId
    );
    json = await data.json();
    setRestaurant(json.data);
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant_container">
        <div className="restaurant_Img">
          <img src={CDN_IMG_URL + restaurant?.cloudinaryImageId} />
        </div>
        <div className="restaurant_details">
          <h1>{restaurant?.name}</h1>
          <h3>
            {restaurant?.city}, {restaurant?.area}
          </h3>
          <h4>{restaurant?.locality}</h4>
          <h4>{restaurant?.avgRating} stars</h4>
          <h5>{restaurant?.cuisines?.join(", ")}</h5>
        </div>
      </div>
      <div className="restaurant_menu">
        {Object?.values(restaurant?.menu?.items).map((item) => (
          <div className="menu_item" key={item?.id}>
            <div className="menu_details">
              <p>{item?.name}</p>
              <p>₹ {item?.price / 100}</p>
              <span>{item?.description}</span>
            </div>
            <div className="menu_image">
              {item.cloudinaryImageId ? (
                <img
                  className="item_image"
                  src={CDN_IMG_URL + item.cloudinaryImageId}
                />
              ) : (
                <img
                  className="no_image"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM4sEG5g9GFcy4SUxbzWNzUTf1jMISTDZrTw&usqp=CAU"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
