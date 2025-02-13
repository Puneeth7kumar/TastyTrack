import { CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_REQUEST } from "./ActionType";

export const getAllRestaurantsAction = (token) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_RESTAURANTS_REQUEST });
        try {
            const { data } = await api.get(`/api/restaurant`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({ type: GET_ALL_RESTAURANTS_SUCCESS, payload: data })
            console.log("all restaurant", data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: GET_ALL_RESTAURANTS_FAILURE, payload: error })
        }
    }
}

export const getRestaurantById = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_ID_REQUEST });
        try {
            const response = await api.get(`/api/restaurant/${reqData.restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${reqData.jwt}`,
                },
            });
            dispatch({ type: GET_RESTAURANT_BY_ID_SUCCESS, payload: response.data })
            console.log("restaurant id", data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: GET_RESTAURANT_BY_ID_FAILURE, payload: error })
        }
    }
}
export const getRestaurantByUserId = (jwt) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANT_BY_USER_ID_REQUEST });
        try {
            const response = await api.get(`/api/admin/restaurants/user`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: data })
            console.log("restaurant by user id", data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_FAILURE, payload: error })
        }
    }
}
export const createRestaurant = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_RESTAURANT_REQUEST });
        try {
            const {data} = await api.post(`/api/admin/restaurants`,reqData.data, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            });
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
            console.log("create restaurant", data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
        }
    }
}
export const UpdateRestaurant = ({restaurantId,restaurantData,jwt}) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurants/${restaurantId}`,restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: CREATE_RESTAURANT_SUCCESS, payload: data })
            console.log("create restaurant", data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: CREATE_RESTAURANT_FAILURE, payload: error })
        }
    }
}