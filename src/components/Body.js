import RestaurantCards from "./RestaurantCards";
import Shimmer from "./Shimmer";
import { restaurantList } from "../constants";
import { useEffect, useState } from "react";

function filterData(searchText, allRestaurants) {
  const filterData = allRestaurants.filter((restaurant) => {
    return restaurant?.data?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.93704&lng=80.936499&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {filteredRestaurants.length === 0 ? (
          <div className="noRestaurant">
            <h1 className="oops">Oops.....</h1>
            <h2 className="oopsStatement">
              {" "}
              Nothing is matched from your searched input
            </h2>
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <RestaurantCards key={restaurant.data.id} {...restaurant.data} />
            );
          })
        )}
      </div>
    </>
  );
};
export default Body;
