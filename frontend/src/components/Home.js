import React,{useEffect}from 'react'
import {getRestaurants,sortByRatings,sortByReviews,toggleVegOnly,} from "../actions/restaurantAction";
import Restaurant from "../components/Restaurant";
import Loader from "./Layout/Loader";
import Message from "../components/Message";
import {useDispatch, useSelector} from "react-redux";
import CountRestaurant from "./CountRestaurant";
import { useParams } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const {keyword} = useParams();
  const {
    loading: restaurantsLoading,
    error: restaurantsError,
    restaurants,
    showVegOnly,
  } = useSelector((state) => state.restaurants);

    useEffect(() =>{
      if (restaurantsError)
      {
        return alert.error(restaurantsError);
      }
      dispatch(getRestaurants(keyword));  
    } , [dispatch, restaurantsError,keyword]);


    const handleSortByRatings =() =>{
      dispatch(sortByRatings());
    };
    const handleSortByReviews = () =>{
      dispatch(sortByReviews());
    };
    const handleToggleVegOnly = () =>{
      dispatch(toggleVegOnly());
    };
  return (
    <>
    <CountRestaurant />
      {restaurantsLoading ? (
      <Loader />
      ) : restaurantsError ? (
        <Message variant ="danger">{restaurantsError}</Message>
      ): (
        <>
           <section>
            <div className="sort">
              <button className="sort_veg p_3" 
              onClick = {handleToggleVegOnly}>
                {showVegOnly ? "show All" : "Pure Veg"}
                
              </button>
              <button className="sort_rev p_3" onClick = {handleSortByReviews}>
                Sort By Reviews
              </button>
              <button className="sort_rate p_3" onClick = {handleSortByRatings}>
                Sort By ratings
              </button>
            </div>
             <div className="row mt-4">
              {restaurants && restaurants.restaurants ? (
                restaurants.restaurants.map((restaurant) => 
                 !showVegOnly || (showVegOnly && restaurant.isVeg) ? (
                  <Restaurant key ={restaurant._id} restaurant = {restaurant} />
                )
                  : null
                )
                ) :(
                  <Message variant ="info"> No restaurants Found. </Message>

                )}
                
             </div>
            </section>
        
        </>

      )}
    </>
  );
};

export default Home
