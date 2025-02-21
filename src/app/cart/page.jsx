"use client"
import Cart from "@/Components/Cart/Cart";
import { store } from "@/Components/State/store";
import { Provider } from "react-redux";


export default function CartPage() {
  return <Provider store={store}><Cart /> </Provider>;
}
