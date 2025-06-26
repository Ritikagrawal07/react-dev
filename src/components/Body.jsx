
import ResturantCard from "./ResturantCard.jsx";
import resList from "../utils/mockData.js";
import { useState } from "react";


const Body = () =>{

    const [listOfresturants,setlistofresturants] = useState(resList);

    // let listOfresturants = null ;

   let listOfresturantsjs = [
  {
    info: {
      id: "750239",
      name: "Shake",
      cloudinaryImageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
      cuisines: ["Beverages"],
      costForTwo: "₹150 for two",
      avgRating: 4.5
    }
  },
  {
    info: {
      id: "750132",
      name: "Juice",
      cloudinaryImageId:
        "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
      cuisines: ["Beverages"],
      costForTwo: "₹150 for two",
      avgRating: 3.8
    }
  }
];

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => 
                    {
                        // filter logic here
                        const filteredList=listOfresturants.filter((res)=>res.info.avgRating >4.3
                    );setlistofresturants(filteredList)
                    }}>Top Rated Resturants</button>
            </div>
            <div className="resturant-container">
                 {/* Resturnat card separate component*/}
                 {
          listOfresturants.map((restaurant) => (
            <ResturantCard key={restaurant.info.id} resData={restaurant} />
          ))
        }
                 

            </div>
        </div>
    )
}


export default Body;