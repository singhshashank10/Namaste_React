import { restaurantList } from "../constants";
import RestaurantCards from "./RestaurantCards";
import { useState } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant.data.name.includes(searchText);
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          className="searchInput"
          placeholder="Search Here"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCards key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
