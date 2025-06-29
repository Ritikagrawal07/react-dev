
import ResturantCard from "./ResturantCard.jsx";
import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer.jsx";


const Body = () => {
  const [listOfresturants, setlistofresturants] = useState(resList);
  const [filteredResturant, setfilteredResturant] = useState(resList);
  const [searchText, setsearchText] = useState("");

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(
  //       "https://swiggy-api-4c740.web.app/swiggy-api.json"
  //     );

  //     const json = await data.json();

  //     const restaurants =
  //       json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
  //         ?.restaurants || [];

  //     setlistofresturants(restaurants);
  //     setfilteredResturant(restaurants);
  //   } catch (error) {
  //     console.error("Error fetching restaurant data:", error);
  //   }
  // };

  if (listOfresturants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered = listOfresturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResturant(filtered);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfresturants.filter(
              (res) => res.info.avgRating > 4.3
            );
            setfilteredResturant(filteredList); // ✅ Update filtered, not original
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="resturant-container">
        {filteredResturant.map((restaurant) => (
          <ResturantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};



export default Body;
