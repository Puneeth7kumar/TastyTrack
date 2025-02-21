import { api } from "@/Components/config/api";
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENT_FAILURE, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENTS_FAILURE, GET_ALL_EVENTS_REQUEST, GET_ALL_EVENTS_SUCCESS, GET_ALL_RESTAURANTS_FAILURE, GET_ALL_RESTAURANTS_REQUEST, GET_ALL_RESTAURANTS_SUCCESS, GET_RESTAURANTS_CATEGORY_FAILURE, GET_RESTAURANTS_CATEGORY_REQUEST, GET_RESTAURANTS_CATEGORY_SUCCESS, GET_RESTAURANTS_EVENT_FAILURE, GET_RESTAURANTS_EVENT_REQUEST, GET_RESTAURANTS_EVENT_SUCCESS, GET_RESTAURANT_BY_ID_FAILURE, GET_RESTAURANT_BY_ID_REQUEST, GET_RESTAURANT_BY_ID_SUCCESS, GET_RESTAURANT_BY_USER_ID_FAILURE, GET_RESTAURANT_BY_USER_ID_REQUEST, GET_RESTAURANT_BY_USER_ID_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType";

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
            console.log("restaurant id", response.data)
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
            dispatch({ type: GET_RESTAURANT_BY_USER_ID_SUCCESS, payload: response.data })
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
            const { data } = await api.post(`/api/admin/restaurants`, reqData.data, {
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
export const updateRestaurant = ({ restaurantId, restaurantData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurants/${restaurantId}`, restaurantData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: UPDATE_RESTAURANT_SUCCESS, payload: res.data })
            console.log("update restaurant", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: UPDATE_RESTAURANT_FAILURE, payload: error })
        }
    }
}
export const deleteRestaurant = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_RESTAURANT_REQUEST });
        try {
            const res = await api.delete(`/api/admin/restaurants/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: DELETE_RESTAURANT_SUCCESS, payload: restaurantId })
            console.log("delete restaurant", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: DELETE_RESTAURANT_FAILURE, payload: error })
        }
    }
}
export const updateRestaurantStatus = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_RESTAURANT_STATUS_REQUEST });
        try {
            const res = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: UPDATE_RESTAURANT_STATUS_SUCCESS, payload: res.data })
            console.log("update restaurant status", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: UPDATE_RESTAURANT_STATUS_FAILURE, payload: error })
        }
    }
}
export const createEventAction = ({ data, restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_EVENT_REQUEST });
        try {
            const res = await api.post(`/api/admin/events/restaurants/${restaurantId}`, data, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: CREATE_EVENT_SUCCESS, payload: res.data })
            console.log("create events", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: CREATE_EVENT_FAILURE, payload: error })
        }
    }
}
export const getAllEvents = ({ jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_EVENTS_REQUEST });
        try {
            const res = await api.get(`/api/events`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data })
            console.log("get all events", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
        }
    }
}
export const deleteEventAction = ({ eventId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: DELETE_EVENT_REQUEST });
        try {
            const res = await api.delete(`/api/admin/events/${eventId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: DELETE_EVENT_SUCCESS, payload: res.data })
            console.log("Delete events", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: DELETE_EVENT_FAILURE, payload: error })
        }
    }
}
export const getRestaurantsEvent = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_EVENT_REQUEST });
        try {
            const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: GET_RESTAURANTS_EVENT_SUCCESS, payload: res.data })
            console.log("get restaurant events", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: GET_RESTAURANTS_EVENT_FAILURE, payload: error })
        }
    }
}
export const createCategoryActions = ({ reqData, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: CREATE_CATEGORY_REQUEST });
        try {
            const res = await api.post(`/api/admin/category`, reqData, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: CREATE_CATEGORY_SUCCESS, payload: res.data })
            console.log("Create category", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: CREATE_CATEGORY_FAILURE, payload: error })
        }
    }
}
export const getRestaurantCategory = ({ restaurantId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: GET_RESTAURANTS_CATEGORY_REQUEST });
        try {
            const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: GET_RESTAURANTS_CATEGORY_SUCCESS, payload: res.data })
            console.log("get restaurant category", res.data)
        } catch (error) {
            console.log("error", error)
            dispatch({ type: GET_RESTAURANTS_CATEGORY_FAILURE, payload: error })
        }
    }
}