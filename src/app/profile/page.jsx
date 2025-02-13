"use client"
import { NavBar } from "@/Components/NavBar/NavBar";
import Profile from "@/Components/Profile/Profile";
import ProfileNavigation from "@/Components/Profile/ProfileNavigation";
import { store } from "@/Components/State/store";
import { Provider } from "react-redux";


export default function ProfilePage() {
    return (
        <div>
            <Provider store={store}>
                <NavBar />
                <ProfileNavigation />
                <Profile /></Provider>
        </div>
    );
}
