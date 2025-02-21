"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import ProfileNavigation from "./ProfileNavigation";

// Lazy load components for better performance
const componentMap = {
    UserProfile: dynamic(() => import("./UserProfile"), { loading: () => <p>Loading...</p> }),
    Orders: dynamic(() => import("./Orders"), { loading: () => <p>Loading...</p> }),
    Favorites: dynamic(() => import("./Favorites"), { loading: () => <p>Loading...</p> }),
    Address: dynamic(() => import("./Address"), { loading: () => <p>Loading...</p> }),
    Payment: dynamic(() => import("./Payment"), { loading: () => <p>Loading...</p> }),
    Notifications: dynamic(() => import("./Notifications"), { loading: () => <p>Loading...</p> }),
    Events: dynamic(() => import("./Events"), { loading: () => <p>Loading...</p> }),
    //Logout: dynamic(() => import("./"), { loading: () => <p>Loading...</p> })
};

const Profile = () => {
    const searchParams = useSearchParams();
    const selectedSection = searchParams.get("section") || "UserProfile"; // Default section

    // Dynamically get the component
    const SelectedComponent = componentMap[selectedSection];

    return (
        <div className="lg:flex bg-slate-900">
            {/* Sidebar Navigation */}
            <div className="lg:w-[20%] h-full lg:sticky top-0">
                <ProfileNavigation />
            </div>

            {/* Main Content */}
            <div className="lg:w-[80%] p-5 bg-slate-900 min-h-screen">
                {SelectedComponent ? <SelectedComponent key={selectedSection} /> : <p>Component not found</p>}
            </div>
        </div>
    );
};

export default Profile;
