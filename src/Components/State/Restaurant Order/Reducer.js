import { GET_RESTAURANT_ORDERS_FAILURE, GET_RESTAURANT_ORDERS_REQUEST, GET_RESTAURANT_ORDERS_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"

const initialState = {
    loading: false,
    orders: [],
    error: null
}
export const restaurantsOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANT_ORDERS_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case GET_RESTAURANT_ORDERS_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                orders: action.payload
            }
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updateOrders=state.orders.map((order)=>
            order.id===action.payload.id?action.payload:order)
            return {
                ...state,
                loading: false,
                orders:updateOrders
            }
        case GET_RESTAURANT_ORDERS_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.error
            }
        default:
            return state;
    }
}