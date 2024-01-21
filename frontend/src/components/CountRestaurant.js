import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {getRestaurants} from "../actions/restaurantAction"; 
import "./css/count.css";

const CountRestaurant = () => {
    const dispatch = useDispatch();

    const {count, pureVegRestaurantsCount, showVegOnly, loading, error} = 
    useSelector((state) => state.restaurants);

    useEffect(() =>{
        dispatch(getRestaurants());
    },[dispatch,showVegOnly]);
  return (
  <div>
    {loading ? 
    (
    <p>Loading restaurant count...</p>
    ): error ?(
        <p>Error: {error}</p>
    ): (
        <p className="NumOfRestro">
            {showVegOnly ? pureVegRestaurantsCount : count}
            <span className="Restro">
                {showVegOnly ? 
                pureVegRestaurantsCount === 1 
                ? " restaurant" 
                : " restaurants" 
                : count ===1 
                ? " restaurant"
                 : " restaurants"}
            </span>
            <hr />
        </p>
    )}
  </div>
  );
};

export default CountRestaurant
