// Action creators and definied

// this will allow you to use Axios to make HTTP requests
import axios from "axios";
import { 
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
    SORT_BY_RATINGS,
    SORT_BY_REVIEWS,
    TOGGLE_VEG_ONLY,
} from "../constants/restaurantConstant";

export const getRestaurants = 
(keyword =" ") => 
async(dispatch) =>{
    try{
        dispatch({type:ALL_RESTAURANTS_REQUEST})
       // let link ="/api/v1/eats/stores"
       let link = `/api/v1/eats/stores?keyword=${keyword}`
        const {data} =await axios.get(link);
        const {restaurants,count} = data;

        dispatch({
            type: ALL_RESTAURANTS_SUCCESS,
            payload: {restaurants,count},
        });


    }catch(error) {
        dispatch({
            type: ALL_RESTAURANTS_FAIL,
            payload: error.response.data.message,
        });
    }
};
export const sortByRatings = () =>{
    return{
        type:SORT_BY_RATINGS,
    };
};

export const sortByReviews = () =>{
    return{
        type:SORT_BY_REVIEWS,
    };
};

export const toggleVegOnly = () =>(dispatch) =>{
    dispatch({type:TOGGLE_VEG_ONLY});
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type:CLEAR_ERRORS,
    });
}