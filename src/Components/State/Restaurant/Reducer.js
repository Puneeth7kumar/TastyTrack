import * as actionTypes from "./ActionType";
const initialState = {
    restaurants: [],
    userRestaurants: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantsEvent: [],
    categories: []
}
export const restaurantReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_RESTAURANT_REQUEST:
        case actionTypes.GET_ALL_RESTAURANTS_REQUEST:
        case actionTypes.DELETE_RESTAURANT_REQUEST:
        case actionTypes.UPDATE_RESTAURANT_REQUEST:
        case actionTypes.GET_RESTAURANT_BY_ID_REQUEST:
        case actionTypes.CREATE_CATEGORY_REQUEST:
        case actionTypes.GET_RESTAURANTS_CATEGORY_REQUEST:
            return { ...state, loading: true, error: null }
        case actionTypes.CREATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                userRestaurants: action.payload
            };
        case actionTypes.GET_ALL_RESTAURANTS_SUCCESS:
            return { ...state, loading: false, restaurants: action.payload }
        case actionTypes.GET_RESTAURANT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurant: action.payload
            }
        case actionTypes.GET_RESTAURANT_BY_USER_ID_SUCCESS:
        case actionTypes.UPDATE_RESTAURANT_STATUS_SUCCESS:
        case actionTypes.UPDATE_RESTAURANT_SUCCESS:
            return {
                ...state,
                loading: false,
                usersRestaurants: action.payload,

            }
        case actionTypes.DELETE_RESTAURANT_SUCCESS:

            return {
                ...state, loading: false, error: null,
                restaurants: state.restaurants.filter(
                    (item) => item.id !== action.payload
                ),
                userRestaurant: state.userRestaurants.filter(
                    (item) => item.id !== action.payload
                ),
            };
        case actionTypes.CREATE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: [...state.events, action.payload],
                restaurantsEvent: [...state.restaurantsEvent, action.payload],
            };
        case actionTypes.GET_ALL_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantsEvent: action.payload,
            }
        case actionTypes.GET_RESTAURANTS_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                restaurantsEvent: action.payload,
            }
        case actionTypes.DELETE_EVENT_SUCCESS:
            return {
                ...state,
                loading: false,
                events: state.events.filter((item) => item.id !== action.payload),
                restaurantsEvent: state.restaurantsEvent.filter(
                    (item) => item.id !== action.payload
                ),
            }
        case actionTypes.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: [...state.categories, action.payload],
            }
        case actionTypes.GET_RESTAURANTS_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload,
            }
        case actionTypes.CREATE_RESTAURANT_FAILURE:
        case actionTypes.GET_ALL_RESTAURANTS_FAILURE:
        case actionTypes.DELETE_RESTAURANT_FAILURE:
        case actionTypes.UPDATE_RESTAURANT_FAILURE:
        case actionTypes.GET_RESTAURANT_BY_ID_FAILURE:
        case actionTypes.CREATE_EVENT_FAILURE:
        case actionTypes.CREATE_CATEGORY_FAILURE:
        case actionTypes.GET_RESTAURANTS_CATEGORY_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state;
    }
}