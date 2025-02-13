import { store } from "@/Components/State/store";
import { Provider } from "react-redux";

export function Providers({ children }) {
    return <Provider store={store}>{children}</Provider>
}