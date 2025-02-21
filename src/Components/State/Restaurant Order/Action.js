import { GET_RESTAURANT_ORDERS_FAILURE, GET_RESTAURANT_ORDERS_REQUEST, GET_RESTAURANT_ORDERS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"

export const updateOrderStatus = ({ orderId, orderStatus, jwt }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: UPDATE_ORDER_STATUS_REQUEST });
            const response = await api.put(`api/admin/order/${orderId}/${orderStatus}`, {}, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            const updateOrder = response.data;
            console.log("updated order", updateOrder)
            dispatch({ type: UPDATE_ORDER_STATUS_SUCCESS, payload: updateOrder })
        } catch (error) {
            dispatch({ type: UPDATE_ORDER_STATUS_FAILURE, payload: error })
        }
    }
}
export const fetchRestaurantOrder = ({ restaurantId, orderStatus, jwt }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_RESTAURANT_ORDERS_REQUEST });
            const { data } = await api.get(`api/admin/order/restaurant/${restaurantId}`, {
                params: { order_status: orderStatus },
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            const orders = data;
            console.log("restaurant order", orders)
            dispatch({ type: GET_RESTAURANT_ORDERS_SUCCESS, payload: orders })
        } catch (error) {
            dispatch({ type: GET_RESTAURANT_ORDERS_FAILURE, payload: error })
        }
    }
}