import{
    ALL_RESTAURANTS_REQUEST,
    ALL_RESTAURANTS_SUCCESS,
    ALL_RESTAURANTS_FAIL,
    CLEAR_ERRORS,
    TOGGLE_VEG_ONLY,
    SORT_BY_RATINGS,
    SORT_BY_REVIEWS,
}from "../constants/restaurantConstant.js";

const initialState = {
    restaurants: [],
};

export const restaurantReducer = (state = initialState,action)=>{
    switch(action.type)
    {

        case ALL_RESTAURANTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ALL_RESTAURANTS_SUCCESS:
            return{
                ...state,
                loading: false,
                count: action.payload.count,
                restaurants: action.payload,
            };
        case ALL_RESTAURANTS_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload,
            };
            case TOGGLE_VEG_ONLY:
                return{
                    ...state,
                    showVegOnly: !state.showVegOnly,
                    pureVegRestaurantsCount: calculatePureVegCount(
                        state.restaurants.restaurants,
                        !state.showVegOnly
                        ),
                };
            case SORT_BY_RATINGS:
                return{
                    ...state,
                    restaurants:{
                        ...state.restaurants,
                        restaurants: [...state.restaurants.restaurants].sort(
                            (a,b) => b.ratings - a.ratings
                        ),
                    },
                };
                case SORT_BY_REVIEWS:
                return{
                    ...state,
                    restaurants:{
                        ...state.restaurants,
                        restaurants: [...state.restaurants.restaurants].sort(
                            (a,b) => b.numOfReviews - a.numOfReviews
                        ),
                    },
                };
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null,
            };
        default:
            return state;
    }  
};

const calculatePureVegCount =(restaurants,showVegOnly) =>{
    if(!showVegOnly){
        return restaurants.length;
    }
    else{
        return restaurants.filter((restaurant) => restaurant.isVeg).length;
    }
};