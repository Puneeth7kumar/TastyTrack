import { api } from "@/Components/config/api"
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const findCart = (token) => {
    return async (dispatch) => {
        dispatch({ type: FIND_CART_REQUEST })
        try {
            const response = await api.get(`/api/cart`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            console.log("my cart items", response.data)
            dispatch({ type: FIND_CART_SUCCESS, payload: response.data })
        } catch (error) {
            console.log("error", error)
            dispatch({ type: FIND_CART_FAILURE, payload: error })
        }
    }
}
export const getAllCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_CART_ITEMS_REQUEST })
        try {
            const response = await api.get(`/api/cart/${reqData.cartId}/items`, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            })
            dispatch({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: response.data })
        } catch (error) {
            dispatch({ type: GET_ALL_CART_ITEMS_FAILURE, payload: error })
        }
    }
}
export const addItemToCart = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: ADD_ITEM_TO_CART_REQUEST })
        try {
            const { data } = await api.put(`/api/cart/add`, reqData, {
                headers: {
                    Authorization: `Bearer ${reqData.token}`,
                },
            })
            console.log("add item to cart", data)
            dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        } catch (error) {
            console.error("Error adding item to cart:", error.response ? error.response.data : error.message);
            dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.response ? error.response.data : error.message });
        }
    }
}
export const updateCartItem = (reqData) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_CART_ITEM_REQUEST });

        try {
            const { data } = await api.put(
                `/api/cart-item/update`,
                { cartItemId: reqData.data.cartItemId, quantity: reqData.data.quantity }, // Fix payload structure
                {
                    headers: {
                        Authorization: `Bearer ${reqData.jwt || reqData.token}`, // Ensure proper token usage
                    },
                }
            );

            console.log("Update cart response:", data);

            dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
        } catch (error) {
            console.error("Update cart error:", error.response?.data || error.message);
            dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.response?.data || error.message });
        }
    };
};

export const removeCartItem = ({ cartItemId, jwt }) => {
    return async (dispatch) => {
        dispatch({ type: REMOVE_CART_ITEM_REQUEST });
        try {
            const { data } = await api.delete(`/api/cart-item/${cartItemId}/remove`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });
            dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: { id: cartItemId } });  // Ensure correct payload
        } catch (error) {
            dispatch({
                type: REMOVE_CART_ITEM_FAILURE,
                payload: error.response ? error.response.data : error.message,
            });
        }
    };
};

export const clearCartAction = () => {
    return async (dispatch) => {
        dispatch({ type: CLEAR_CART_REQUEST })
        try {
            const { data } = await api.put(`/api/cart/clear`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
            })
            console.log("clear cart", data)
            dispatch({ type: CLEAR_CART_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: CLEAR_CART_FAILURE, payload: error.message })
        }
    }
}
