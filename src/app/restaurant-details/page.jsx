"use client"
import RestaurantDetails from "@/Components/Restaurant/RestaurantDetails";
import { store } from "@/Components/State/store";
import { Provider } from "react-redux";


export default function RestaurantDetailsPage() {
    return (
        <div> <Provider store={store}><RestaurantDetails /></Provider></div>
    )

}
