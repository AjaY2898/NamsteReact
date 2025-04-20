import RestaurantCard from "./RestaurantCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import resList from "../utils/mockData.js";
import { Link, useParams } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [serachText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    if (
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants != null
    ) {
      setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else if (
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants != null
    ) {
      setListOfRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredListOfRestaurant(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else {
      console.log("data is null usign dummy data");
      setListOfRestaurant(resList);
      setFilteredListOfRestaurant(resList);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div>
        <h1>
          Looks Like your Offline!!! Please check your internet connection
        </h1>
      </div>
    );
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={serachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log("searching for category :- " + serachText);
              const searchedRest = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(serachText.toLowerCase())
              );
              searchedRest.length > 0
                ? setFilteredListOfRestaurant(searchedRest)
                : null;
            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
            filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredListOfRestaurant(filteredList);
          }}
        >
          Top rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
