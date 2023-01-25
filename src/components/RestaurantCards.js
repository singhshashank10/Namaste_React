import { CDN_IMG_URL } from "../constants";

const RestaurantCards = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // console.log(props)
  return (
    <div className="card">
      <img alt=" Pizza Hut" src={CDN_IMG_URL + cloudinaryImageId}></img>
      <div className="cardDetails">
        <h2> {name}</h2>
        <p>{cuisines.join(", ")}</p>
        <span>{avgRating}★</span>
      </div>
    </div>
  );
};
export default RestaurantCards;
